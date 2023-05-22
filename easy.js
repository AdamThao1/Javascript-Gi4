//Write a function that takes in an array of numbers and outputs the average of all the numbers. 
function calculateA(numbers) {
    if (numbers.length === 0) { //this one checks if the array is empty
        return 0; //takes a array of numbers as parameters.
    }

    let sum = 0; // this would get the sum of all the numbers in the array
    for (let i = 0; i < numbers.length; i++){ //this iterates through each element
        sum += numbers[i]; // each number in the array is added to the sum.
    }

    const average = sum / numbers.length; // this would get the average in the array by dividing the sum and how numbers are in the array
    return average; 
};

const input1 = [1, 4, 7];
const output1 = calculateA(input1);
console.log(output1)