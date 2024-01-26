function removeDuplicates(nums: number[]) {
    let writeIndex = 0;

    for (let readIndex = 0; readIndex <= nums.length; readIndex++) {
        if (nums[readIndex] !== nums[writeIndex - 1]) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }
    return writeIndex - 1;
};
