// const foo = function () {
//   console.log(this);
// };

// foo();
//*---------------------------------------------------------
// const book = {
//   title: 'React for beginners',

//   showThis() {
//     console.log('showThis -> this', this);
//   },

//   showTitle() {
//     console.log('showTitle -> this.title', this.title);
//   },
// };

// const outerShowThis = book.showThis;
// outerShowThis();

// const outerShowTitle = book.showTitle;
// outerShowTitle();
//*---------------------------------------------------------
// const makeUser = function () {

//   return {
//     name: 'Джон',
//     ref: this,
//   };
// };

// const user = makeUser();
// console.log(user.ref.name);
//*---------------------------------------------------------
// const makeUser = function () {
//   return {
//     name: 'Джон',

//     ref() {
//       return this;
//     },
//   };
// };

// const user = makeUser();
// console.log(user.ref().name);
//*---------------------------------------------------------
// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find(el => el.name.toLowerCase() === stoneName.toLowerCase());

//     if (!stone) {
//       //(!)stone = stone === undefined;
//       return `${stoneName} не знайдено!`;
//     }

//     return stone.price * stone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// console.log(chopShop.calcTotalPrice('Aconit')); // Aconit не знайдено!
