const counter = {
  count: 1,
};

// First method:

const copyCounter = { ...counter };

// Second method:

// const copyCounter = JSON.parse(JSON.stringify(counter));

// Third method:

// const getCopyObject = function (obj) {
//   const copyobject = {};

//   for (const key in obj) {
//     copyobject[key] = obj[key];
//   }

//   return copyobject;
// };

// const copyCounter = getCopyObject(obj);

// Fourth method

// const copyCounter = Object.assign({}, counter);
