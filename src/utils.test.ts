/**
 * @group utils
 * @group all
 */

import { passwordStrength, validateUser } from './utils'

expect.extend({
  toBeWithinRange(received: number, floor: number, ceiling: number) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

describe('login functions', () => {
  test('password strength in range', () => {
    let pass:string = 'abc';
    expect(passwordStrength(pass)).toBeWithinRange(0, 100);
  });
  test('good user can log in', () => {
    expect(validateUser('bad', 'bad_password')).toBe(false);
    expect(validateUser('bad', 'bad_password')).not.toBe(true);
  });
  test('bad user cannot log in', () => {
    expect(validateUser('bad', 'bad_password')).toBe(false);
    expect(validateUser('bad', 'bad_password')).not.toBe(true);
  });
});

describe('example equality', () => {
  test('obj1 same as obj2', () => {
    const obj1 = {
      isReady: true,
      name: 'obj',
    };
    const obj2 = {
      isReady: true,
      name: 'obj',
    }
    expect(obj1).toEqual(obj2);
  });
});
