class User {
    constructor(name) {
        this.name = name;
    };

    sayHi = function() {
        console.log("Hi am", this.name);
    }
}

let user1 = new User("Alex")
console.log(user1);

class Admin extends User{
    constructor(name) {
        super(name);
    }
}

let user2 = new Admin("Bob")
user2.sayHi()
console.log(user2);







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



