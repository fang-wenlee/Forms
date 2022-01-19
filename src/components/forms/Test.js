import React from "react";

class Test extends React.Component {
  state = {
    user: {
      name: "Fang-Wen",
      age: 19,
      active: true
    }
  };

  handleAge = () => {
    this.setState({
      user: {
        ...this.state.user,
        age: 20
      }
    });
  };

  render() {
    const { name, age } = this.state.user;
    return (
      <div>
        <p>Welcome {name}</p>
        <p>{age}</p>

        <button onClick={this.handleAge}>Update age</button>
      </div>
    );
  }
}

export default Test;
