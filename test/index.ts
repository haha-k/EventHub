import EventHub from "../src/index";


const test1 = () => {
const eventHub = new EventHub();
  console.assert(eventHub instanceof Object === true);
};

const test2 = ()=>{
const eventHub = new EventHub();
let called = false;
eventHub.on("xxx", data => {
  called = true;
  console.assert(data === "haha");
});
eventHub.emit("xxx", "haha");
setTimeout(() => {
    console.assert(called === true);
}, 1000);
}
//on emit

const test3 = () => {
const eventHub = new EventHub();
let called = false;
const fn1 = () => {
  called = true;
};
eventHub.on("yyy", fn1);
eventHub.off("yyy", fn1);
eventHub.emit("yyy");
setTimeout(() => {
    console.assert(called === false);
}, 1000);

}

test1();
test2();
test3();
