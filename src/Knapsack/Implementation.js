
class Implementation{

  initialSetup(items) {
    console.log(items);
    return 1;
  }



nextIteration(arr)
{
  //var K = new Array(n+1); // n items
  //for (var i=0; i <= n; i++)
  //{
    //K[i] = new Array(W+1);
    var W = 3;
    var wt=[];
    var val=[];
    var n = 2;

    var i=0;

    for (var w=0; w<=W; w++)
    {
      // Base case
      if (i == 0 || w == 0)
        arr[i][w] = 0;

      else if (wt[i-1] <= w) 
        arr[i][w] = max(val[i-1] + arr[i-1][w-wt[i-1]], arr[i-1][w]);
      
      else
        arr[i][w] = arr[i-1][w];
    }
    //**HERE is where we can return the entire column before moving to the next row
    
  //}
  // This returns the solution in value
  return arr;

}




}

function max(a, b)
{
  return ((a > b) ? a : b);
}

export default Implementation
