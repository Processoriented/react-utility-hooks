import React, { useEffect, useRef } from 'react';


export function useUpdateEffect(callback: React.EffectCallback, dependencies: React.DependencyList) {
  const firstRenderDone = useRef(false);

  useEffect(() => {
    if (firstRenderDone.current) return callback();
    firstRenderDone.current = true;
    return;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, ...dependencies]);
}
