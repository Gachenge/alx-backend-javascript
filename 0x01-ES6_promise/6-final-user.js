import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo]).then((resp) => {
    const myarr = [];
    resp.forEach((element) => {
      if (element.status === 'fulfilled') {
        myarr.push({ status: element.status, values: element.value });
      } else {
        myarr.push({ status: element.status, value: `${element.reason}` });
      }
    });
    return myarr;
  });
}
