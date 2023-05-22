//write a function to compute
//fewest numbers
//need to make the amount

//if amount of money
//cant make up any combo
//return -1

function coinC (amount) {
    const coins = [10, 25, 5, 1]; //the array
    let count = 0; //the start of the count

    for(i = 0; i < coins.length; i++){ //looping through the array
        const coin = coins[i]; // gives the array coins into coin
        count += Math.floor(amount / coin); //calculates the coins to the amount
        amount %= coin; //calculate the remainder
    }
    return count; //return the count
}

const amount = 43;
const result = coinC(amount)
console.log(result)

// i didn't complete the problem
// i didn't create the if statement, got lost 