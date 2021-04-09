console.log("debut");

setTimeout(() => console.log("timeout 2000 :"), 2000);

const promesse = new Promise((resolve, reject) => {
  setTimeout(() => resolve(), 4000);
});

promesse.then(() => {
  console.log("promesss 4000");
});

Promise.resolve().then(() => {
  console.log("promesse 0");
});

setTimeout(() => {
  console.log("timeout 0");
}, 0);

console.log("fin");
