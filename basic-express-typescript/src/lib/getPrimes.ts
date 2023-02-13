export function getPrimes(n: number) {
    let isPrime = Array(n + 1).fill(true);
    let primeArr = [];
    isPrime[0] = isPrime[1] = false;
  
    for (let i = 2; i * i <= n; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= n; j += i) {
          isPrime[j] = false;
        }
      }
    }
  
    for (let i = 2; i <= n; i++) {
      if (isPrime[i]) {
        primeArr.push(i);
      }
    }
    return primeArr;
  }
  
