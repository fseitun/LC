type M = Map<string, number>;

function closeStrings(w1: string, w2: string): boolean {
    const m1: M = frequencyMap(w1);
    const m2: M = frequencyMap(w2);

    const v1 = [...m1.values()].sort((a, b) => a - b);
    const v2 = [...m2.values()].sort((a, b) => a - b);

    const areKeysEqual = compareMapKeys(m1, m2);
    const areValuesEqual = compareArrays(v1, v2);

    return areKeysEqual && areValuesEqual;
};

function frequencyMap(a: string): M {
    const m: M = new Map();

    for (const v of a) {
        m.set(v, 1 + (m.get(v) || 0))
    }

    return m;
}

function compareMapKeys(m1: M, m2: M) {
    if (m1.size !== m2.size) return false;

    for (const k of m1.keys()) {
        if (!m2.has(k)) {
            return false;
        }
    }
    return true;
}

function compareArrays(a1: number[], a2: number[]) {
    if (a1.length !== a2.length) return false;
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) {
            return false
        }
    }
    return true;
}
