const handler = require('../image');

test('correct greeting is generated', () => {
  expect(handler()).toBe("Hello!");
});