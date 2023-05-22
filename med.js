function search(nums, target) {
    for(i = 0; i < nums.length; i++){ //iterate each element of nums
        if (nums[i] === target) { //check if nums index = target
            return i; //if it is return the index
        }
    }
    return -1; // target not found
}

const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 1;
console.log(search(nums, target)); 