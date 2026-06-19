function User(email, password) {
  this._eamil = email;
  this._passwaord = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._eamil.toUpperCase();
    },
    set: function (value) {
      this._eamil = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password;
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const chai = new User("cah@aadgkn.com", "chi");
console.log(chai.email);
