function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5(6));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUSer(useranme, score) {
  this.useranme = useranme;
  this.score = score;
}

createUSer.prototype.increment = function () {
  this.score++;
};
createUSer.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};

const chai = new createUSer("chai", 25);
const tea = new createUSer("tea", 250);

chai.printMe();

/*
here what happen behind the scene when the new keyword is used:

A new object is created: The new keyword initiates the
creation of å new JavaScript object.

A prototype is linked: The newly created object gets linked
to the prototype property of the constructor function. This
means that it has access to properties and methods defined
on the constructor's prototype.

The constructor is cat led: The constructor function is
called with the specified argumentslgnd this is bound to
the newly created object. If no explicit return value is
speci fied from the constructor, JavaScript assumes this,
the newly created object, to be the intended return value.

The new object is returned: After the constructor function
has been called, if it doesn't return a non—primitive value
(object, array, function, etc.), the newly created object
is returned.

*/
