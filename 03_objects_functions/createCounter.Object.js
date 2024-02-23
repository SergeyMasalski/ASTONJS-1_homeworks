// First method:

const counter = {
  count: 1,
};

// Second method:

// const counter = new Object({ count: 1 });

// Third method

// const counter = Object.create(Object.prototype, {
//   count: {
//     value: 1,
//     enumerable: true,
//     configurable: true,
//     writable: true,
//   },
// });

// Fourth method

// const counter = Object.assign({}, { count: 1 });
