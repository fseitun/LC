function longestSubarray(nums: number[]): number {
    let max = 0;
    let l = 0;
    let zeroes = 0;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] === 0) {
            zeroes++;
            while (zeroes > 1 && l < r) {
                if (nums[l] === 0) {
                    zeroes--;
                }
                l++;
            }
        }
        max = Math.max(max, r - l);
    }
    return
