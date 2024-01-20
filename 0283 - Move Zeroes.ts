function moveZeroes(nums: number[]): void {
    let nzp = 0;
    let zp = 0;

    while (nzp < nums.length) {
        while (nzp < nums.length && nums[zp] !== 0) {
            zp++;
            nzp++;
        }
        if (nzp < nums.length && nums[nzp] !== 0) {
            nums[zp] = nums[nzp];
            nums[nzp] = 0;
            zp++;
        }
        nzp++;
    }
};
