// First method

// function firstSum(arr, total) {
//   let isFound = false;
//   const result = [];

//   arr.forEach((item, index, array) => {
//     if (isFound) return;
//     array.forEach((itemIterator, indexIterator) => {
//       if (isFound) return;
//       if (indexIterator === index) return;
//       if (item + itemIterator === total) {
//         isFound = true;
//         result.push(item, itemIterator);
//       }
//     });
//   });

//   if (!isFound) return 'Incorrect array or sum';

//   return result;
// }

// Данная реализация функции представляет собой квадратичную сложность О(n^2) так как на
// каждый элемента массива она производит по n=== array.length оппераций сравнения

// Second method

function firstSum(arr, total) {
  const addItemCollection = new Map();

  for (let item of arr) {
    const addItem = total - item;

    if (addItemCollection.has(addItem)) return [addItem, item];

    addItemCollection.set(item, item);
  }

  return 'Incorrect array or sum';
}

// Map реализован на механизме схожем с хеш-таблицами, соответственно доступ к значению будет иметь
// сложность O(1) и мы зависим от длины массива переданных данных, то есть от n. Соответственно
// сложность алгоритма О(n)
