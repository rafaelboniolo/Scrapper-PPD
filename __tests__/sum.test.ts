import { sum } from './sum';

describe("Testing the sum function", () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  })
})
