export default function updateUniqueItems(items) {
  if (Object.getPrototypeOf(items) !== Map.prototype) {
    return new Error('Cannot process');
  }
  for (const [key, value] of items) {
    if (value === 1) {
      items.set(key, 100);
    }
  }
  return items;
}
