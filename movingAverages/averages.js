// var sum = 0;
// var averages = [];
//
//
// var computeMovingAverages = (windowSize, numArray) => {
//   for(let i = 0; i < numArray.length; i++){
//     if (i <= windowSize - 1){
//     sum += numArray[i];
//     averages.push(sum/(i+1));
//   } else if(i >= numArray.length - windowSize){
//       sum += numArray[i];
//       averages.push(sum/windowSize);
//   }
//   }
// }

//
// computeMovingAverages(5, [0, 1, -2, 3, -4, 5, -6, 7]);
// console.log(averages);


// var sum = 0;
// var numbers = [];
//
// const averages = (number, array) => {
//   for (let i = 0; i < array.length; i++){
//     if(i <= array.length - number){
//       sum += array[i];
//       numbers.push(sum/(i + 1));
//     } else if(i > array.length - number && i ){
//       numbers.push((array[i] + array[i+1] + array[i-1])/number);
//     }
//   }
// }
//
// averages(3, [1, 2, 3, 4, 5]);
// console.log(numbers);



var sum = 0;
var movingAverages = [];

const getAverages = (windowSize, numArray) => {
  for(let i = 0; i < numArray.length; i++){
    if(i < windowSize - 1){
      sum += numArray[i];
      console.log(sum/(i + 1));
    } 
  }
}

// getAverages(3, [0, 1, 2, 4]);
getAverages(5, [0, 1, -2, 3, -4, 5, -6, 7, -8, 9]);
