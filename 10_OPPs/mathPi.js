// console.log(Math.PI, "PI");

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
descripter.writable = true;
console.log(descripter.writable);

console.log(Math.floor(descripter.value));

const chai = {
  name: "ginger",
  price: 250,
  isavailable: true,
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value != "function") {
    console.log(`${key}:${value}`);
  }
}

//you  Cannot redefine property: PI
// Object.defineProperty(Math, "PI", {
//   writable: true,
//   enumerable: true,
// });
// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
