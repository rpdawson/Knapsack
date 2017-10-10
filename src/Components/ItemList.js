import React, { Component } from 'react';

class ItemList extends Component {

  render() {
    let itemList;
    if (this.props.itemList){
      itemList = this.props.itemList.map(itemList =>
         itemList  )
    }
    return (
      <div>
          {itemList}
      </div>
    );
  }
}

export default ItemList;
