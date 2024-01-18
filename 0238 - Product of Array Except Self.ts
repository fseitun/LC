function productExceptSelf(nums: number[]): number[] {
    let l = 1, r = 1;
    const leftProduct = [];
    const rightProduct = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        leftProduct[i] = l;
        l *= nums[i];

        const j = nums.length - 1 - i;
        rightProduct[j] = r;
        r *= nums[j];
    }

    const result = [];

    for (let i = 0; i < nums.length; i++) {
        result[i] = leftProduct[i] * rightProduct[i];
    }

    return result;
};
