function maxVowels(s: string, k: number): number {
    const vowels = 'aeiou';
    let count = 0;

    for (let r = 0; r < k && r < s.length; r++) {
        if (vowels.includes(s[r])) {
            count++;
        }
    }

    let max = count;

    for (let r = k; r < s.length; r++) {
        if (vowels.includes(s[r])) {
            count++;
        }
        if (vowels.includes(s[r - k])) {
            count--;
        }
        max = Math.max(count, max);
    }

    return max;
};
