import React, { useEffect, useRef } from 'react';


export function useUpdateEffect(callback: React.EffectCallback, dependencies: React.DependencyList) {
  const callbackRef = useRef(callback);
  const firstRenderDone = useRef(false);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    firstRenderDone.current && callbackRef.current();
    firstRenderDone.current = true;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies]);
}
