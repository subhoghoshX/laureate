export function getValueInRange(value: number, min?: number, max?: number) {
  let valueInRange = value;

  if (min !== undefined) {
    valueInRange = Math.max(valueInRange, min);
  }

  if (max != undefined) {
    valueInRange = Math.min(valueInRange, max);
  }

  return valueInRange;
}
