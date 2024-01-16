function gcdOfStrings(str1: string, str2: string): string {
    if (!gcdExists(str1, str2)) {
        return ''
    };

    const length1 = str1.length;
    const length2 = str2.length;

    return str1.slice(0, gcd(length1, length2));
};

function gcdExists(a: string, b: string): boolean {
    return a + b === b + a;
}

function gcd(n1: number, n2: number) {
    const big = Math.max(n1, n2);
    const small = Math.min(n1, n2);

    if (small === 0) return big;
    return gcd(small, big % small)
}
