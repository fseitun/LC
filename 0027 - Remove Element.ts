function removeElement(nums: number[], val: number): number {
    let wPointer = 0;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] !== val) {
            nums[wPointer] = nums[r];
            wPointer++;
        } 
    }

    // console.log(nums, wPointer)
    return wPointer;
};
