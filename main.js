// todo Task 1 deepEqual(a,b) Перевіряємо два обєкта на ідентичність

// function deepEqual(a, b) {
//   if (a === b) {
//     return true;
//   }

// if (
//   typeof a !== "object" ||
//   a === null ||
//   typeof b !== "object" ||
//   b === null
// ) {
//   return false;
// }
//   const keysA = Object.keys(a);
//   const keysB = Object.keys(b);
//   if (keysA.length !== keysB.length) {
//     return false;
//   }
//   for (const key of keysA) {
//     if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(
//   deepEqual(
//     { name: "Alice", age: 25, address: { city: "Wonderland" } },
//     { name: "Alice", age: 25, address: { city: "Wonderland" } }
//   )
// );

// todo Task 2 Як очистити такий масив

// let arrayList = ["п", "р", "и", "в", "і", "т"];

// 1 варіант
// console.log(arrayList.splice(0, arrayList.length));

// 2 варіант
// arrayList = [];

// 3 варіант
// arrayList.length = 0;

// console.log(arrayList);
