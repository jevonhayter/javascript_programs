// Jevon D. Hayter
// Cipher function
function rot13(string) {
  var alphabet = [];
  var newString = "";
  var originalLetter;
  var letter;
  var result;
 
  // Loop to create an uppercase alphabet array
  for (var i = 65; i <= 90; i += 1) {
    alphabet.push(String.fromCharCode(i));
  }
 
  // Loop through the string and retrieve the array index of each letter.
  for (var i = 0; i < string.length; i += 1) {
    originalLetter = string[i];
    
    // Test for non-alphabetical characters
    if (!/^[a-zA-Z]+$/.test(originalLetter)) {
      newString += originalLetter;
      continue;
    }

    letter = string[i].toUpperCase();
    result = alphabet.indexOf(letter);
  
    // Test to determine the position of the letter in the array.
    // Either add or subtract 13 index places. 
    if (result <= 12) {
       newString += (originalLetter === originalLetter.toUpperCase()) ? alphabet[result + 13] : alphabet[result + 13].toLowerCase();
    } else {
       newString += (originalLetter === originalLetter.toUpperCase()) ? alphabet[result - 13] : alphabet[result - 13].toLowerCase();
    }
  }

  return newString;
}
