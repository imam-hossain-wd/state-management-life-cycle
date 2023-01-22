import React from 'react';

const CardThree = ({ count}) => {
    return (
        <div style={{backgroundColor:"#1e272e"}} className="card w-80 h-40">
        
        <div className="card-body items-center text-center">
         <div className='flex justify-center items-center my-5'>
            <div className='text-2xl text-white'>{count}</div>
         </div>
          
        </div>
      </div>
    );
};

export default CardThree;