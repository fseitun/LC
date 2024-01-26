function removeDuplicates(nums: number[]) {
    let writeIndex = 0;
    let count = 0;

    for (let readIndex = 0; readIndex < nums.length; readIndex++) {
        if (nums[readIndex] === nums[writeIndex - 1] && count < 2) {
            nums[writeIndex] = nums[readIndex];
            count++;
            writeIndex++;
        } else if (nums[readIndex] !== nums[writeIndex - 1]) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
            count = 1;
        }
    }
    return writeIndex;
};
