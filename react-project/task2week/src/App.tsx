import React from 'react';
import './App.css';
import Demo1 from './task1_useFetch';
import Demo2 from './task2_useLocalStorage';
import Demo3 from './task3_useHover'
import Demo4 from './task4_useViewportSize';
import Demo5 from './task5_useWindowScroll';
import Demo6 from './task6_useToggleArray';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>Result School home work. React 2th week</p>
      </header>
      <Demo1 />
      <Demo2 />
      <Demo3 />
      <Demo4 />
      <Demo5 />
      <Demo6 />
    </div>
  );
}

export default App;
