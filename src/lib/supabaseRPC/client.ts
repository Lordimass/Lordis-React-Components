"use client";

import { IToast } from "../toasts";
import { useEffect, useState } from "react";
import { callRPC } from "./server";

/**
 * React hook wrapper for {@link callRPC}. It's recommended that you wrap this function with other functions for each
 * Postgres function you want to call, e.g. a `useGetProducts` function which wraps `useCallRPC("get_products", {})`,
 * and returns {@link UseRPCReturn | `UseRPCReturn<ProductData>`} for type safety.
 *
 * {@link LRC.supabase} must be defined.
 *
 * @param functionName The name of the Postgres function to call.
 * @param params Any parameters for the function.
 * @param toast A method with which to notify the user if something goes wrong.
 * @returns A {@link UseRPCReturn | `UseRPCReturn`} object containing 3 React states indicating the status of the RPC call.
 */
export function useCallRPC(
  functionName: string,
  params?: { [key: string]: any },
  toast?: (toast: IToast | string) => void,
): UseRPCReturn<any> {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await callRPC(functionName, params, toast);
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
