let user1 = { name: "Alex" };
let user2 = { name: "Bob" };

let article1 = { name: "React" }
let article2 = { name: "Angular" }
let article3 = { name: "Vue" }

let userArticles = new Map();

userArticles.set(user1, [article1, article2]);

userArticles.set(user2, [article3]);

console.log(userArticles);

function onlyUnique(arr) {
    let setFromArray = new Set(arr);
    return Array.from(setFromArray);
};

let newArr = [1,2,3,4,1,4,2,4,5,1,2,3,4,2,3,4,2]

console.log(onlyUnique(newArr));
