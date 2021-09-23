import React, { useCallback } from 'react';


export default function ExampleForm() {
  const formRef = useCallback((node: HTMLFormElement) => {
    // const { elements } = node;
    // for (let element in elements) {
    //   console.log({ element });
    // }
  }, [])

  return (
    <form className="example-form" ref={formRef}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" required />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" required />
      </div>
      <input type="submit" />
    </form>
  );
}
