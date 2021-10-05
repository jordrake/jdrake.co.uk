export function sample<T>(...values: T[]) {
  const index = Math.floor(Math.random() * values.length);

  console.log(index);

  return values[index];
} 