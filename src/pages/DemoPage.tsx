import React, { FC, ReactElement } from 'react';
import ArrayComponent from '../components/ArrayComponent';
import DebounceComponent from '../components/DebounceComponent';
import TimeoutComponent from '../components/TimeoutComponent';
import ToggleComponent from '../components/ToggleComponent';
import UpdateEffectComponent from '../components/UpdateEffectComponent';


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
      <section>
        <header><h2>Debounce Example</h2></header>
        <DebounceComponent />
      </section>
      <section>
        <header><h2>Update Effect Example</h2></header>
        <UpdateEffectComponent />
      </section>
      <section>
        <header><h2>Array Example</h2></header>
        <ArrayComponent />
      </section>
    </main>
  )
};

export default DemoPage;
