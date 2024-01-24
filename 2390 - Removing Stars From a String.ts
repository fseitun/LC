function removeStars(s: string) {
    const res: string[] = [];
    let w = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            res.pop();
            w--;
        } else {
            res[w] = s[i];
            w++;
        }
    }
    return res.join('');
};
