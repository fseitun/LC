function compress(chars: string[]): number {
    let rPointer = 0;
    let wPointer = 0;
    let count = 1;

    while (rPointer <= chars.length) {
        if (chars[rPointer - 1] !== chars[rPointer]) {
            console.log('--- new char ---');
            if (count > 1) {
                console.log('writing count');
                const arrayedCount = String(count).split('');
                arrayedCount.forEach(digit => {
                    chars[wPointer] = digit;
                    console.log('advancing wPointer');
                    wPointer++;
                });
                console.log(chars.slice(0, wPointer))
                console.log('resetting count');
                count = 1;
                console.log(count);
            }
            if (chars[rPointer] !== undefined) {
                console.log('writing char');
                chars[wPointer] = chars[rPointer];
                console.log('advancing wPointer');
                wPointer++;
                console.log(chars.slice(0, wPointer))
            }
        } else if (chars[rPointer - 1] === chars[rPointer]) {
            console.log('--- same char ---');
            console.log('adding 1 to count');
            count++;
            console.log(count);
        }
        console.log('advancing rPointer');
        rPointer++;
    }

    return wPointer;
};
