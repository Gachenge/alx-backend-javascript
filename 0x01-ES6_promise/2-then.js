export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then(response => {
        resolve({ 'status': '200', 'body': 'Success' });
        console.log("Got a response from the API");
      })
      .catch(error => {
        reject({ 'Error': '' });
      });
  });
}
