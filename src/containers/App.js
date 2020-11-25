import React, { Component } from "react";
import "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  // const [personsState, setPersonsState] = useState(obj);
  // console.log(personsState);
  state = {
    persons: [
      { id: "a", name: "deepak", age: 28 },
      { id: "b", name: "deepak-v1", age: 28 },
      { id: "c", name: "deepak-v2", age: 28 },
    ],
    otherState: "this is the first value",
    showPersons: false,
    showCockpit: true,
  };

  // static getDerivedStateFromProps(props, state) {
  //   console.log(state);
  //   console.log("[App.js] getDerivedStateFromProps", props);
  //   return state;
  // }

  componentDidMount(props) {
    console.log("[App.js] componentDidMount..");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  cockpitRemover = () => {
    const remove = this.state.showCockpit;
    this.setState({ showCockpit: !remove });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    //const person = Object.assign({},this.state.persons[personIndex]);

    person.name = event.target.value;
    console.log(event);

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  // rendering page
  render() {
    console.log("[App.js] rendering....");
    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    let cockpit = (
      <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        personsLength={this.state.persons.length}
        clicked={this.togglePersonsHandler}
      />
    );

    let button = <button onClick={this.cockpitRemover}>Remove Cockpit</button>;

    return (
      <div className="App">
        {button}
        {this.state.showCockpit ? cockpit : ""}
        {persons}
      </div>
    );
  }
}
export default App;
