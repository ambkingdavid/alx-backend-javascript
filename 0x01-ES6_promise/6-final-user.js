import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  const promises = [user, photo];
  Promise.allSettled(promises)
    .then((results) => {
      results.forEach((result) => {
        if (result.status) {
          console.log({
            status: result.status,
            value: result.status === 'fulfilled' ? result.value : result.reason,
          });
        }
      });
    });
}
