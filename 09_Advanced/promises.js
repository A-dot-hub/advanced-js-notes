// fetch("https://something.com").then().catch().finally();

// A promise is an object representing the eventual compeltion or failure
const promiseOne = new Promise((resolve, reject) => {
  //do ansync task
  //DB calls,cryptoghraphy,network call

  setTimeout(() => {
    console.log("aync task completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("promised consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 resolved");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "abhi", eamil: "abhi@gamil.com" });
  }, 1000);
});

promise3.then((user) => {
  console.log(user.eamil);
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "abhi", password: "123" });
    } else {
      reject("Error: something went wrong");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  });
