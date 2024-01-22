function pivotIndex(nums: number[]): number {
    const total = nums.reduce((acc, num) => acc + num, 0);

    const leftSum = [];
    for (let l = 0; l < nums.length; l++) {
        leftSum[l] = (leftSum[l - 1] || 0) + (nums[l - 1] || 0);

        if (2 * leftSum[l] === total - nums[l]) {
            return l;
        }
    }

    return -1;
}
