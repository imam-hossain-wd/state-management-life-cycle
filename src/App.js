import './App.css';
import CardThree from './components/CardThree';
import CardTwo from './components/CardTwo';
import CardOne from './components/CardOne'
import { useState } from 'react';

function App() {
  const [count , setCount] = useState(0)
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <CardOne
      count={count}
      />
      <CardTwo
       count={count}
       setCount={setCount}
      />
      <CardThree
       count={count}
      />
    </div>
  );
}

export default App;
