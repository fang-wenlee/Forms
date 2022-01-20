import React, { Component } from "react";

class Test1 extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { greeting: "Click the button to receive greetings" };

    // Binding this keyword
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    // Changing state
    this.setState({ greeting: "GeeksForGeeks welcomes you !!" });
  }

  render() {
    const { greeting } = this.state;
    return (
      <div>
        <h2>Greetings Portal</h2>
        <p>{greeting}</p>

        {/* Set click handler */}
        <button onClick={this.updateState}>Click me!</button>
      </div>
    );
  }
}

export default Test1;
