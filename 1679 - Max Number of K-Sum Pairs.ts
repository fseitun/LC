function maxOperations(nums: number[], k: number): number {
    const map: { [key: number]: number } = {};
    let pairs = 0;

    nums.forEach(number => {
        const complement = k - number;

        if (map[number] > 0) {
            map[number]--;
            pairs++;
        } else {
            map[complement] = 1 + (map[complement] || 0);
        }
    });

    return pairs;
};
