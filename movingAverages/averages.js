var sum = 0;
var movingAverages = [];

const getAverages = (windowSize, numArray) => {
  for(let i = 0; i < numArray.length; i++){
    if(i < windowSize - 1){
      sum += numArray[i];
      movingAverages.push(sum/(i + 1));
    } else if(i + 1 === windowSize){
      sum += numArray[i];
      movingAverages.push(sum/windowSize);
    } else if (i + 1 > windowSize && windowSize === 3){
      movingAverages.push((numArray[i] + numArray[i - 1] + numArray[i-2])/windowSize);
    } else {
      movingAverages.push((numArray[i] + numArray[i-1] + numArray[i-2] + numArray[i-3] + numArray[i-4])/windowSize);
    }
  }
  return movingAverages;
}
//
//
// getAverages(3, [0, 1, 2, 3]);
getAverages(5, [0, 1, -2, 3, -4, 5, -6, 7, -8, 9]);
console.log(movingAverages);

// var numbers = [];
// var sum = 0;
//
// const moveWindow = (num, array) => {
//   for(let i = 0; i < array.length; i++){
//     if(i >= array.length - num){
//       sum += array[i];
//       numbers.push(sum);
//     }
//   }
// }
//
// moveWindow(3, [0, 1, 2, 3, 4]);
// console.log(numbers);
