import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

export class ExampleForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"Pumbaa",
            age:"16"
        }
    
    //    this.formName = React.createRef();
    //    this.formAge = React.createRef();
    }
    formChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    handleSubmit =(e)=>{
        e.preventDefault()
        const data = {}
        // data.name = document.getElementById("name").value
        // data.age = document.getElementById("age").value
        // data.name = this.formName.current.value
        // data.age = this.formAge.current.value
        this.props.addPerson(this.state)
        this.props.history.push('/')
    }
    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" ref={this.formName} onChange={this.formChange} value={this.state.name}/>
                <label>Age:</label>
                <input type="text" name="age" ref={this.formAge} onChange={this.formChange}  value={this.state.age}/>
                <input type="submit"/>
            </form>
        )
    }
}

export default withRouter(ExampleForm)
