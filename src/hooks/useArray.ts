import { useCallback, useState } from 'react';


export function useArray<T = any>(initial: Array<T> = []) {
  const [array, setArray] = useState(initial);

  const push = useCallback((element: T) => {
    const nextArray = [...array, element];
    setArray(nextArray);
    return nextArray.length;
  }, [array]);

  const unshift = useCallback((element: T) => {
    const nextArray = [element, ...array];
    setArray(nextArray);
    return nextArray.length;
  }, [array]);

  const pop = useCallback(() => {
    const nextArray = [...array];
    const returnVal = nextArray.pop();
    setArray(nextArray);
    return returnVal;
  }, [array]);

  const shift = useCallback(() => {
    const nextArray = [...array];
    const returnVal = nextArray.shift();
    setArray(nextArray);
    return returnVal;
  }, [array]);

  const update = useCallback((index: number, newElement: T) => {
    const nextArray = [
      ...array.slice(0, index),
      newElement,
      ...array.slice(index + 1, array.length - 1)
    ];
    setArray(nextArray);
    return nextArray;
  }, [array]);

  const remove = useCallback((index: number) => {
    const nextArray = [
      ...array.slice(0, index),
      ...array.slice(index + 1, array.length -1),
    ];
    setArray(nextArray);
    return nextArray;
  }, [array]);

  const insert = useCallback((index: number, newElement: T) => {
    const nextArray = [
      ...array.slice(0, index),
      newElement,
      ...array.slice(index, array.length - 1),
    ];
    setArray(nextArray);
    return nextArray;
  }, [array]);

  function clear() {
    setArray([]);
  }

  return { array, clear, insert, pop, push, remove, set: setArray, shift, unshift, update };
}
