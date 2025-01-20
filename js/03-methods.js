// const fn = function () {};
// fn.test = 10;
// console.dir(fn);
// caches;
// console.log(fn.test);
//*---------------------------------------------------------
// const showFullName = function (message, num) {
//   console.log(`${message} ${this.firstName} ${this.lastName}`);

//   console.log(num);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,

//   //   showUserFullName: showFullName,
// };

// showFullName.call(user, 'Hello', 100);
// showFullName.apply(user, ['Hello', 1080]);

// user.showUserFullName();

// const anotherUser = {
//   firstName: 'Sophie',
//   lastName: 'Castro',
//   age: 32,

//   //   showAnotherUserFullName: showFullName,
// };

// showFullName.call(anotherUser, 'Welcome', 150);
// // anotherUser.showAnotherUserFullName();
//*---------------------------------------------------------
// const changeColor = function (color) {
//   console.log('changeColor -> this', this);

//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// console.log(hat);

// changeColor.call(hat, 'yellow');

// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// console.log(sweater);

// changeColor.apply(sweater, ['blue']);

// console.log(sweater);
//*---------------------------------------------------------
// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// console.log(hat);

// const changeHatColor = changeColor.bind(hat);

// changeHatColor('yellow');

// console.log(hat);
//*---------------------------------------------------------
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log('This --->', this);
//   },

//   showName() {
//     console.log(this.name);
//   },
// };

// const someFunction = callback => {
//   callback();
// };

// someFunction(user.showThis.bind(user));
//*---------------------------------------------------------
// // const sum = function () {
// //   const args = Array.from(arguments);
// //   console.log(args);
// // };

// // const sum = function () {
// //   const args = [...arguments];
// //   console.log(args);
// // };

// // const sum = function (...args) {
// //   console.log(args);
// // };

// const sum = function () {
//   return [].reduce.call(arguments, (acc, el) => acc + el, 0);
// };

// console.log(sum(1, 2, 3, 4));
// console.log(sum(10, 20));
