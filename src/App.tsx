import React from 'react';
import './App.scss';
import FormPage from './pages/FormPage';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Utility Hooks</h1>
      </header>
      <main className="app-main">
        <FormPage />
      </main>
      <footer className="app-footer"></footer>
    </div>
  );
}

export default App;
