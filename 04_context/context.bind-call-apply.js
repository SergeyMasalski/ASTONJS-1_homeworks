const obj = { item: 'some value' };

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

// First method (bind):
logger.bind(obj)();

// Second method(call):
// logger.call(obj);

// Third method(apply):
// logger.apply(obj);
