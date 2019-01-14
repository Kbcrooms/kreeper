import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'

class Navbar extends Component{
  render(){
    return(
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="Women">Women</NavLink>
        <NavLink to="Men">Men</NavLink>
      </div>
    );
  }
}

export default Navbar;
