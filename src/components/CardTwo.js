import React from 'react';

const CardTwo = ({ count, setCount}) => {
    return (
        <div style={{backgroundColor:"#1e272e"}} className="card w-80 mb-10 h-40">
        
        <div className="card-body items-center text-center">
         <div className='flex justify-center items-center my-5'>
            <div className='text-2xl text-white'>{count}</div>
         </div>
          <div className="card-actions">
            <button onClick={()=> setCount(count -1)} className="btn btn-primary btn-sm">Discrement</button>
            <button onClick={()=> setCount(count +1)} className="btn btn-primary btn-sm">Increment</button>
          </div>
        </div>
      </div>
    );
};

export default CardTwo;