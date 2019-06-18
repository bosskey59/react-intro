import React from 'react';
import Button from './Button'
// const click = () =>{
//     console.log("click")
// }

const Person = ({name, age, click, id}) =>{
    return(
        <li>{name} is {age} yrs old. <Button click={click} id={id}/></li>
        ) 
}


export default Person