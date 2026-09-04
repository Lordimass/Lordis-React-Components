import { SupabaseClient } from "@supabase/supabase-js";
import { LRC } from "../config";
import { type IToast } from "../toasts";

/**
 * Safe call of {@link SupabaseClient.rpc} with the option to notify users when something goes wrong. It's recommended
 * that you wrap this function with other functions for each Postgres function you want to call, e.g. a `getProducts`
 * function which wraps `callRPC("get_products", {})`, and returns [`ProductData[]`]{@link ProductData} for type safety.
 * @param functionName The name of the Postgres function to call.
 * @param params Any parameters for the function.
 * @param toast A method with which to notify the user if something goes wrong.
 * @param supabase The Supabase client to call the function with. Defaults to {@link LRC.supabase}, but this function
 * may be called within Netlify serverless functions, so the parameter exists to allow supplying a different client.
 */
export async function callRPC(
  functionName: string,
  params?: { [key: string]: any },
  toast?: (toast: IToast | string) => void,
  supabase: SupabaseClient | undefined = LRC.supabase,
): Promise<any> {
  // Check that the client exists
  if (!supabase) {
    console.error("`supabase` was not defined.");
    if (toast) {
      toast(
        `An error occurred while calling the "${functionName}" function because the Supabase client was not defined"`,
      );
    }
    return undefined;
  }

  // Call the function and handle any errors
  const { data, error } = await supabase.rpc(functionName, params);
  if (error) {
    console.error(`Error calling RPC function "${functionName}":`, error);
    if (toast)
      toast(
        `An error occurred while calling the "${functionName}" function. Please try again later.`,
      );
    return Promise.reject(error);
  } else {
    return data;
  }
}
