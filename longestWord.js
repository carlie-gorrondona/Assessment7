//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

let words = ["hello", "hi"];
let shortestWord = "";

const longestWord = (words) => {

    for (let i = 0; i < words.length; i++) {

        if (i === 0) {
            shortestWord = words[i];

        } else if (shortestWord > words[i]) {
            shortestWord = words[i];
        } 
    }

    return shortestWord.length;
}

console.log(longestWord(words));

//runtime for the code above is O(n)
//space complexity is O(n)