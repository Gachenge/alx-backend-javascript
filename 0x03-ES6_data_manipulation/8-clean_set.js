export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }

  return [...set].filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');
}
