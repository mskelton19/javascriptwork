// for(let i = 1; i <= 20; i++){
//   console.log(i);
// }

// for(let i = 0; i <= 200; i+=2){
//   console.log(i);
// }

// const randomMessage = ['why are you taking pictures', 'it was the catnip', 'why does the red dot move'];
//
// for(let i = 0; i <= 20; i++){
//   if(i % 2 == 0){
//     console.log(randomMessage[Math.floor(Math.random() * randomMessage.length - 1) + 1])
//   } else {
//     console.log('Love me, pet me')
//   }
// }

// for(let i = 1; i <= 100; i++){
//   if(i % 3 == 0 && i % 5 == 0){
//     console.log('FizzBuzz')
//   } else if(i % 5 == 0){
//     console.log('Buzz')
//   } else if(i % 3 == 0){
//     console.log('Fizz')
//   } else {
//     console.log(i)
//   }
// }
//
// const thom = ['Thom', 1000, 'Christchurch']
// const karolin = ['Karolin', 16, 'New York']
// const kristyn = ['Kristyn', 5, 'Pittsburgh']
// const matt = ['Matt H', 186, 'Philadelphia']
//
// thom[0] ='Gameboy';
// karolin[1]= 5+1;
// matt[2] = 'Gotham City'
// kristyn[2] = 'Brooklyn'
//
// console.log(thom);
// console.log(kristyn);
// console.log(karolin);
// console.log(matt);

// const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michelangelo'];
//
// for(let i = 0; i < turtles.length; i++){
//   console.log(turtles[i].toUpperCase());
// }

const kristynsCloset = [
  'left shoe',
  'cowboy boots',
  'right sock',
  'GA hoodie',
  'green pants',
  'yellow knit hat',
  'marshmallow peeps'
]

const thomsCloset = [[
  'grey button-up',
  'dark grey button-up',
  'light blue button-up',
  'blue button-up'
],[
  'gray jeans',
  'jeans',
  'PJs'
],[
  'wool mittens',
  'wool scarf',
  'raybans'
  ]
];

const kristynsShoe = kristynsCloset[0];
console.log(kristynsShoe);

kristynsCloset.shift();
console.log(kristynsCloset);

thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset);
