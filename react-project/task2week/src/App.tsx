import React from 'react';
import './App.css';
import { useToggle } from './useToggle';
import Demo from './task1_useFetch';
import Demo2 from './task2_useLocalStorage';
import Demo3 from './task3_useHover'

function App() {
  const [toggle, setToggle] = useToggle()
  return (
    <div className="App">
      <header className="App-header">
      <p>Result School home work. React 2th week</p>
      </header>
      <Demo />
      <Demo2 />
      <Demo3 />
    </div>
  );
}

export default App;
