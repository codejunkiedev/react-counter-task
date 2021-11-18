import React from 'react';

const ButtonCounter = ({text,onClick,filled})=>{
    
    return(
        <input className={`btn ${filled ?"btn-primary text-white":"btn-outline-primary"} `} type="button" onClick={onClick} value={text} />
    )
}

export default ButtonCounter;