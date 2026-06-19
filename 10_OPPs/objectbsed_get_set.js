const User = {
  _email: "da@aga.com",
  _password: "aaf",

  get email() {
    return this._email.toUpperCase();
  },
  set email(val) {
    this._email = val;
  },
};
