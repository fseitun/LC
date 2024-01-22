function largestAltitude(gain: number[]): number {
    const altitudes = [0];

    for (let i = 0; i < gain.length; i++) {
        altitudes[i + 1] = gain[i] + altitudes[i]
    }

    return Math.max(...altitudes);
};
