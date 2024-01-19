function isSubsequence(s: string, t: string): boolean {
    if (s === '') {
        return true;
    }

    if (t === '') {
        return false;
    }

    let sPointer = 0;
    let tPointer = 0;

    while (sPointer < s.length) {
        while (tPointer < t.length && s[sPointer] !== t[tPointer]) {
            tPointer++;
            if (t.length - tPointer < s.length - sPointer) {
                return false;
            }
        }
        sPointer++;
        tPointer++;
    }

    return true;
};
