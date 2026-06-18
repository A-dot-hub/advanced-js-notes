//ES6
class user {
  constructor(username, email, password) {
    this.email = email;
    this.username = username;
    this.password = password;
  }

  encyptPassword() {
    return `${this.password}abc`;
  }

  cahngeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new user("jhjh", "ajhjh@gamil.com", "313");

console.log(chai.encyptPassword());
console.log(chai.cahngeUsername());

function User(username, eamil, password) {
  this.username = username;
  this.eamil = eamil;
  this.password = password;
}

User.prototype.encyptPassword = function () {
  return `${this.password}abc`;
};

const tea = new user("tea", "tea@gamil.com", "3787873");

console.log(chai.encyptPassword());
