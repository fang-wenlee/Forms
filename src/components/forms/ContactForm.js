import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: { name: "Maui-Maui", age: 2, color: "White" }
    };
  }

  handleAge = () => {
    this.setState({
      dog: {
        ...this.state.dog,
        age: 20
      }
    });
  };

  render() {
    const { name, age } = this.state.dog;
    return (
      <div>
        <h2> Dog's Hospital</h2>
        <p>{name}</p>
        <p>{age} years old!</p>
        <button onClick={this.handleAge}>Update age</button>
      </div>
    );
  }
}
