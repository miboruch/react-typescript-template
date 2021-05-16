import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const test2 = '';
  const name = 'test';

  console.log(test2);
  console.log(name);

  const print = (name: string) => console.log(name);
  console.log(print('michael'));

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
