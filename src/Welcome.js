import React from 'react'
import Person from './person'

const Welcome = (props) =>{
    return(
        <>
        <h1>Meet our Cohort!</h1>
        <ul>
         { props.people.map((person) => <Person {...person} key={person.id} click={props.click}/>)}
        </ul>
        </>
    )   
}

export default Welcome