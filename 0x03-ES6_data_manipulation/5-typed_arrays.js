export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const array = new Int8Array(buffer, 0, length);
  array[position] = value;
  return new DataView(buffer);
}
