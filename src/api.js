
const CONSTANTS = {
  USER_API: 'https://dummyjson.com/users',
  NUMBER_OF_USERS: 8,
}
export const fetchFollwers = async () => {
  try {
    const data = await fetch(`${CONSTANTS.USER_API}?limit=${CONSTANTS.NUMBER_OF_USERS}`);
    const users = await data.json();
    return users
  } catch (error) {
    return error
  }
}