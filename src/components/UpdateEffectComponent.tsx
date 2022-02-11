import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { useUpdateEffect } from '../hooks';


const UpdateEffectComponent: FC = (): ReactElement => {
  const [count, setCount] = useState(10);
  const initialized = useRef(false);

  useUpdateEffect(() => alert(`Update effect count: ${count}.`), [count]);
  
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    alert(`Regular effect count: ${count}`);
  }, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(c => (c + 1))}>Increment</button>
    </div>
  );
};

export default UpdateEffectComponent;
