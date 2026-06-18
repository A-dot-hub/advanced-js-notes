const user = {
  username: "hajkj",
  loginCount: 8,
  signedIn: true,
  getUSserDETail: function () {
    console.log("Got user detail from data base");
    console.log(`hi ${this.username} your login count is ${this.loginCount}`);
    console.log(this);
  },
};

console.log(user.username);
console.log(user.getUSserDETail());

// const promiseOne = new Promise();
// const dating = new Date();
// new keyword is nothing but a constructor function

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`welcome ${this.username}`);
  };
  return this;
}

const user1 = new User("dgsdg", 12, true);
const user2 = new User("gsg", 11, false);
console.log(user1);
console.log(user2);
console.log(user1.constructor);

/*
1. Object Creation:An empty, plain JavaScript object is created.
2. Prototype Linking:The new object's internal prototype (__proto__) is linked to the constructor function's prototype property.
3. Context Binding:The context of this is bound to the new object, and the constructor function executes its code to assign properties.4. Instance Return:The function automatically returns the new object, unless the constructor explicitly returns a different non-primitive object.

*/

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const auto = new Car("honda", "accord,1998");

console.log(auto instanceof Car);
console.log(auto instanceof Object);
