// console.log("Message 1");

// // setTimeout(() => {
// //     console.log("Message 2");
// // }, 2000)

// console.log("Message 3");

// console.log("-------------------callback------------------");

// let f1 = function (callback) {
//     return setTimeout(() => {
//         console.log("f1 is here");
//         callback();
//     }, 2000)
// }
// let f2 = function () {
//     return setTimeout(() => {
//         console.log("f2 is here");
//     }, 1000)
// }

// f1(() => f2())

// f1(() => {
//     f2(() => {
//         f3(() => {

//         })
//     })
// })

console.log("-------------------Promise------------------");

function promiseF1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("promiseF1");
      resolve();
    }, 2000);
  });
}

function promiseF2() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("promiseF1");
      resolve();
    }, 1000);
  });
}

promiseF1()
    .then(() => {
        console.log("F1 finished");
    })
    .catch(() => {
        console.log("kek");
    })

promiseF1().then(()=> {
    promiseF2();
}).then(() => {
    ptomiseF3();
}).then(() => {
    ptomiseF4();
}).then(() => {
    ptomiseF5();
})

console.log("------------------------ASYNC/AWAIT--------------------------");

async function myAsyncFunc() {
    await promiseF1();
}
















// function User(name){
//     this.name = name;
// };
// User.prototype.sayHi = function () {
//     console.log("Hi! I am", this.name);
// };
// let user1 = new User("Mike")
// let user2 = new User("Alex")

// user1.sayHi();
// user2.sayHi();

// console.log(user1);

// function Admin(name) {
//     User.call(this.name);
// };

// Admin.prototype = Object.create(User.prototype);

// Admin.prototype.sayAdmin = function () {
//     console.log("I am Admin");
// };

// let user3 = new Admin("Artur");
// console.log(user3);

// user3.sayHi();

/*









//FOREACH
let arr = [4,1,2,8,1,6,4,1,5,6];

arr.forEach((element, index, thisArr) => {
    // console.log(element);
});
//MAP

console.log("---------------------------");
console.log("---------------------------");
console.log("---------------------------");

let newArr = arr.map(el => el*2);
console.log(newArr);

console.log("---------------------------");
//SOME

let have9 = arr.some(el => {
    return el === 1;
});

console.log(have9);

console.log("----------------------asda-----");

//FIND

let moreThan8 = arr.find(el => {
    return el>1
})
console.log(moreThan8);

console.log("---------------------------");
//Filter

let all = arr.filter((el) => el > 1);
console.log(all);

console.log("---------------------------");

let onlyOdd = arr.filter(el => {
    if (el % 2 === 0) {
        return el>0;
    };
})
console.log(onlyOdd);

console.log("---------------------------");
//REDUCE

console.log("---------------------------");

let arr2 = [2,"2342",3,5, "21"];
let sum = arr2.filter(function(item){
    return typeof item === 'number';
  });
sum = sum.reduce((prev, current) => {
    return prev + current;
}, 0);
console.log(sum);


























*/
