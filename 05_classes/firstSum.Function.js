// First method

function firstSum(arr, total) {
  let isFound = false;
  const result = [];

  arr.forEach((item, index, array) => {
    if (isFound) return;
    array.forEach((itemIterator, indexIterator) => {
      if (isFound) return;
      if (indexIterator === index) return;
      if (item + itemIterator === total) {
        isFound = true;
        result.push(item, itemIterator);
      }
    });
  });

  if (!isFound) return 'Incorrect array or sum';

  return result;
}

// Данная реализация функции представляет собой квадратичную сложность О(n^2) так как на
// каждый элемента массива она производит по n=== array.length оппераций сравнения
