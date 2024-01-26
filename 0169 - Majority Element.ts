function majorityElement(nums: number[]) {
    let count = 0;
    let current = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if(current === nums[i]) {
            count++;
        } else if (current !== nums[i]) {
            count--;
        }
        if (count < 0) {
            count *= -1;
            current = nums[i];
        }
    }

    return current;
};
