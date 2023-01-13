
const CONSTANTS = {
  USER_API: 'https://dummyjson.com/users',
  NUMBER_OF_USERS: 8,
}
export const fetchFollowers = async () => {
  try {
    const response = await fetch(`${CONSTANTS.USER_API}?limit=${CONSTANTS.NUMBER_OF_USERS}`);
    const data = await response.json();
    return data.users
  } catch (e) {
    console.error(e)
  }
}