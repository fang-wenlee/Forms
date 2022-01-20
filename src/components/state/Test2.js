import React from "react";

export default class Test2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Maui-Maui",
      age: 2,
      color: "White"
    };
  }

  handleAge = () => {
    this.setState({ ...this.state, age: 20 });
  };

  render() {
    const { name, age } = this.state;
    return (
      <div>
        <h2> Dog's Database</h2>
        <p>{name}</p>
        <p>{age} years old!</p>
        <button onClick={this.handleAge}>Update age</button>
      </div>
    );
  }
}
