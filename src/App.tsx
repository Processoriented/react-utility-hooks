import React, { FC, ReactElement } from 'react';
import './App.scss';
import DemoPage from './pages/DemoPage';

const App: FC = (): ReactElement => {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Utility Hooks</h1>
      </header>
      <DemoPage className="app-main" />
      <footer className="app-footer"></footer>
    </div>
  );
}

export default App;
