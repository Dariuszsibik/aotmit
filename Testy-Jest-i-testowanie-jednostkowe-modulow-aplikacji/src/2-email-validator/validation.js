// https://www.emailregex.com/
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isEmail = (email) => {
  // odkomentuj linię niżej by zadziałało
  // return emailRegex.test(email)
  return email.includes('@');
};
