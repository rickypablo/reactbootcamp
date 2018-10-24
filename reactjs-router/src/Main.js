import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Hello from './components/Hello';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

const NoMatch = ({ location }) => (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
    </div>
);

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route path="/hello/:id" component={Hello}/>
        <Route exact path='/userlist' component={UserList}></Route>
        <Route path="/userdetails/:id" component={UserDetails}/>                
        <Route component={NoMatch} />
    </Switch>
);

export default Main;