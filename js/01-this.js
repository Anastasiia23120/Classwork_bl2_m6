// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log('this --->', this);
//   },

//   showName() {
//     console.log(this.name);
//   },
// };

// user.showThis();
// user.showName();
//*---------------------------------------------------------
//? Function expression
// const showThis = function () {
//   console.log('This --->', this);
// };

// showThis();
//*---------------------------------------------------------
//? Function declaration
// function showThis() {
//   console.log('This --->', this);
// }

// showThis();
// *---------------------------------------------------------
// const showThis = function () {
//   console.log('This --->', this);
// };

// showThis();

// const showName = function () {
//   console.log(`Hello ${this.name}`);
// };

// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis: showThis,
//   showUserName: showName,
// };

// user.showUserThis();
// user.showUserName();
// *---------------------------------------------------------
// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis: function () {
//     console.log('This --->', this);
//   },

//   showUserName: function () {
//     console.log(this.name);
//   },
// };

// const showThis = user.showUserThis;

// user.showUserThis();

// showThis();
// *---------------------------------------------------------
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis: function () {
//     console.log('This --->', this);
//   },

//   showName: function () {
//     console.log(this.name);
//   },
// };

// const someFunction = callback => {
//   callback();
// };

// someFunction(user.showThis);
// *---------------------------------------------------------
// const user = {
//   name: 'Luis',
//   age: 30,

//   showName: () => {
//     console.log(this.name);
//   },
// };

// user.showName();

// console.log(this);
