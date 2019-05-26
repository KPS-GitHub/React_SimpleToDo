import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
    this.delete = this.delete.bind(this);
  }

  createTasks(item) {
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {item.text}
      </li>
    );
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    // access "entries" array, found in state in TodoList.js
    var todoEntries = this.props.entries;
    /* map through that array, running createTasks() 
    with each entry, creating the to-do list that will 
    be imported and included in the TodoList.js component */
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        {/* simple animation wrapper - elements/components (list items) \
        will be created/destroyed with a smooth animation */}
        <FlipMove duration={750} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoItems;
