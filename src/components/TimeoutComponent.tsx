import React, { FC, ReactElement, useState } from 'react';
import { useTimeout } from '../hooks';


const TimeoutComponent: FC<any> = (): ReactElement => {
  const [count, setCount] = useState<number>(10);

  const timeoutFn = () => {
    const lastCount: number = count;
    setCount((c) => (c - 1));
    if (lastCount > 1) reset();
  };
  
  const { clear, reset } = useTimeout(timeoutFn, 1000);

  const resetAll = () => {
    setCount(10);
    reset();
  };

  const increment = () => {
    const prevCount = count;
    setCount(c => (c + 1));
    if (prevCount === 0) reset();
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={resetAll}>Reset Timeout</button>
    </div>
  );
};

export default TimeoutComponent;
