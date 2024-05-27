const axios = require('axios');

const userProfilesUrl =
  'https://raw.githubusercontent.com/alj-devops/santa-data/master/userProfiles.json';
const usersUrl =
  'https://raw.githubusercontent.com/alj-devops/santa-data/master/users.json';

async function getUser(username) {
  const users = await axios.get(usersUrl);
  const userData = users.data.find((user) => user.username === username);

  if (!userData) {
    return null;
  }

  const userProfile = await axios.get(userProfilesUrl);
  const profileData = userProfile.data.find(
    (profile) => profile.userUid === userData.uid,
  );

  if (!userProfile) {
    return {
      username: userData.username,
      address: null,
      age: null,
    };
  }

  const dob = new Date(profileData.birthdate);
  const age = new Date().getFullYear() - dob.getFullYear();

  return {
    username: userData.username,
    address: profileData.address,
    age,
  };
}

module.exports = {
  getUser,
};
