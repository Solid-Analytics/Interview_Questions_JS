// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// Input is array of words

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

// White Boarding

/*
1. define the array 
2. Declare teh findNeedle() that takes in an array as the parameter
3. Loop through the array (For Loop)
4. Inside the loop, we check if the current element is a string and equal to the word "needle". (toLowercase method)
5. if the condition is true. we return a message indicating the position of the needle in the array.
6. Finally, we call the findNeedle() function, passing the haystack array as an argument, and log the result to the console.


*/

let haystack = [
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
];
// Function to find the needle in the haystack
function findNeedle(haystack) {
  // Loop through the haystack array
  for (let i = 0; i < haystack.length; i++) {
    // Check if the current element is a string and equal to "needle"
    if (
      typeof haystack[i] === "string" &&
      haystack[i].toLowerCase() === "needle"
    ) {
      // Return the message with the position of the needle
      return `found the needle at position ${i}`;
    }
  }
}
