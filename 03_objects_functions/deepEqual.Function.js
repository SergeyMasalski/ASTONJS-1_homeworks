function deepEqual(nodeOne, nodeTwo) {
  if (nodeOne === nodeTwo) return true;

  switch (true) {
    case typeof nodeOne === 'undefined' && typeof nodeTwo !== 'undefined':
    case typeof nodeOne === null && nodeTwo !== null:
    case typeof nodeTwo === null && nodeOne !== null:
    case typeof nodeTwo === 'undefined' && nodeTwo !== 'undefined':
      return false;

    default:
      break;
  }

  const keysNodeOne = Object.keys(nodeOne);
  const keysNodeTwo = Object.keys(nodeTwo);

  if (keysNodeOne.length !== keysNodeTwo.length || typeof nodeOne !== typeof nodeTwo) {
    return false;
  }

  for (const key of keysNodeOne) {
    if (nodeOne[key] !== nodeTwo[key] && typeof nodeOne[key] !== 'object' && typeof nodeTwo[key] !== 'object') return false;

    if (!compare(nodeOne[key], nodeTwo[key])) {
      return false;
    }
  }

  return true;
}
