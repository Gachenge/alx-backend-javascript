/* eslint-disable prefer-promise-reject-errors */

export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    reject({ Error: `${filename} cannot be processed` });
  });
}
