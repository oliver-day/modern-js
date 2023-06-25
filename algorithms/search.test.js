import { describe, expect, test } from 'vitest'
import { search } from './search'

describe('search function', () => {
  test('should return the correct index when the target is present in the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 6;
    expect(search(arr, target)).toBe(5); // As 6 is at index 5
  });

  test('should return -1 when the target is not present in the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 100;
    expect(search(arr, target)).toBe(-1); // As 100 is not present in the array
  });

  test('should work correctly with custom start and end', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 3;
    expect(search(arr, target, 2, 5)).toBe(2); // As 3 is at index 2 within the subset of the array [3, 4, 5] ;
  });

  test('should return -1 if the start index is greater than the end index', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 3;
    expect(search(arr, target, 7, 5)).toBe(-1) // As start is greater than end;
  });
});
