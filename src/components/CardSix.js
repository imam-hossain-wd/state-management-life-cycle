import React from 'react';

const CardSix = ({secondCount}) => {
    return (
        <div style={{backgroundColor:"#1e272e"}} className="card w-80 mb-10 h-40">
        
        <div className="card-body items-center text-center">
         <div className='flex justify-center items-center my-5'>
            <div className='text-2xl text-white'>{secondCount}</div>
         </div>
         
        </div>
      </div>
    );
};

export default CardSix;