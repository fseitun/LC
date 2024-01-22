function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const sol1 = [];
    const sol2 = [];

    for (const key of set1) {
        if (!set2.has(key)) {
            sol1.push(key);
        }
    }

    for (const key of set2) {
        if (!set1.has(key)) {
            sol2.push(key);
        }
    }

    return [sol1, sol2];
};
