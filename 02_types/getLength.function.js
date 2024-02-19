function getLength(item) {
  switch (true) {
    case !!item.length:
      console.log(item.length);
      break;
    case !!item.size:
      console.log(item.size);
      break;
    case typeof item === 'object':
      console.log(Object.keys(item).length);
      break;
    default:
      console.log(0);
  }
}
