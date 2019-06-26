import React, { Component } from 'react'
import Person from './person'
import ExampleForm from './ExampleForm'


export default class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            people: [{id:1, name:"alex", age:21},{id:2, name:"lizzie", age:23},{id:3, name:"vinh", age:20}],
            language: props.lang
        }
    }
    // state ={
    //     people: [{id:1, name:"alex", age:21},{id:2, name:"lizzie", age:23},{id:3, name:"vinh", age:20}]  
    // }

    // static getDerivedStateFromProps(props,state){
    //     return {
    //         language: props.lang,
    //     }
    // }

    // componentDidMount(){
    //    this.interval =  setInterval(()=>{
    //         // going to get some 3rd party API info
    //     },3000)
    // }
    // componentWillUnmount(){
    //     clearInterval(this.interval)
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     if (this.state.language === nextState.language){
    //         return false
    //     }
    //     else {
    //         return true
    //     }
    // }

    componentDidUpdate(prevProps, prevState, snapshot){
       console.log("component did update")
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
    addPerson = (data) =>{
        data.id = this.state.people.length+1
        this.setState((prevState) => {
            const addedPeople = [...prevState.people, data]
            return {people:addedPeople};
          })
    }
 
    render() {
        console.log("rendering List Component")
        return (
            <div className="hello">
            <ul>
             { this.state.people.map((person) => <Person {...person} key={person.id} click={this.click}/>)}
            </ul>
            <ExampleForm addPerson={this.addPerson}/>
            <h1>{this.state.language}</h1>
            </div>
        )
    }
}

