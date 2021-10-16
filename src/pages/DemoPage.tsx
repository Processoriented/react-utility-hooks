import React, { FC, ReactElement } from 'react';
import TimeoutComponent from '../components/TimeoutComponent';
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
      <section>
        <header><h2>Timeout Example</h2></header>
        <TimeoutComponent />
      </section>
    </main>
  )
};

export default DemoPage;
