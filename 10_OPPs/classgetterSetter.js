class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password.toUpperCase();
    // return `${this._password}dadg
  }
  set password(value) {
    this._password = value;
  }
}

const sgs = new User("af@ag.ai", "adsfa");
console.log(sgs.password);
console.log(sgs.email);
