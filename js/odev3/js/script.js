function getSecondLargest(nums) {
    // Complete the function
    nums.sort(function (a, b) { return a - b })
    let i = nums.length - 1;
    let secondLargest = nums[i]

    while (i > 0) {
        i--;
        if (secondLargest > nums[i]) {
            secondLargest = nums[i]
            return secondLargest;
        }
    }
    return secondLargest;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(getSecondLargest(arr)
)