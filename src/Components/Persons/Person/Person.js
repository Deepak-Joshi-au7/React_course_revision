import React, { Component } from "react";
// import Radium, {StyleRoot} from 'radium';
import "./Person.css";

class Person extends Component {
  render() {
    console.log("[person.js] person only renders.....not persons");
    return (
      <div className="Person" style={this.style}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} Years Old
        </p>
        <p> {this.props.children} </p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
