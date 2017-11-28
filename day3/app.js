// const sunny = !true;
// const notSunny = !false;
//
// console.log(sunny);
// console.log(notSunny);
//
// const toggle = true;
// console.log('This is the toggle ' + toggle);
// toggle = !toggle;
// console.log('this is the toggle ' + toggle);

// console.log(Boolean(''));
// console.log(Boolean(null));
// Boolean(0);

// const num = 8;
//
// if(num === 10){
//   console.log('The number is 10');
// }

// const name = 'Mike';
//
// if(name === 'Mike'){
//   console.log('punkass bitch');
// }

// const age = 18;
//
// if(age >= 21){
//   console.log("Let's rage")
// } else {
//   console.log('shucks');
// }
//
//
// if(5 % 2 == 0){
//   console.log('number is even');
// } else {
//   console.log('number is odd');
// }

// for(let i = 0; i <= 10; i++){
//   if(i % 2 == 0){
//     console.log(i)
//   }
// }

// const cars = ['Chevy', 'Audi', 'BMW', 'Mercedes', 'Land Rover', 'Ferrari', 'Tesla', 'Lexus', 'Ford']
//
// for(let i = 0; i < cars.length; i++){
//   if(i % 2 == 1){
//     console.log(cars[i]);
//   }
// }

// const kitchenSink = ['Dirty spoon', 'sponge', 'plate with gunk', 'soap', 'water'];
//
// for(let i = 0; i < kitchenSink.length; i++){
//   if(i % 2 == 1){
//     console.log(kitchenSink[i]);
//   }
// }

// const drSeuss = ['Cat in the Hat', 'Sam I Am', 'Grinch', 'Thing One', 'Thing Two', 'Cindy Loo Who', 'JoJo McDodd'];
//
// for(let i = 0; i <= drSeuss.length; i++){
//   if(i % 2 == 1){
//     console.log(drSeuss[i]);
//   } if (i % 2 == 1){
//     console.log(i)
//   }
// }

// const foodSelections = ['pizza', 'apple', 'seaweed', 'artichoke', 'tea', 'ice cream'];
//
// for(let i = 0; i < foodSelections.length; i++){
//   if((i % 2 == 0) || (i % 5 == 0)) {
//     console.log(foodSelections[i]);
//   }

// const looneyTunes = ['Bugs Bunny', 'Daffy Duck', 'Tweety', 'Sylvester', 'Elmer Fudd', 'Porky Pig', 'Taz'];
//
// for(let i = 0; i < looneyTunes.length; i++){
//   if((i % 2 == 0) || (i % 3 == 0)) {
//     console.log(looneyTunes[i]);
//   }
// }
// for(let i = 0; i < looneyTunes.length; i++){
//   if(i % 2 == 1) {
//     console.log(looneyTunes[i]);
//   }
// }

// const fruit = ['apple', 'oranges', 'banana', 'grapes', 'cherries', 'blueberries', 'kiwi'];
//
// console.log(fruit.indexOf('cherries'));
//
// console.log(fruit.reverse())
//
// fruit[7] = 'cheese';
//
// console.log(fruit)
//
// fruit.push('Sausage');
//
// console.log(fruit);

// const movies = ['Caddyshack', 'Airplane'];
//
// movies.push('The Revenant');
//
// console.log(movies);
//
// const movies1 = movies.sort('The Revenant', 'Airplane', 'Caddyshack');
//
// console.log(movies1);
//
// const reverse = movies1.reverse();
//
// console.log(reverse);
//
// movies1.push('Zodiac');
//
// console.log(movies1);
//
// movies1.pop();
// console.log(movies1);

// const pairs = [['Snoopy', 'Linus'], ['Peppermint Patty', 'Woodstock']];
//
// console.log(pairs[1][0]);

const whereIsWaldo = [['Timmy', 'Frank'], 'Eggbert', ['Lucinda', 'Jacc', 'Neff', 'Snoop',], ['Petunia', 'Baked Goods', 'Waldo']];

// console.log(whereIsWaldo[2][1]);

whereIsWaldo[3][1]='No One';

whereIsWaldo.splice(1,1)

console.log(whereIsWaldo);
