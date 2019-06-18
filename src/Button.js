import React from 'react';

const Button = (props) =>{
    return(<button onClick={()=> props.click(props.id)}>X</button>)
}

export default Button