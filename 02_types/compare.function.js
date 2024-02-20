function compare(nodeOne, nodeTwo) {
  let isSame = true;

  (function recursion(objOne, objTwo) {
    if (!isSame) return;

    if (Object.keys(objOne).length !== Object.keys(objTwo).length) {
      isSame = false;
      return;
    }

    for (const key in objOne) {
      if (objOne.hasOwnProperty(key)) {
        if (!objTwo[key]) {
          isSame = false;
          return;
        }

        if (typeof objOne[key] !== 'object' && !Array.isArray(objOne[key]) && objOne[key] !== objTwo[key]) {
          isSame = false;
          return;
        }

        if (Array.isArray(objOne[key])) {
          if (!Array.isArray(objTwo[key]) || objOne[key].length !== objTwo[key].length) {
            isSame = false;
            return;
          }

          objOne[key].forEach((item, index) => {
            if (!isSame) return;
            if (typeof item === 'object') recursion(item, objTwo[index]);
            if (item !== objTwo[key][index]) isSame = false;
          });
        }

        if (typeof objOne[key] === 'object') {
          if (typeof objTwo[key] !== 'object') {
            isSame = false;
            return;
          }

          recursion(objOne[key], objTwo[key]);
        }
      }
    }
  })(nodeOne, nodeTwo);

  return isSame;
}
