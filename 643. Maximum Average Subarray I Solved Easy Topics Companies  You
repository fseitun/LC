function findMaxAverage(nums: number[], k: number): number {
    let result = 0;

    for (let r = 0; r < k; r++) {
        result += nums[r];
    }

    let max = result;

    for (let r = k; r < nums.length; r++) {
        result += nums[r] - nums[r - k];
        max = Math.max(result, max)
    }

    return max / k;
};
