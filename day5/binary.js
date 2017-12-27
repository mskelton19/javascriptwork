var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binarySearch(arr, i) {
  var mid = Math.floor(primes.length/2);

  if (primes[mid] === i) {
    console.log('Match', primes[mid], i);
    return primes[mid];
  } else if (primes[mid] > i && primes.length > 1) {
    console.log('The target is lower than', primes[mid]);
    binarySearch(primes.splice(mid, Number.MAX_VALUE), i);
  } else if (primes[mid] < i && primes.length > 1) {
    console.log('The target is higher than', primes[mid]);
    binarySearch(primes.splice(0, mid), i);
  } else {
    console.log('not here', i);
  }
}


binarySearch(primes, 15);
