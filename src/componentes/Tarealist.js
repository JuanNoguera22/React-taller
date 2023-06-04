import React from 'react';

function Tarealista(props){
    return(
        <li className='list-item'>
            {props.item}
            <span>
                <i 
                onClick={e =>{
                    props.borraritem(props.index)
                }}> ⬅</i>
            </span>
        </li>
    );
}

export default Tarealista;