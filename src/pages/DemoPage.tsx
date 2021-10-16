import React, { FC, ReactElement } from 'react';
import ToggleComponent from '../components/ToggleComponent';


export interface Props {
  id?: string;
  className: string;
};

const DemoPage: FC<Props> = (props): ReactElement => {
  return (
    <main id={props?.id ?? 'demo-page'} className={props.className}>
      <section>
        <header><h2>Toggle Example</h2></header>
        <ToggleComponent />
      </section>
    </main>
  )
};

export default DemoPage;
