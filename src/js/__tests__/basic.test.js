import ArrayBufferConverter from "../ArrayBufferConverter";
import getBuffer from "../getBuffer";

test('Test length getBuffer', () => {
  const buff = getBuffer();


  expect(buff.byteLength).toBe(106);
});

test('Test ArrayBufferConverter', () => {
  const buff = getBuffer();
  const abc = new ArrayBufferConverter();
  abc.load(buff);
  const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(abc.toString()).toBe(result);
});