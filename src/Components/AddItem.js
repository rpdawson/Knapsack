import React, { Component } from 'react';

class AddItem extends Component {


  handleSubmit(e){
    this.props.onSubmitItems();
    e.preventDefault();
  }

  handleAddItem(e){
    this.props.onAddItem(this.refs.itemToAdd.value);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.handleAddItem.bind(this)}>
          <div>
            <label>Add new item</label><br />
            <input type="text" ref="itemToAdd" />
          </div>
          <br />
          <input type="submit" value="Add Item" />
          <button onClick={this.handleSubmit.bind(this)}> Submit </button>
          <br />
        </form>
      </div>
    );
  }
}

export default AddItem;
