
class Implementation{

  initialSetup(items) {
    console.log(items);
    return 1;
  }

  nextIteration(tableData) {

    let row = tableData[0];

    console.log(row);
    row[1] = row[1] + 1;
    return tableData
  }

}

export default Implementation
