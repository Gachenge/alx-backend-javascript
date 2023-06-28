/* eslint-disable no-unused-vars */

import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const user = createUser();
  const photo = uploadPhoto();

  return Promise.all([user, photo]).then((resp) => {
    console.log(`${resp[1].body} ${resp[0].firstName} ${resp[0].lastName}`);
  })
    .catch((error) => {
      console.log('Signup system offline');
    });
}
