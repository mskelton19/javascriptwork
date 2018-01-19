sum = 0;
averages = [];

const computeMovingAverages = (windowSize, dataSet) => {
  for(let i = 0; i < dataSet.length; i++){
    if(i < windowSize) {
      sum += dataSet[i];
      simpleAverage = (sum/(i+1));
      averages.push(simpleAverage);
    } else if(i >= windowSize){
      sum += dataSet[i] - dataSet[i - windowSize];
      movingAverage = (sum/windowSize);
      averages.push(movingAverage);
    }
  }
  console.log(averages);
}

computeMovingAverages(5, [0, 1, -2, 3, -4, 5, -6, 7, -8, 9]);
