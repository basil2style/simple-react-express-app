import { findMedian } from "../../src/lib/findMedian";

describe("Test app.ts", () => {
    test('findMedian returns the correct median for an array of numbers', () => {
        expect(findMedian([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([5]);
        expect(findMedian([2, 3, 5, 7])).toEqual([3,5]);
        expect(findMedian([2, 3, 5, 7, 11])).toEqual([5]);
    });
});