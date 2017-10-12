import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'


class Table extends Component {

  handleNextIteration(e){
    this.props.onNextIteration();
  }

  render() {
    return(
      <div>
        <ReactTable
          key="ReactTable"
          data={this.props.tableData}
          columns={this.props.columnData}
          showPagination={false}
          defaultPageSize={5}
        /><br />
        <button onClick={this.handleNextIteration.bind(this)}> Next iteration </button>
      </div>
    );
  }
}

export default Table;
