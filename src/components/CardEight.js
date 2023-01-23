import React from 'react';

const CardEight = ({thirdCount,setThirdCount}) => {
    return (
        <div style={{backgroundColor:"#1e272e"}} className="card w-80 h-40  shadow-xl text-white mb-10">
    
        <div className='flex justify-center items-center my-5'>
           <div className='text-2xl mt-10'>{thirdCount}</div>
        </div>
        <div className="card-actions flex justify-center">
            <button onClick={()=> setThirdCount(thirdCount-10)} className="btn btn-primary btn-sm">Discrement</button>
            <button onClick={()=> setThirdCount(thirdCount+10)} className="btn btn-primary btn-sm">Increment</button>
          </div>
         
      
     </div>
    );
};

export default CardEight;