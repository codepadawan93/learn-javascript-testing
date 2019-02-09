const context = {};

context.add = (a, b) => parseFloat(a) + parseFloat(b);
context.objectFactory = () => {
  return { a: 1, b: 2 };
};
module.exports = context;
