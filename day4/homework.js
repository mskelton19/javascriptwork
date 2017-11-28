// const palindrome = (word) => {
//   word.split();
//     if(word[0] == word[word.length - 1] && word[1] == word[word.length - 2] && word[2] == word[word.length - 3] && word[3] == word[word.length - 4]){
//       console.log('palindrome');
//     } else {
//     console.log('that aint a palindrome');
//   }
// }
//
// palindrome('deified');
//
//
// const palindrome2 = (word) => {
//   const reverseWord = (word.split('').reverse().join(''));
//   if (word === reverseWord) return true;
//   return false;
// }
//
// console.log(palindrome2('radar'));

// const sumDigits = (num) => {
//   const splitNum = (num.split(''));
//   console.log(+splitNum[0] + +splitNum[1]);
//
// }
//
// sumDigits('73');

// const pythagTheorem = (side1, side2) => {
//   const square = Math.pow(side1,2) + Math.pow(side2,2);
//   console.log(square);
// }
//
// pythagTheorem(3, 4);


// const sumArray = (array) => {
//   const numbers = (array.split(''));
//   console.log(numbers)
// }
//
// sumArray([1,2,3,4,5]);



// morning lab

// const printGreeting = (name) => {
//   const reverseWord = (name.split('').reverse().join('').toLowerCase());
//   console.log(reverseWord);
// }
//
// printGreeting('greetings from Earth');

// const reverseWords = (sentence) => {
//   const array = (sentence.split(''));
//   array.reverse();
//   sentence = array.join(" ");
//   console.log(array);
// }
//
// reverseWords('well hello there');

// const reverseWords = (string) => {
//   const splitString = string.split('');
//   console.log(splitString);
//   const reverseSplit = splitString.reverse();
//   console.log(reverseSplit);
//   const joinSplit = reverseSplit.join('');
//   console.log(joinSplit);
// }
//
// reverseWords('america is murica');

const calculate = (num1, num2, string) => {
  if (string == 'add') {
    console.log(num1 + num2);
  } else if (string == 'sub') {
    console.log(num1 - num2);
  } else if (string == 'mult') {
    console.log(num1 * num2);
  } else if (string == 'div') {
    console.log(num1 / num2);
  } else if (string == 'exp') {
    console.log(Math.pow(num1,num2));
  }
}

calculate(2, 3, 'exp');
