export default class EventHub {
  private cache = {};
  on(eventName, fn) {
    //把fn推进this.cache[eventName]
    this.cache[eventName] = this.cache[eventName] || [];
    this.cache[eventName].push(fn);
  }
  emit(eventName, data?) {
    //把this.cache[eventName]
    (this.cache[eventName] || []).forEach(fn => fn(data));
  }
  off(eventName, fn) {
    let index = indexOf(this.cache[eventName], fn);
    if (index === -1) return;
    this.cache[eventName].splice(index, 1);
  }
}

/**
 *  帮助函数 indexOf
 * @param array
 * @param item
 */
function indexOf(array, item) {
  if (array === undefined) {
    return -1;
  }
  let index = -1;
  for (let i = 0; i < array.length; ++i) {
    if (array[i] === item) {
      index = i;
    }
  }
  return index;
}
