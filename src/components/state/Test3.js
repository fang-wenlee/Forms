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

  render() {
    return (
      <div>
        <h2>class componet as parent component</h2>
        <InsertItem addTask={this.addTask} />
        <br />
        <hr />
        <ItemList todos={this.state.list} deleteItem={this.deleteItem} />
        {/* {this.state.list.map((item) => {
          return <p key={item.id}> {item.task}</p>;
        })} */}
      </div>
    );
  }
}
