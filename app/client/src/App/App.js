import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Login from '../Feature/login/login';
import Register from '../Feature/register/register';


class App extends Component {
  render() {
    return (


  
        <div>
          <Link to="/login">login</Link>
          <br></br>
          <Link to="/register">register</Link>
          <br></br>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route  path="/login" component={Login} />
            <Route  path="/register" component={Register} />
          </Switch>
        </div>
  



    );
  }
}

export default App;