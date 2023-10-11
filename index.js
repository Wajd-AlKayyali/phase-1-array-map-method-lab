const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map((title) => {
    return title
      .split(" ") // the split(' ') method to split the title string into an array of words, using a space (' ') as the delimiter. This effectively separates the string into individual words.
      .map((word) => word[0].toUpperCase() + word.slice(1)) // word.slice(1): It takes the rest of the word starting from the second character (index 1). This effectively extracts the remaining characters of the word.
      .join(" "); //  join(' ') method is used to join the modified words back together into a single string, using a space (' ') as the separator
  });
};
