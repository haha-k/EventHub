import EventHub from "../src/index";

const eventHub = new EventHub();

console.assert(eventHub instanceof Object === true);

//on emit
let called = false;
eventHub.on("xxx", () => {
  called = true;
  console.log("调用");
});
eventHub.emit("xxx");
