import React, { Component } from 'react';
import Content from './components/content'
import './App.scss';

class App extends Component {
  render() {
    return (
       <div className="App">
         <h2>React学习</h2> 
         <div className="container">
           {/* <Nav /> */}
           <Content />
         </div>
       </div>
    );
  }
}

export default App;
