// Data
let arr = [1, 3, 6, 23, 43, 13, 3, 64, 63,77, 23, 2356, 578, 883, 64, 2,8,23,45,35,337, 87, 868, 888, 0, 78, 56];

// Algorithm implementation
function search(arr, elem) {
  arr.sort((a, b)=>a-b);

  let low = 0;
  let high = arr.length - 1;
  let mid = arr.length%2 === 0 ? arr.length/2 : (arr.length + 1)/2;

  while (low <= high) {
    let current = arr[mid];
    if (current === elem) {
      console.log('Found at position ' + mid);
      return 0;
    } else if (current < elem) {
      low = mid;
    } else {
      high = mid;
    }
    mid = (low + high)%2 === 0 ? (low + high)/2 : (low + high + 1)/2;
  }

  console.log('Not found!');

  return 1;
}

// Run
search(arr, 77);


