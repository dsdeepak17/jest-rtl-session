export function numOfSubbarrays(arr) {
  let count = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   const element = arr[i];
  //   if (Array.isArray(element)) count++;
  // }
  arr.forEach(element => {
    if (Array.isArray(element)) count++
  })
  return count;
}