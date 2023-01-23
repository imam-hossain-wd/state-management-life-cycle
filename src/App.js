import './App.css';
import CardThree from './components/CardThree';
import CardTwo from './components/CardTwo';
import CardOne from './components/CardOne'
import { useState } from 'react';
import CardFour from './components/CardFour';
import CardFive from './components/CardFive';
import CardSix from './components/CardSix';
import CardSeven from './components/CardSeven';
import CardEight from './components/CardEight';
import CardNine from './components/CardNine';

function App() {
  const [firstcount , setFirstCount] = useState(0)
  const [secondCount , setSecondCount] = useState(0)
  const [thirdCount , setThirdCount] = useState(0)
  return (
   
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10 mt-10' >
     <div className='flex flex-col'>
     <CardOne
      firstcount={firstcount}
      />
      <CardTwo
       firstcount={firstcount}
       setFirstCount={setFirstCount}
       
      />
      <CardThree
       
       firstcount={firstcount}
      />
     </div>

      <div className='flex flex-col'>
      <CardFour
       secondCount={secondCount}
       
       
      />
      <CardFive
       secondCount={secondCount}
       setSecondCount={setSecondCount}
       
       
      />
      <CardSix
       
       secondCount={secondCount}
     
      />
      </div>

      <div className='flex flex-col'>
      <CardSeven
      thirdCount={thirdCount}
      />
      <CardEight
       thirdCount={thirdCount }
       setThirdCount={setThirdCount}
       
      />
      <CardNine
       
       thirdCount={thirdCount }
      />
      </div>
      
    </section>
  );
}

export default App;
