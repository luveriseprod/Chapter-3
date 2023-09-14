function newFunc(name, age) {
    let nameDefault = "username";
    let ageDefault = 99;

    if (!name) name = nameDefault;
    if (!age) age = ageDefault;

    function user() {
        return {
            name: name,
            age: age,
        };
    };
    
    return user();
};

let newUser1 = newFunc("Bob", 29);
let newUser2 = newFunc("Bob");
let newUser3 = newFunc();

console.log(newUser1);
console.log(newUser2);
console.log(newUser3);