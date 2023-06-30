// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// function to convert a name into initials
function abbrevName(name) {
  // split the name into an array of words
  const arr = name.split(" ");

  // extract the first initial and convert it to uppercase
  const firstInitial = arr[0][0].toUpperCase();

  // extract the second initial and convert it to uppercase
  const secondInitial = arr[1][0].toUpperCase();

  // concatenate the initials with a dot separator and return the result
  return `${firstInitial}.${secondInitial}`;
}
