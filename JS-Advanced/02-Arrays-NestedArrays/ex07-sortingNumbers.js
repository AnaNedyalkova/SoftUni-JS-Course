function sortingNumbers (data) {

    let result = [];

    data.sort((a,b) => a-b);

    while(data.length) {
        result.push(data.shift());
        result.push(data.pop());
    }

    return result;
    

}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));


function sortNumbers(array) {
    let copyArray = JSON.parse(JSON.stringify(array));
    let sorted = copyArray.sort((a, b) => a - b);
   
    const result = [];
    while (sorted.length) {
      result.push(sorted.shift());
      if (sorted.length) {
        result.push(sorted.pop());
      }
    }
   
    //   return result;
    console.log(result);
  }
   
  sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 50]);