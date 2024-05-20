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

// todo Task 3

function encode(str) {
  const obgEndcode = {
    A: "G",
    a: "g",
    E: "D",
    e: "d",
    Y: "R",
    y: "r",
    O: "P",
    o: "p",
    U: "L",
    u: "l",
    I: "K",
    i: "k",
  };

  const strInArr = str.split("");
  //   console.log(strInArr);

  const newArr = strInArr.map((element) => obgEndcode[element] || element);
  //   console.log(newArr);

  return newArr.join("");
}

console.log(decode("Ala has a cat"));

function decode(str) {
  const obgEndcode = {
    G: "A",
    g: "a",
    D: "E",
    d: "e",
    R: "Y",
    r: "y",
    P: "O",
    p: "o",
    L: "U",
    l: "u",
    K: "I",
    k: "i",
  };

  const strInArr = str.split("");
  //   console.log(strInArr);

  const newArr = strInArr.map((element) => obgEndcode[element] || element);
  //   console.log(newArr);

  return newArr.join("");
}

console.log(encode("Gug hgs g cgt"));
