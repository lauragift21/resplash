import Unsplash, { toJson } from 'unsplash-js/native';
import {APP_ACCESS_KEY, APP_SECRET} from 'react-native-dotenv';

const unsplash = new Unsplash({
  applicationId: APP_ACCESS_KEY,
  secret: APP_SECRET,
});

// const authenticationUrl = unsplash.auth.getAuthenticationUrl([
//   "public",
//   "read_user",
//   "write_user",
//   "read_photos",
//   "write_photos"
// ]);

// unsplash.auth.userAuthentication(query.code)
//   .then(toJson)
//   .then(json => {
//     unsplash.auth.setBearerToken(json.access_token);
//   });


location.assign(authenticationUrl);
export default unsplash;