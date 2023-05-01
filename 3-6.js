function artName(newName = "article name") {
    console.log("My article name:", newName)
};

artName("Javascript");
artName();

function exponentiation(numOne, numTwo) {
    let result = numOne ** numTwo;
    console.log(result)
};
exponentiation(2, 4);

const newExp = (numOne, numTwo) => {   
    return numOne ** numTwo
};
console.log(newExp(2, 3));

const newExp2 = (numOne, numTwo) => numOne ** numTwo;
console.log(newExp2(3, 2));
