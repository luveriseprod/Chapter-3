function userBuilder(name, age) {
  const nameDefault = "username";
  const ageDefault = 99;

  if (!name) name = nameDefault;
  if (!age) age = ageDefault;

  function createUser() {
    return {
      name: name,
      age: age,
    };
  }

  return createUser;
}

let userCreator1 = userBuilder("Bob", 29);
let userCreator2 = userBuilder("Bob");
let userCreator3 = userBuilder();

console.log(userCreator1());
console.log(userCreator2());
console.log(userCreator3());
