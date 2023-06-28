/* eslint-disable no-unused-vars */

export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    resolve({
      firstName,
      lastName,
    });
  });
}
