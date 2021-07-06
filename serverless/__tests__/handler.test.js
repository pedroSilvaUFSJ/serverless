const imageFunction = require('../imageFunction');
const ImageEventGenerator = require('../testUtils/ImageEventGenerator')

describe('getting image key and size', () => {
  test('image has been gotten', async () => {
    const filename = 'abcd';
    const filesize = '125';
    const event = ImageEventGenerator(filename, filesize);
    const expected = `new .png object has been created: ${filename} (${filesize} bytes)`;
    const res = await imageFunction.handle(event);
    expect(res).toBe(expected);
  });
})