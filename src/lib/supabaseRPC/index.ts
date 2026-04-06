import { SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { LRC } from "../index";

const SUPABASE_DATABASE_URL: string = import.meta.env
  .VITE_SUPABASE_DATABASE_URL;
const SUPABASE_ANON_KEY: string = import.meta.env.VITE_SUPABASE_ANON_KEY;
if (SUPABASE_DATABASE_URL && SUPABASE_ANON_KEY) {
  LRC.supabase = new SupabaseClient(SUPABASE_DATABASE_URL, SUPABASE_ANON_KEY);
}

/**
 * Safe call of {@link SupabaseClient.rpc} with the option to notify users when something goes wrong. It's recommended
 * that you wrap this function with other functions for each Postgres function you want to call, e.g. a `getProducts`
 * function which wraps `callRPC("get_products", {})`, and returns [`ProductData[]`]{@link ProductData} for type safety.
 * @param functionName The name of the Postgres function to call.
 * @param params Any parameters for the function.
 * @param notify A method with which to notify the user if something goes wrong.
 * @param supabase The Supabase client to call the function with. Defaults to {@link LRC.supabase}, but this function
 * may be called within Netlify serverless functions, so the parameter exists to allow supplying a different client.
 */
export async function callRPC(
  functionName: string,
  params?: { [key: string]: any },
  notify?: (msg: string) => void,
  supabase: SupabaseClient | undefined = LRC.supabase,
): Promise<any> {
  // Check that the client exists
  if (!supabase) {
    console.error("`supabase` was not defined.");
    if (notify) {
      notify(
        `An error occurred while calling the "${functionName}" function because the Supabase client was not defined"`,
      );
    }
    return undefined;
  }

  // Call the function and handle any errors
  const { data, error } = await supabase.rpc(functionName, params);
  if (error) {
    console.error(`Error calling RPC function "${functionName}":`, error);
    if (notify)
      notify(
        `An error occurred while calling the "${functionName}" function. Please try again later.`,
      );
    return Promise.reject(error);
  } else {
    return data;
  }
}

/**
 * The return type of {@link useCallRPC}. Contains 3 properties:
 * - `loading` - Whether the request is still loading
 * - `data` - The data returned from the request, if any. Will be `undefined` until the request is done loading or if
 * there is an error.
 * - `error` - Any error that occurred while calling the function. `undefined` if there are no errors.
 */
export interface UseRPCReturn<T> {
  loading: boolean;
  data?: T;
  error?: Error;
}

/**
 * React hook wrapper for {@link callRPC}. It's recommended that you wrap this function with other functions for each
 * Postgres function you want to call, e.g. a `useGetProducts` function which wraps `useCallRPC("get_products", {})`,
 * and returns {@link UseRPCReturn | `UseRPCReturn<ProductData>`} for type safety.
 *
 * {@link LRC.supabase} must be defined. If `VITE_SUPABASE_DATABASE_URL` & `VITE_SUPABASE_ANON_KEY` from
 * `import.meta.env`
 *
 * @param functionName The name of the Postgres function to call.
 * @param params Any parameters for the function.
 * @param notify A method with which to notify the user if something goes wrong.
 * @returns A {@link UseRPCReturn | `UseRPCReturn`} object containing 3 React states indicating the status of the RPC call.
 */
export function useCallRPC(
  functionName: string,
  params?: { [key: string]: any },
  notify?: (msg: string) => void,
): UseRPCReturn<any> {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await callRPC(functionName, params, notify);
        console.log(result);
        setData(result);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData().then();
  }, []);

  return { loading, data, error };
}
