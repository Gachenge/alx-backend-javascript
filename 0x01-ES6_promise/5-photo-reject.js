/* eslint-disable prefer-promise-reject-errors */

export default function uploadPhoto(filename) {
  return Promise.reject(Error(`${filename} cannot be processed`));
}
