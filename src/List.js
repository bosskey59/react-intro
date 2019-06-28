import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import Person from './person'
import ExampleForm from './ExampleForm'
import Welcome from './Welcome'


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

    // componentDidUpdate(prevProps, prevState, snapshot){
    //    console.log("component did update")
    // }



    click = (id) =>{
        console.log(id)
        this.setState((prevState) => {
            const filteredPpl = prevState.people.filter(person =>(
                person.id !== id   
               ))
            return {people:filteredPpl};
          })

    }
    addPerson = (data) =>{
        
        this.setState((prevState) => {
            data.id = prevState.people.length + 1
            const addedPeople = [...prevState.people, data]
            return {people:addedPeople};
          })
    }
 
    render() {
        console.log("rendering List Component")
        return (
            <Router>
                 <div className="hello">
                <Link to="/"><button>Home</button></Link>
                <Link to="/new"><button>Add a Person</button></Link>
                <Switch>
                    <Route path="/person/:id" render={({ match })=>(<Person click={this.click} {...this.state.people.find(p => p.id === parseInt(match.params.id))} />)} />
                    <Route path="/new" render={()=>(<ExampleForm addPerson={this.addPerson}/>)} />  
                    <Route path="/" render={()=>(<Welcome people={this.state.people} click={this.click}/>)} /> 
                </Switch>


                    
                    {/* <ExampleForm addPerson={this.addPerson}/> */}
                </div>
            </Router>
        )
    }
}


