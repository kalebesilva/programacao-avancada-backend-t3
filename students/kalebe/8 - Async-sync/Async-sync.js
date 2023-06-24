function test() {
  let myDate = new Date();
  console.log(
    `${myDate.getDate()}/${myDate.getMonth() + 1}/${myDate.getFullYear()}`
  );
}

setTimeout(() => {
  let myNewDate = new Date();
  console.log(
    `${myNewDate.getHours()}:${myNewDate.getMinutes()}:${myNewDate.getSeconds()}`
  );
  test();
}, 5000);

setTimeout(() => {
  let myNewDate = new Date();
  console.log(
    `${myNewDate.getHours()}:${myNewDate.getMinutes()}:${myNewDate.getSeconds()}`
  );
  test();
}, 5000);
setTimeout(() => {
  let myNewDate = new Date();
  console.log(
    `${myNewDate.getHours()}:${myNewDate.getMinutes()}:${myNewDate.getSeconds()}`
  );
  test();
}, 5000);

setInterval(() => {
  let myNewDate = new Date();
  console.log(
    `${myNewDate.getHours()}:${myNewDate.getMinutes()}:${myNewDate.getSeconds()}`
  );
  test();
}, 5000);
