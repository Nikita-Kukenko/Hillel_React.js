// --------- 1st Task ------------
// Что будет выведено в консоль?

//{ c: 'here', s: 'no'}

// --------- 2nd Task ------------

// function getFormat(someString) {
//   let arr = someString.split('.');
//   return console.log(arr[arr.length - 1]);
// }

// getFormat('not.so.easy/as/youd/expect.');

// --------- 3rd Task -------------

// function getUnicArr(mass) {
//   let newArr = [];

//   for (let item of mass) {
//     if (!newArr.includes(item)) {
//       newArr.push(item);
//     }
//   }

//   return newArr;
// }

// console.log(getUnicArr([1, 1, 2, 3, 4, 4]));

// --------- 4th Task --------------

// const array = [{ a: 1 }, { b: 8 }, { c: 3 }, { text: 'some text'}];

// function concatObj(arr) {
//   let newObj = {};
//   newObj.__proto__ = Object;

//   for(let i = 0; i < arr.length; i += 1){
//     let item = arr[i];
//     newObj.assign(newObj, item);
//   }

//   return newObj;
// }

// console.log(concatObj(array));

// --------- 5th Task --------------

// let array = [1, 2, 3, 1, 3];

// let unicSet = new Set(array);

// let newArray = [...unicSet];

// console.log(newArray);