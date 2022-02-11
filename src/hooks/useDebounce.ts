import { useEffect } from 'react';
import { TimeoutCallbackFn, useTimeout } from '.';


export function useDebounce(callback: TimeoutCallbackFn, delay: number, ...dependencies: any[]) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(() => { return clear; }, [clear]);
}
