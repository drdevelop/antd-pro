export function isArray(value: any) {
  return (value instanceof Array);
}

export function isRegExp(value: any) {
  return Object.prototype.toString.call(value) === '[object RegExp]';
}

export function isFunction(value: any) {
  return typeof value === 'function';
}

export function genIndexArrayByLen(len: number) {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
}

export function shallowEqual(prev, current) {
  if (!prev || !current) return false;
  let mergeKeys: (string | number)[] = [];
  if (isArray(prev) && isArray(current)) {
    const prevLen = prev.length;
    const currentLen = current.length;
    mergeKeys = genIndexArrayByLen(Math.max(prevLen, currentLen));
  } else {
    const prevKeys = Object.keys(prev);
    const currentKeys = Object.keys(current);
    mergeKeys = [...new Set([...prevKeys, ...currentKeys])];
  }
  for (let i = 0; i < mergeKeys.length; i++) {
    const key = mergeKeys[i];
    const currentVal = current[key];
    const prevVal = prev[key];
    if (Object.is(currentVal, prevVal)) continue;
    return false;
  }
  return true;
}
