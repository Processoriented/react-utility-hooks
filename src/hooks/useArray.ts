import { useState } from 'react';


export type ReduceCallbackFn<T, U> = (previousValue: U, currentValue: T, currentIndex: number) => U;

export function useArray<T = any>(initial: Array<T> = []) {
  const [array, setArray] = useState(initial);

  function push(element: T) {
    setArray(a => [...a, element]);
  }

  function unshift(element: T) {
    setArray(a => [element, ...a]);
  }

  function pop() {
    const nextArray = [...array];
    const returnVal = nextArray.pop();
    setArray(nextArray);
    return returnVal;
  }

  function shift() {
    const nextArray = [...array];
    const returnVal = nextArray.shift();
    setArray(nextArray);
    return returnVal;
  }

  function filter<S extends T>(callback: ((value: T, index: number) => value is S)) {
    setArray(a => a.filter(callback));
  }

  function update(index: number, newElement: T) {
    setArray(a => ([
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1),
    ]));
  }

  function remove(index: number) {
    setArray(a => ([
      ...a.slice(0, index),
      ...a.slice(index + 1, a.length - 1),
    ]));
  }

  function insert(index: number, newElement: T) {
    setArray(a => ([
      ...a.slice(0, index),
      newElement,
      ...a.slice(index, a.length - 1),
    ]));
  }

  function sort(compareFn: (a: T, b: T) => number) {
    setArray(a => a.sort(compareFn));
  }

  function clear() {
    setArray([]);
  }

  function map(callback: (value: T, index: number) => T) {
    setArray(a => a.map(callback));
  }

  function mapped<U = any>(callback: (value: T, index: number) => U): U[] {
    return array.map(callback);
  }

  function reduce(callback: ReduceCallbackFn<T, T[]>) {
    setArray(a => a.reduce(callback, []));
  }

  function reduced<U = any>(callback: ReduceCallbackFn<T, U>, initialValue: U): U {
    return array.reduce(callback, initialValue);
  }

  function every(callback: (value: T, index: number) => unknown): boolean {
    return array.every(callback);
  }

  function some(callback: (value: T, index: number) => unknown): boolean {
    return array.some(callback);
  }

  function includes(value: T): boolean {
    return array.includes(value);
  }

  return { array, clear, every, filter, includes, insert, map, mapped, pop, push, reduce,
    reduced, remove, set: setArray, shift, some, sort, unshift, update };
}
