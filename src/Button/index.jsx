import React from 'react';
import './button.css'

function Button ({ txt, esBotonDeClick, manejarClick }){
    return(
        <button
        className={ esBotonDeClick? 'botonClick': 'botonReiniciar' }
        onClick={manejarClick}>
            {txt}
        </button>
    )
};

export {Button};