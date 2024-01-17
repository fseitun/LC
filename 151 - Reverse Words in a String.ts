function reverseWords(s: string): string {
    s = cleanSpaces(s);
    return s.split(' ').reverse().join(' ');
};

function cleanSpaces(s: string): string {
    const a = s.split('');

    for (let i = 0; i < a.length; i++) {
        if (a[i] === ' ' && a[i + 1] === ' ') {
            a.splice(i, 1);
            i--;
        }
    }

    if (a[0] === ' ') {
        a.splice(0, 1);
    }

    if (a[a.length - 1] === ' ') {
        a.splice(a.length - 1, 1);
    }

    return a.join('');
}
