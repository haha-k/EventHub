export default class EventHub {
  cache = {};
  on(eventName, fn) {
    //把fn推进this.cache[eventName]
    this.cache[eventName] = this.cache[eventName] || [];
    this.cache[eventName].push(fn);
  }
  emit(eventName) {
    //把this.cache[eventName]
    (this.cache[eventName] || []).forEach(fn => fn());
  }
}
