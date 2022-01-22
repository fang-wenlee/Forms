import React, { useState, useEffect, useRef } from "react";
import { useTimeout } from "usehooks-ts";

export const Timeout = () => {
  const messageRef = useRef("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    messageRef.current = message;
  }, [message]);

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    setTimeout(() => {
      // Most recent value
      console.log(messageRef.current);
      //console.log(message);
      setMessage("");
    }, 5000);
  };

  return (
    <>
      <input onChange={handleChange} value={message} />
      <button onClick={sendMessage}>Send message</button>
    </>
  );
};

//==============================================================================
export const TimeoutComponent = () => {
  const [visible, setVisible] = useState(true);

  const hide = () => setVisible(false);

  useTimeout(hide, 5000);

  return (
    <div>
      <p>
        {visible
          ? "I'm visible for 5000ms"
          : "You can no longer see this content"}
      </p>
    </div>
  );
};

//======================================================
export class TimeCount extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      countstart: 1,
      countend: 20
    };
    // this.counter = this.counter.bind(this);
    this.count = this.count.bind(this);
  }

  componentDidMount() {
    this.count();
  }

  counter = () => {
    if (this.state.countstart < this.state.countend) {
      this.setState({ countstart: this.state.countstart + 1 });
    }
  };

  count() {
    setInterval(() => {
      this.counter();
    }, 1000);
  }

  render() {
    return (
      <div>
        {/* <Hello name={this.state.name} /> */}

        <h2>{this.state.name} </h2>
        <p>{this.state.countstart}</p>
      </div>
    );
  }
}

//=======================================================

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="timer-test">
      <div className="time">{seconds} seconds </div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
