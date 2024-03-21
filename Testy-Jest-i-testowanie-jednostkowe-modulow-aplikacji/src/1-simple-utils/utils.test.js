import { add } from './utils';

// usuń .skip zanim zaczniesz!
describe.skip('add', () => {
  it('should add whole numbers', () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(1, 2)).toBe(3);  
  });
});
