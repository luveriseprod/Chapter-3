function getTime(date) {
    let data = new Date();
    let hours = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();
    switch (true) {
        case min<10: min = "0"+min;
        case sec<10: sec += "0"+sec;
    }
    console.log(hours+':'+min+':'+sec)
}

setInterval(getTime(), 1000)












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






























