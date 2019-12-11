import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display:false
    }
  }
  render() { 
    return (<div>
        <ul className="head">
          <li>Home</li>
          <ul onClick={()=> this.setState({display:!this.state.display})} className="serv">Services
            <div className={this.state.display ? 'display':"hide"}>
            <li>For enterpreneurs</li>
            <li>For students</li>
            <li>For hobbyists</li>
            </div>
          </ul>
          <li className="contact">Contact</li>
        </ul>
    </div>  );
  }
}
 
export default App;



