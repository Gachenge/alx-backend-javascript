export default function updateUniqueItems(items) {
  if (items instanceof Map) {
    for (const [key, value] of items) {
      if (value === 1) {
        items.set(key, 100);
      }
    }
    return items;
  }
  throw new Error('Cannot process');
}
