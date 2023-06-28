function hasTargetSum(array, target) {
  // Use a nested loop to iterate over all possible pairs of numbers
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // Check if the sum of the current pair equals the target
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  
  // If no pair sums up to the target, return false
  return false;
}

// Test Cases
console.log("Expecting: true");
console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 4));
