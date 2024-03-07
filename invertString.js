function invertString(str) {
  let invertedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertedString += str[i];
  }
  return invertedString;
}

const originalString = "Hello, World!";
const invertedString = invertString(originalString);

console.log(invertedString)