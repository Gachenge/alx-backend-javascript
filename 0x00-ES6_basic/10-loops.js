export default function appendToEachArrayValue(array, appendString) {
    let arr = []
  for (let idx of array) {
    arr.push(appendString + idx)
  }
  return arr;
}
