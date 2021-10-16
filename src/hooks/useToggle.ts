import { useState } from 'react';


export function useToggle(defaultValue: boolean): [boolean, ((value: any) => void)] {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value: any) {
    setValue(currentValue => typeof value === 'boolean' ? value : !currentValue);
  }

  return [value, toggleValue];
}
