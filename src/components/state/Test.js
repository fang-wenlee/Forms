import React, { useState, useRef, useEffect } from "react";
import "./Test.css";
export class ObjDesTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      user: { name: "Fang-Wen", age: 19, active: true }
    };
  }

  // componentDidMount() {
  //   this.ageInput.focus();
  // }

  handleChange = (e) => {
    let ageHolder = e.target.value;

    console.log(ageHolder);
    this.setState({
      user: {
        ...this.state.user,
        age: ageHolder
      }
    });
  };
  handleUpdate = () => {
    this.setState({ ...this.state, isActive: !this.state.isActive });
  };
  handleClickP = () => {
    console.log(this.state);
    this.ageInput.focus();
    this.setState({ ...this.state, isActive: !this.state.isActive });
  };

  render() {
    const { name, age } = this.state.user;
    const { isActive } = this.state;

    const showInput = isActive ? "block" : "none";
    // const successDisplay = allFieldsValid ? "block" : "none";
    return (
      <div className="object-change-container">
        <p>Welcome {name}</p>
        <p
          onClick={this.handleClickP}
          className={isActive ? "update-age" : "age"}
        >
          You age is : <span> {age} </span> Years old [click me to Update your
          age]
        </p>

        <div className="updateContainer" style={{ display: showInput }}>
          <input
            type="text"
            value={age}
            onChange={this.handleChange}
            ref={(input) => {
              this.ageInput = input;
            }}
          />

          <button onClick={this.handleUpdate}>Update age</button>
        </div>
      </div>
    );
  }
}

// export default Test;
export class SetFocusOnInput extends React.Component {
  componentDidMount() {
    this.nameInput.focus();
  }
  render() {
    return (
      <div>
        <input defaultValue="Won't focus" />
        <input
          ref={(input) => {
            this.nameInput = input;
          }}
          defaultValue="will focus"
        />
      </div>
    );
  }
}
//============================================================================
const useMountEffect = (fun) => useEffect(fun, []);

// Gneral Focus Hook
const UseFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

// const isBoolean = (param) => typeof(param) === "boolean"

export const SetInputOnFocus = () => {
  const [input1Val, setInput1Val] = useState("");
  const [input1Ref, setInput1Focus] = UseFocus();

  //   const [input2Val, setInput2Val] = useState("")
  // const [input2Ref, setInput2Focus] = UseFocus()

  const [completeBtnRef, setCompleteFocus] = UseFocus();

  useMountEffect(setInput1Focus);

  return (
    <div>
      <label>
        1 char long
        <input
          value={input1Val}
          onChange={(e) => {
            const val = e.target.value;
            setInput1Val(val);
            // if (val.length===1) setInput2Focus()
          }}
          ref={input1Ref}
        />
      </label>
      <br />
      {/* <label>2 char long 
        <input
          value={input2Val}
          
          onChange={(e)=>{
            const val = e.target.value
            setInput2Val(val)
            if (val.length===2) setCompleteFocus()
          }}
          ref={input2Ref}
        />
      </label> */}
      <br />
      {/* <button
        ref={completeBtnRef}
      >
        Complete
      </button> */}
      <button
        onClick={() => {
          setInput1Val("");
          // setInput2Val("")
          setInput1Focus();
        }}
      >
        start again
      </button>
    </div>
  );
};

export const MyComponent = () => {
  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [inputElement]);

  return (
    <label>
      Title
      <input
        type="text"
        defaultValue="your email"
        ref={(element) => {
          inputElement.current = element;
        }}
      />
    </label>
  );
};

export const MyFocus = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <form>
      <input type="text" placeholder="enter email" ref={inputRef} />
      <input type="text" placeholder="Enter your password" />
      <input type="submit" />
    </form>
  );
};
