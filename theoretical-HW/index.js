// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function lengthOfString(str, len = 0) {
    // If the length is 0 (base case), return len (0).
    // if (str.length === 0) return len;
    if (!str.length) return len;
  
    // Remove the first letter of the string
    let restOfString = str.substring(1);
  
    // Call function again, with updated string and len
    return lengthOfString(restOfString, ++len);
  }
  
  function sumOfArray() {
    // This function returns the sum of all of the numbers in a given array.
    let myNums = [1,2,3]
    for (let i = 0; i < myNums.length; i++ ) {
        sum += myNums[i];
      }
  }
  
  function findMax(nums) {
    let nums = []
    return nums.max
    // This function returns the largest number in a given array.
  }

  let f = []
  function factorial (n) {
    if (n == 0 || n == 1)
      return 1;
    if (f[n] > 0)
      return f[n];
    return f[n] = factorial(n-1) * n;
  }
  
 function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}
  
  function coinFlips(N) {
    {
        if (N <= 0) {
            return [""];
        }
      
        const prevFlips = coinFlips(N - 1);
        const outcomes = [];
      
        for (const flip of prevFlips) {
            outcomes.push(flip + "H");
            outcomes.push(flip + "T");
        }
      
        return outcomes;
      }
  }
  
  function letterCombinations(letters) {
    const result = [];

    function generateCombinations(current, remaining) {
        if (remaining.length === 0) {
            result.push(current);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            const updatedCurrent = current + remaining[i];
            const updatedRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
            generateCombinations(updatedCurrent, updatedRemaining);
        }
    }

    generateCombinations("", letters);

    return result;
}

  
  module.exports = {
    lengthOfString,
    sumOfArray,
    findMax,
    factorial,
    fibonacci,
    coinFlips,
    letterCombinations,
  };