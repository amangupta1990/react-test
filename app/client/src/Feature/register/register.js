


import React, { Component } from 'react';
import Service from '../../service';


class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pass: '',
      name: ''
    }

    debugger;

  }

  handleSubmit(e) {
    e.preventDefault();
    
    let newUser = this.state;

    Service.register(newUser)
    .then( (response)=> {
      
      alert(response.data.message);
      debugger;
      // send the user to the login page 
      this.history.push('/login')
    })
    .catch( (error)=> {
      alert(error.response.data.message);
    });

  }

  updateEmail(e) {
    // TODO : error handling 
  
    this.setState({
      email: e.target.value
    })
  }

  updatePass(e) {
    // TODO : error handling 
    this.setState({
      pass: e.target.value
    })
  }

  updateName(e) {
    // TODO : error handling 
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <label>
          Name:
          <input type="password" onChange={this.updateName.bind(this)} />
        </label>
        <label>
          Email:
          <input type="text" onChange={this.updateEmail.bind(this)} />
        </label>
        <label>
          Password:
          <input type="password" onChange={this.updatePass.bind(this)} />
        </label>
        <button type="button" value="Submit" onClick={this.handleSubmit.bind(this)} value="login" >login</button>


      </div>
    );
  }
}

export default Register