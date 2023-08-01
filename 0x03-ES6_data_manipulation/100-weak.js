const weakMap = new WeakMap();

export { weakMap };

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const numOfQuery = weakMap.get(endpoint);
  weakMap.set(endpoint, numOfQuery + 1);

  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
