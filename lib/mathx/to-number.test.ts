import toNumber from './to-number';

test('correctly converts provided number to a certain precision', () => {
  expect(toNumber('3.45e2')).toBe(345);
  expect(toNumber('3.45e2', -1)).toBe(350);
  expect(toNumber(0.2 + 0.1, 1)).toBe(0.3);
  expect(toNumber('13.359%', 4)).toBe(0.1336);
});

test('incorrect number values', () => {
  expect(toNumber(null)).toBeNaN();
  expect(toNumber('12n')).toBeNaN();
});

test('handles String and Number objects', () => {
  // eslint-disable-next-line no-new-wrappers
  expect(toNumber(new Number(42), -1)).toBe(40);
  // eslint-disable-next-line no-new-wrappers
  expect(toNumber(new String('5.1'), -1)).toBe(10);
});
