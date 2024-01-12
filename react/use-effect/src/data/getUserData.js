export const fetchUserData = async (amountOfUsers) => {
  const fetchedUsers = await fetch(
    `https://randomuser.me/api/?results=${amountOfUsers}`
  );
  const randomUsers = await fetchedUsers.json();
  // console.log(randomUsers.results);
  // const randomUser = {
  //   name: userData.results[0].name.first,
  //   city: userData.results[0].location.city,
  //   age: userData.results[0].dob.age,
  // };
  // return randomUser;
  return randomUsers.results;
};
