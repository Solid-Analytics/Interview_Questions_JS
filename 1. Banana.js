// Interview Question
// Write the word 'banana' in JavaScript

console.log("b" + "a" + "n" + "a" + "n" + "a");

console.log("b" + "a" + +"a" + "a");

//+'a' resolves to NaN ("Not a Number") because it coerces a string to a number, while the character a cannot be parsed as a number.
//Adding NaN to "ba" turns NaN into the string "NaN" due to type conversion, gives baNaN. And then there is an 'a' at the end, giving baNaNa.
//The space between + + is to make the first one string concatenation and the second one a unary plus (i.e. "positive") operator. You have the same result if you use 'ba'+(+'a')+'a', resolved as 'ba'+NaN+'a', which is equivalent to 'ba'+'NaN'+'a' due to type juggling

console.log(("b" + "a" + +"a" + "a").toLowerCase());
