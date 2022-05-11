class MyPromise {
  state = "PENDING";

  constructor(callback) {
    callback(this.resolve, this.reject);
  }

  static all() {}

  static race() {}

  static resolve() {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  resolve() {
    state = "FULFILLED";
  }

  reject() {}

  then(fn) {
    // adds to microtask queue
    // setTimeout(() => {
    //   fn(value)
    // }, someTime);
  }
}

// const promise1 = new Promise((resolve, reject) => {});
// console.log(promise1);

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello, world");
//   }, 5000);
// });

// console.log(promise2);
// setTimeout(() => {
//   console.log(promise2);
// }, 6000);

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello, world");
//   }, 2000);
// })
//   .then((value) => {
//     return value + " universe";
//   })
//   .then((incrementedValue) => {
//     console.log("Incremented value: ", incrementedValue);
//   });

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("404 NOT FOUND");
//   }, 2000);
// }).then((value) => {
//   console.log(value);
// });

// const promise5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("404 NOT FOUND");
//   }, 2000);
// }).catch((value) => {
//   console.log(value);
// });

// const promise6 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello, world");
//   }, 2000);
// });

// promise6.then((value) => {
//   console.log(value);
// });

// promise6.then((value) => {
//   console.log("This is another then", value);
// });

// const fetchUserName = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Vishal");
//   }, 2000);
// });

// const fetchUserDetails = new Promise((resolve, reject) => {
//   setTimeout(() => resolve({ id: "123", address: "Hyderabad" }), 5000);
// });

// const displayUserWithDetails = function () {
//   const newPromise = Promise.all([fetchUserName, fetchUserDetails]);

//   newPromise.then(([userName, userDetails]) => {
//     console.log({
//       userName,
//       ...userDetails,
//     });
//   });
// };

// displayUserWithDetails();

// const racer1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Racer1 won");
//   }, 2000);
// });

// const racer2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Racer2 won");
//   }, 1000);
// });

// const raceNow = () => {
//   const winnerPromise = Promise.race([racer1, racer2]);

//   winnerPromise.then((value) => {
//     console.log(value);
//   });
// };

// raceNow();

// const expensivePromise = new Promise(() => {
//   // This happens immediately
//   // Sorting million number
//   console.log("Sorting million numbers");
// });

// console.log("Here");

// Promise.resolve().then(() => {
//   // This happens later
//   //sort a million numbers
// });
