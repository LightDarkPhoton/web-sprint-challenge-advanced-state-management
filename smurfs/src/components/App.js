import React, { Component } from "react";
import "./App.css";

import { connect } from 'react-redux'
import { getSmurfs, postSmurfs } from '../actions/index'
import Form from './Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        {this.props.smurfArray.map(elem => {
          return <div key={elem.id}>
            <p>Name: {elem.name}</p> 
            <p>Age: {elem.age}</p>
            <p>Height: {elem.height}</p>
          </div>
          
        })}

        <button onClick={this.props.getSmurfs}>Get Smurfs</button>
        {/* <button onClick={this.props.postSmurfs}>Post Smurfs</button> */}
        <Form/>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      smurfArray: state.smurfArray
  }
}
export default connect(mapStateToProps, { getSmurfs, postSmurfs })(App)
//export default App;


