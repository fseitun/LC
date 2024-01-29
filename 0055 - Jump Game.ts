function canJump(nums: number[]): boolean {
    let maxPoint = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i <= maxPoint) maxPoint = Math.max(maxPoint, i + nums[i]);
        if (maxPoint >= nums.length - 1) return true;
    };

    return false;
}

console.log(canJump([0]))
