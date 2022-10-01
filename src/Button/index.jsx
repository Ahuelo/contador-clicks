import React from 'react';

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