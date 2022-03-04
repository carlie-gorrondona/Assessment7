//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.


const hasUniqueChars = (word) => {

    let asciiArray = [];
    let asciiNum = 0;

    for (let i = 0; i < word.length; i++) {
        asciiNum = word.charCodeAt(i);
        asciiArray.push(asciiNum);
    }

    for (let i = 0; i < asciiArray.length; i++) {
        for (let j = 0; j < asciiArray.length; j++) {
            if (asciiArray[i] === asciiArray[j] && i !== j) {

                return false;
            } 
        }
    }

    return true;
}

console.log(hasUniqueChars('Moonday'));

//runtime for the code above is O(n + n^2)
//space complexity is O(n)