import React from "react";
import data from "./data.json";
import InsertItem from "./test3/InsertItem";
import ItemList from "./test3/ItemList";

export default class Test3 extends React.Component {
  //passing json data to state
  constructor(props) {
    super(props);
    // ***//
    this.state = {
      flag: true,
      list: data
    };

    //*** */
  }

  getId = () => {
    return Math.floor(Math.random() * 100 + 1);
  };
  addTask = (userInput) => {
    let unique = this.getId();
    console.log(unique);
    let newItem = { id: unique, task: userInput, complete: false };
    //console.log(this.state.list.length);
    // console.log(newItem);
    this.setState((prevState) => ({
      list: [...prevState.list, newItem]
    }));
  };
  deleteItem = (id) => {
    console.log("Which one delete:", id);
    const list = this.state.list;
    let afterDelList = list.filter((task) => task.id !== Number(id));

    this.setState({ list: afterDelList });
  };

  markComplete = (id) => {
    const list = this.state.list;
    let markComplete = list.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    this.setState({ ...list, list: markComplete });
  };
  removeAllCompleted = () => {
    this.setState({ flag: !this.state.flag });
    console.log(this.state.flag);

    if (this.state.flag === false) {
      const unfinsihTodos = this.state.list.filter(
        (todo) => todo.complete === false
      );
      console.log("insdie filter: ", unfinsihTodos);
      this.setState({ ...this.state.list, list: unfinsihTodos });
      // const todos = this.state.list;
    } else if (this.state.flag === true) {
      this.setState({ ...this.state.list, list: data });
      console.log("default: ", this.state.list);
    }
  };

  render() {
    const todos = this.state.list;

    return (
      <div>
        <h2>class componet as parent component</h2>
        <InsertItem
          addTask={this.addTask}
          removeAllCompleted={this.removeAllCompleted}
          flag={this.state.flag}
        />
        <br />
        <hr />

        <ItemList
          // flag={this.state.flag}
          todos={todos}
          deleteItem={this.deleteItem}
          markComplete={this.markComplete}
        />
      </div>
    );
  }
}
