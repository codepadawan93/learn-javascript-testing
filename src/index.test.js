const functions = require("./index");

test("adds 1 + 2 to equal 3", () => {
  expect(functions.add(1, 2)).toBe(3);
});

test('adds "1" + "2" to equal 3', () => {
  expect(functions.add("1", "2")).toBe(3);
});

test('adds "1" + 2 to equal 3', () => {
  expect(functions.add("1", "2")).toBe(3);
});

test("creates object correctly", () => {
  expect(functions.objectFactory()).toEqual({ a: 1, b: 2 });
});
