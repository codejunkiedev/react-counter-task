import React from 'react';
const ButtonApp = ({text,onClick})=>{
    
    return(
        <input className="text-primary buttonApp" type="button" onClick={onClick} value={text} />
    )
}

export default ButtonApp;