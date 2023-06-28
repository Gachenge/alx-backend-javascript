/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-vars */

export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => Error())
    .finally(() => { console.log("Got a response from the API") })
}
