const pattern = (num) => {
  const arrayOfResults = [];
  for (let i = 1; i <= num; i++) {
    let stringNumbers = '';
    for (let j = 1; j <= i; j++) {
      stringNumbers += j;
    }

    const result = ' '.repeat(num - i) + stringNumbers + stringNumbers.split('').reverse().join('').slice(1);
    arrayOfResults.push(result);
  }

  return [...arrayOfResults, ...arrayOfResults.reverse().slice(1)].join('\n');
};
