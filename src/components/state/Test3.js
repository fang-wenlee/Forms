import React from "react";
import data from "./data.json";
import InsertItem from "./test3/InsertItem";
import ItemList from "./test3/ItemList";

export default class Test3 extends React.Component {
  //passing json data to state
  constructor(props) {
    super(props);
    // ***//
    this.state = { list: data };
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
    this.setState({ list: markComplete });
  };
  removeAllCompleted = () => {
    const list = this.state.list;
    let unFinishTasks = list.filter((task) => task.complete === false);
    this.setState({ list: unFinishTasks });
  };

  render() {
    return (
      <div>
        <h2>class componet as parent component</h2>
        <InsertItem
          addTask={this.addTask}
          removeAllCompleted={this.removeAllCompleted}
        />
        <br />
        <hr />
        <ItemList
          todos={this.state.list}
          deleteItem={this.deleteItem}
          markComplete={this.markComplete}
        />
        {/* {this.state.list.map((item) => {
          return <p key={item.id}> {item.task}</p>;
        })} */}
      </div>
    );
  }
}
