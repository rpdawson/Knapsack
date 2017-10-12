
class Implementation{

  //let W;
  //var wt;
  //var val;
  //var n;

  initialSetup(items) {
    console.log(items);
    this.items = items;
    this.W = 10;
    this.n = 5;
    this.i = 0;
    return [
        {'0':0, '1':0, '2':0, '3':0, '4':0, '5':0, '6':0, '7':0, '8':0, '9':0, '10':0},
        {'0':0, '1':0, '2':0, '3':0, '4':0, '5':0, '6':0, '7':0, '8':0, '9':0, '10':0},
        {'0':0, '1':0, '2':0, '3':0, '4':0, '5':0, '6':0, '7':0, '8':0, '9':0, '10':0},
        {'0':0, '1':0, '2':0, '3':0, '4':0, '5':0, '6':0, '7':0, '8':0, '9':0, '10':0},
        {'0':0, '1':0, '2':0, '3':0, '4':0, '5':0, '6':0, '7':0, '8':0, '9':0, '10':0}
      ];
  }



  nextIteration(arr)
  {
    //var K = new Array(n+1); // n items
    //for (var i=0; i <= n; i++)
    //{
      //K[i] = new Array(W+1);
      var W = 10;
      var wt= this.items;
      var val= this.items;
      var n = 5;

      var i= this.i;

      for (var w=0; w<=W; w++)
      {
        // Base case
        if (i === 0 || w === 0)
          {
            arr[i][w] = 0;
          }
        else if (wt[i-1] <= w)
          {
            arr[i][w] = max(parseInt(val[i-1]) + parseInt(arr[i-1][w-wt[i-1]]), arr[i-1][w]);
          }
        else
          {
            arr[i][w] = arr[i-1][w];
          }
      }

      this.i = this.i + 1;
    return arr;
  }




}

function max(a, b)
{
  return ((a > b) ? a : b);
}

export default Implementation
