function calcWordFrequencies() {
    const wordMap = new Map();
    
    const input = prompt("Enter a list of words separated by spaces:");
    const words = input.split(" ");
  
    for (const word of words) {
      const lowercaseWord = word.toLowerCase();
      if (wordMap.has(lowercaseWord)) {
        wordMap.set(lowercaseWord, wordMap.get(lowercaseWord) + 1);
      } else {
        wordMap.set(lowercaseWord, 1);
      }
    }
  
    for (const [word, frequency] of wordMap) {
      console.log(word, frequency);
    }
  }
  
  // Call calcWordFrequencies() to test
  calcWordFrequencies();
  