export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
//export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

export const validPassword = new RegExp(
  "^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$"
);
