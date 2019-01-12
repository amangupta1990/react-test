


import React, { Component } from 'react';
import Service from '../../service';


class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pass: ''
    }

    

  }

  handleSubmit(e) {
    e.preventDefault();
    
    let creds = this.state;

    Service.login(creds)
    .then( (response) =>{
      
      alert(response.data.user.name);
    })
    .catch( (error) => {
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

  render() {
    return (
      <div>
        <h1>Login</h1>

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

export default Login