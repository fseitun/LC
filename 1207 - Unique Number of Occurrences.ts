function uniqueOccurrences(arr: number[]): boolean {
    const map: Map<number, number> = new Map();

    for (const key of arr) {
        map.set(key, (map.get(key) || 0) + 1);
    }

    const frequencies = Array.from(map.values());
    const set = new Set(frequencies);

    return set.size === frequencies.length;
};

// Same solution but with Object

// function uniqueOccurrences(arr: number[]): boolean {
//     const map: { [k: number]: number } = {};

//     for (const key of arr) {
//         map[key] = (map[key] || 0) + 1
//     }

//     const frequencies = Object.values(map);
//     const set = new Set(frequencies);

//     return set.size === frequencies.length;
// };
