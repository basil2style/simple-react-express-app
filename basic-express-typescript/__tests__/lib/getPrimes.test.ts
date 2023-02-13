import { getPrimes } from "../../src/lib/getPrimes";

describe('getPrimes', () => {
    it('returns an array of prime numbers up to n', () => {
      const result = getPrimes(10);
      expect(result).toEqual([2, 3, 5, 7]);
    });
  
    it('returns an empty array for n = 0 or n = 1', () => {
      const result = getPrimes(0);
      expect(result).toEqual([]);
    
      const result2 = getPrimes(1);
      expect(result2).toEqual([]);
    });
  });
  