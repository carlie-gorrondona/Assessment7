//A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
//Write a function to check a sentence to see if it is a pangram or not.

let str = "The quick brown fox jumps over the lazy dog!";
let str2 = "I like cats, but not mice";

const isPangram = (str) => {

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (str[i] === alphabet[j]) {
                alphabet.splice(j, 1);
            }
        }
    }

    if (alphabet.length === 0) {
        return true;
    }

    return false;
}

console.log(isPangram(str2));

//runtime for the code above is O(n^2)
//space complexity is O(n)