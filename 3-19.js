function promiseF1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("PromiseF1");
      resolve();
    }, 2000);
  });
}
function promiseF2() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("PromiseF2");
      resolve();
    }, 1000);
  });
}
function promiseF3() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("PromiseF3");
      resolve();
    }, 2000);
  });
}

promiseF1().then(() => promiseF2().then(() => promiseF3()));

async function asyncFunc() {
  await promiseF1();
  await promiseF2();
  await promiseF3();
}
asyncFunc();

