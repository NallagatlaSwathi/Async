async function fetchNumber() {
  return 1;
}

async function asyncFunction1() {
  const value = await 1; // no op
  return value;
}

/**
 function asyncFunction1() {
   return Promise.resolve()
     .then(function () {
       return 1;
     })
     .then(function (_resp) {
       return _resp;
     });
 }
 */

async function fetchUserWithDetails(id) {
  const username = await fetchUserName();
  const userDetails = await fetchUserDetails(username);

  return { username, userDetails };
}

async function fetchTwoUserDetails() {
  const user1Promise = fetchUserWithDetails(1);
  const user2Promise = fetchUserWithDetails(2);

  const [user1, user2] = Promise.all([user1Promise, user2Promise]);

  return [user1, user2];
}
