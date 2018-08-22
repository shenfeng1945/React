import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component{
    
    render(){
      return (
        <nav style={{width:'200px'}}>
           <Link to="/">高阶组件</Link>
           <Link to="/local/2">react-powerplug</Link>
        </nav>
       )
    }
}
export default Nav