export function findMedian(numbers: number[]) {
    numbers.sort((a, b) => a - b);
    const length = numbers.length;
    if (length % 2 === 0) {
      return [(numbers[length / 2 - 1]), (numbers[length / 2])];
    } else {
      return [numbers[Math.floor(length / 2)]];
    }
  }
  
//   const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  const numArray = [2, 3, 5, 7];
const numArray = [2, 3, 5, 7,11,13,17];
  console.log(`The median(s) of the array is/are: ${findMedian(numArray)}`);