// Exercise 1
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbersSum) {
  let sum = 0;

  for (let i = 0; i < numbersSum.length; i++)
    // Iterating over the number array
    sum += numbersSum[i];
}

// Exercise 2
const book = {};

book.title = "The Givng Tree";
book.author = "Shel Silverstein";
book.pages = 57;
book.readCount = 100;

book.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`;
};
console.log(book.info());

// Exercise 3
let sentence = "The quick brown fox jumps over the lazy dog";
let wordsArray = sentence.split(" ");

for (let i = 0; i < wordsArray.length; i++) {
  let charactersArray = wordsArray[i].split("");
  charactersArray.reverse();
  wordsArray[i] = charactersArray.join("");
}

let reversedSentence = wordsArray.join(" ");

console.log(reversedSentence);

// Exercise 4

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
let rows = csvData.split("\n");
let headers = rows[0].split(",");
let resultArray = [];

for (let i = 1; i < rows.length; i++) {
  let values = rows[i].split(",");

  let record = {};

  for (let j = 0; j < headers.length; j++) {
    record[headers[j]] = values[j];
  }

  resultArray.push(record);
}

console.log(resultArray);
