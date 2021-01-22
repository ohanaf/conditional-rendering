import React from "react";

function Input(props) {
    console.log(props);
    return(
        props.inputInfo.map(input => (
        <input 
            key={input.key} 
            type={input.type} 
            placeholder={input.placeholder}>
        </input>))
    )
}

export default Input;