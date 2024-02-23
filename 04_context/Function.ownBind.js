// First method

Function.prototype.customBind = function (context, ...args) {
  const self = this;

  return function () {
    self.apply(context, args);
  };
};

// Second method

// Function.prototype.customBind = function (context, ...args) {
//   const self = this;

//   return function () {
//     self.call(context, ...args);
//   };
// };

// Third method
// Function.prototype.customBind = function (context, ...args) {
//   const self = this;

//   return function () {
//     context.method = self;
//     const result = context.method(...args);
//     delete context.method;
//     return result;
//   };
// };
