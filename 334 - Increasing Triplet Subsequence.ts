function increasingTriplet(nums: number[]): boolean {
    let min = Infinity, mid = min, max = mid;

    nums.forEach(number => {
        if (number <= min) {
            min = number;
        } else if (number <= mid) {
            mid = number;
        } else if (number <= max) { // we could exit here, but just for clarity
            max = number;
        }
    });

    return Math.max(min, mid, max) !== Infinity;
};
