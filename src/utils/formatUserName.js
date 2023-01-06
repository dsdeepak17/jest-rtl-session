export const formatUserName = (userName) => {
  return userName.startsWith('@') ? userName : '@' + userName;
}