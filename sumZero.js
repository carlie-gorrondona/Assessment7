//Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.


const addToZero = (array) => {

    for (let i = 0; i < array.length; i++) {
        for (let j = array.length-1; j >= 0; j--) {
            if (array[i] + array[j] === 0 && i !== j) {
                return true;
            }
        } 
    }

    return false;
}

console.log(addToZero([1, 2, 3, -2]));

//runtime for the above code is O(n^2)
//space complexity is O(1)