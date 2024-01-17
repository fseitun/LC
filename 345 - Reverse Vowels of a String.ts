function reverseVowels(s: string): string {
    if (s.length <= 1) return s

    const a = s.split('');

    const vowels = new Set('aeiouAEIOU'.split(''));

    let l = 0;
    let r = a.length - 1;

    while (l < r) {
        while (!vowels.has(a[l])) {
            l++;
            if (l >= r) break;
        }

        while (!vowels.has(a[r])) {
            r--;
            if (l >= r) break;
        }

        if (l < r) {
            const aux = a[l];
            a[l] = a[r];
            a[r] = aux;
            l++;
            r--;
        }
    }

    return a.join('');
}
