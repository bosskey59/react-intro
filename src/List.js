import React, { Component } from 'react'
import Person from './person'


export default class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            people: [{id:1, name:"alex", age:21},{id:2, name:"lizzie", age:23},{id:3, name:"vinh", age:20}]
        }
    }

    click = (id) =>{
        console.log(id)

        // const filteredPpl = this.state.people.filter(person =>(
        //  person.id !== id   
        // ))
        // this.setState({
        //     people:filteredPpl
        // })

        this.setState((prevState) => {
            const filteredPpl = prevState.people.filter(person =>(
                person.id !== id   
               ))
            return {people:filteredPpl};
          })

    }
    render() {
        console.log(this.state)
        return (
            <ul>
             { this.state.people.map((person) => <Person {...person} key={person.id} click={this.click}/>)}
            </ul>
        )
    }
}

