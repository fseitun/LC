function longestOnes(nums: number[], k: number): number {
    let flipped = 0;
    let l = 0;
    let max = 0;

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] === 0) {
            flipped++;
            if (flipped > k) {
                while (nums[l] === 1 && l < r) {
                    l++;
                }
                flipped--;
                l++;
            }
        }
        max = Math.max(r + 1 - l, max);
        // console.log(r, flipped, l, max);
    }
    return max;
}
