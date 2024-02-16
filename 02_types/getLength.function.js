function getLength(item) {
  return typeof item === 'string' || Array.isArray(item) ? item.length : 0;
}
