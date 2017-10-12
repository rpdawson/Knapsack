import React, { Component } from 'react';
import Table from './Components/Table'
import AddItem from './Components/AddItem'
import ItemList from './Components/ItemList';
import Implementation from './Knapsack/Implementation'
import './App.css';

class App extends Component {
  constructor(){
    super();
    let Knapsack = new Implementation();
    this.state = {
        tableData: [     ],
        columnData: [
        {Header: 'Capacity 1', accessor: '1'},
        {Header: 'Capacity 2', accessor: '2'},
        {Header: 'Capacity 3', accessor: '3'},
        {Header: 'Capacity 4', accessor: '4'},
        {Header: 'Capacity 5', accessor: '5'},
        {Header: 'Capacity 6', accessor: '6'},
        {Header: 'Capacity 7', accessor: '7'},
        {Header: 'Capacity 8', accessor: '8'},
        {Header: 'Capacity 9', accessor: '9'},
        {Header: 'Capacity 10', accessor: '10'}
      ],
        currentItems: [ ],
        Knapsack: Knapsack,
    }
  }

  handleSubmit(e){
    var t = Object.create(this.state.tableData);
    this.setState({tableData : this.state.Knapsack.initialSetup(this.state.currentItems)});

  }

  handleAddItem(item){
    let currentItems = this.state.currentItems;
    currentItems.push(item);
    this.setState({currentItems : currentItems});
  }

  handleNextIteration(){
    var t = Object.create(this.state.tableData);
    this.setState({tableData : this.state.Knapsack.nextIteration(t)}, function(){
      console.log("Updated table value. Nice going!");
    });


  }

  render() {
    return (
      <div className="App">
        <h1>Knapsack innit</h1>
        <br />
        <label>Current Items:</label><br />
        <ItemList itemList={this.state.currentItems}/>
        <br />
        <AddItem currentItems={this.state.currentItems}
                onAddItem={this.handleAddItem.bind(this)}
                onSubmitItems={this.handleSubmit.bind(this)}/>
        <br />
        <Table tableData={this.state.tableData}
              columnData={this.state.columnData}
              onNextIteration={this.handleNextIteration.bind(this)}/>
      </div>
    );
  }
}

export default App;
