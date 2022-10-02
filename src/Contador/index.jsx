import React from 'react';
import './contador.css';

function Contador ({ numClicks }){
    return (
        <div
        className='contador'>
            {numClicks}
        </div>
    )
};

export { Contador };