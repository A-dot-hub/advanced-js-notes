// let myName = "jadfjad     ";
// let myChannel = "gd   ";
// console.log(myName.length);

let myHerros = ["thor", "spiderman"];

let heropower = {
  thor: "hammer",
  spiderman: "web",
  getSpiderPower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};

Object.prototype.Abhi = function () {
  console.log("abhis is present in all object");
};

Array.prototype.heyAbhi = function () {
  console.log("abhis say hello");
};

heropower.Abhi();

myHerros.Abhi();
myHerros.heyAbhi();
// heropower.heyAbhi();

//inheritance

const User = {
  name: "cahi",
  eamil: "cahi@email.com",
};

const Teacher = {
  makeVideo: true,
};

const TeacherSupport = {
  isAvailable: false,
};

const TAsupport = {
  makeAssignment: "js assignment",
  fulltime: true,
  __proto__: TeacherSupport,
};

Teacher.__proto__ = User;

//moderns syntax
Object.setPrototypeOf(TeacherSupport, Teacher);

let anotherUseranme = "dada   ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  //   console.log(`${this.name}`);
  console.log(`true length is ${this.trim().length}`);
};

anotherUseranme.trueLength();
"adad".trueLength();
"ssfgs".trueLength();
