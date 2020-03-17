export default class EventHub {
  cache = {};
  on(eventName, fn) {
    if (this.cache[eventName] === undefined) {
      this.cache[eventName] = [];
    }
    this.cache[eventName].push(fn);
  }
  emit(eventName) {
    let array = this.cache[eventName];
    if (array === undefined) {
      array = [];
    }
    array.forEach(fn => {
      fn();
    });
  }
}
