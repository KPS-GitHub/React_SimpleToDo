import React, { Component } from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    e.preventDefault(); // function is run upon form submission

    /* placeholder array - can be adjusted and 
    then the state array will be redefined with it */
    var itemArray = this.state.items;

    if (this._inputElement.value !== "") {
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now()
      });

      this.setState({
        items: itemArray
      });

      this._inputElement.value = "";
    }

  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function(item) {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              /* ref targets input field so we can
               pull the text that it contains */
              ref={el => (this._inputElement = el)} 
              placeholder="enter task"
            />
            <button type="submit">add</button>
          </form>
        </div>
        <hr />
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
