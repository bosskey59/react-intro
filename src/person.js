import React from 'react';
import { Link } from "react-router-dom";
import Button from './Button'

// const click = () =>{
//     console.log("click")
// }

const Person = ({name, age, click, id}) =>{
    return(
        <li><Link to={`/person/${id}`}>{name}</Link> is {age} yrs old. <Button click={click} id={id}/></li>
        ) 
}


export default Person