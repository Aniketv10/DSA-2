// Iterative implementaion ...

function iterativeBinarySearch(data, arr) {
    let start = 0;
    let end = arr.length - 1;
  while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === data) {
        return true;
      } else if (arr[mid] < data) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return false;
  }

  console.log(iterativeBinarySearch[10,5,4,30,52,0],5)