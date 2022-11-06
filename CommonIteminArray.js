arr1 = ["a", "b", "c", "d"];
arr2 = ["e", "f", "h"];

// function CommonItemInArray(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//     return false;
//   }
// }

// function CommonItemInArray(arr1, arr2) {
//   let arrayObject = {};
//   for (let i = 0; i < arr1.length; i++) {
//     if (!arrayObject[i]) {
//       const item = arr1[i];
//       arrayObject[item] = true;
//     }
//   }
//   for (let j = 0; j < arr2.length; j++) {
//     if (arrayObject[arr2[j]]) {
//       return true;
//     }
//   }
//   return false;
// }

function CommonItemInArray(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}
let result = CommonItemInArray(arr1, arr2);
console.log(result);
