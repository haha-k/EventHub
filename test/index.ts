import EventHub from "../src/index";

type TestCase = (message: string) => void;

const test1: TestCase = message => {
  const eventHub = new EventHub();
  console.assert(eventHub instanceof Object === true);
  console.log(message);
};

const test2: TestCase = message => {
  const eventHub = new EventHub();
  let called = false;
  eventHub.on("xxx", data => {
    called = true;
    console.assert(data === "haha");
  });
  eventHub.emit("xxx", "haha");
  //   console.assert(called === true);
  console.log(message);
};
//on emit

const test3: TestCase = message => {
  const eventHub = new EventHub();
  let called = false;
  const fn1 = () => {
    called = true;
  };
  eventHub.on("yyy", fn1);
  eventHub.off("yyy", fn1);
  eventHub.emit("yyy");
  console.assert(called === false);
  console.log(message);
};

test1("1");
test2("2");
test3("3");
