import { Arrays } from './../src/memory.js';

describe('Arrays',() => {

  test('should correctly create Array.', () => {
    const test = new Arrays();
    expect(test.source).toEqual([1,1,2,2,3,3,4,4,5,5,6,6]);
    expect(test.display).toEqual([]);
  });
});