//  //naive approach

// function firstRecurringCharacter(input) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] === input[j]) {
//         return input[i];
//       }
//     }
//   }
//   return undefined;
// }

// let result = firstRecurringCharacter([1, 5, 5, 8, 3, 4, 6]);
// console.log(result);

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
}

let result = firstRecurringCharacter2([1, 5, 0, 11, 8, 3, 4, 8, 6]);
console.log(result);
