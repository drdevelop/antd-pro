import { Schema } from '../core/types';
import { isFunction, isRegExp } from './helper';

function replacer(key: string, value: any) {
  if (isFunction(value)) {
    const fnStr = value.toString().replaceAll('\n', '');
    // case1: { a: () => 1 }
    // case2: { a() {} }
    // case3: { a: function() {} }
    // case4: { a: function() { return () => 1 }}
    return (
      /^\s?\([^;]*?\)\s?=>/.test(fnStr) || /^\s?function/.test(fnStr)
        ? fnStr
        : 'function ' + fnStr
    );
  }
  if (isRegExp(value)) {
    return value.toString();
  }
  return value;
}

export function stringifySchema(schema: Schema<any>) {
  try {
    return JSON.stringify(schema, replacer, 2).replaceAll('\\n', '\n');
  } catch (err) {
    console.error('stringify error', err);
    return schema;
  }
}

function reviver(key: string, value: any) {
  try {
    // eslint-disable-next-line
    const computedVal = new Function(`return (${value})`)();
    if (isFunction(computedVal) || isRegExp(computedVal)) {
      return computedVal;
    } else {
      return value;
    }
  } catch (err) {
    return value;
  }
}

// TODO: XSS defense
/**
 * parse schema from server  
 * !!!Don't use ToC scene，Because you will definitely encounter css attacks，
 * Unless you do some encode for schema str
 */
export function parseSchema(schema: string) {
  try {
    return JSON.parse(schema, reviver);
  } catch (err) {
    console.error('parse error', err);
    return schema;
  }
}
