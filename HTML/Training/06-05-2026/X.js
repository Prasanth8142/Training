function deepClone(value, seen = new WeakMap()) {
  // 1. Primitives & functions
  if (value === null || typeof value !== "object") {
    return value;
  }

  // 2. Circular reference handling
  if (seen.has(value)) {
    return seen.get(value);
  }

  let result;

  // 3. Special types
  if (value instanceof Date) {
    result = new Date(value);
  } else if (value instanceof RegExp) {
    result = new RegExp(value.source, value.flags);
  } else if (value instanceof Map) {
    result = new Map();
    seen.set(value, result);
    value.forEach((v, k) => {
      result.set(deepClone(k, seen), deepClone(v, seen));
    });
  } else if (value instanceof Set) {
    result = new Set();
    seen.set(value, result);
    value.forEach(v => {
      result.add(deepClone(v, seen));
    });
  } 
  // 4. Array
  else if (Array.isArray(value)) {
    result = [];
    seen.set(value, result);
    value.forEach((item, i) => {
      result[i] = deepClone(item, seen);
    });
  } 
  // 5. Object (preserve prototype)
  else {
    result = Object.create(Object.getPrototypeOf(value));
    seen.set(value, result);

    Reflect.ownKeys(value).forEach(key => {
      result[key] = deepClone(value[key], seen);
    });
  }

  return result;
}