function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if (n === 0) return true;

    let firstPlot = flowerbed[0];
    if (firstPlot === 0 && (flowerbed.length === 1 || flowerbed[1] === 0)) {
        const flowersLeft = plantFlower(0);
        if (!flowersLeft) return true;
    }

    for (let i = 1; i < flowerbed.length - 1; i++) {
        let currentPlot = flowerbed[i];
        const previousPlot = flowerbed[i - 1];
        const nextPlot = flowerbed[i + 1];

        if (currentPlot === 0 && previousPlot === 0 && nextPlot === 0) {
            const flowersLeft = plantFlower(i);
            if (!flowersLeft) return true;
        }
    }

    let lastPlot = flowerbed[flowerbed.length - 1];
    if (lastPlot === 0 && flowerbed[flowerbed.length - 2] === 0) {
        const flowersLeft = plantFlower(flowerbed.length - 1);
        if (!flowersLeft) return true;
    }

    if (n > 0) {
        return false;
    }
    else return true; // Unreachable code but just for clarity.

    function plantFlower(position: number) {
        flowerbed[position] = 1;
        n--;
        // console.log(`position: ${position}, flowerbed: ${flowerbed}, n: ${n}`)
        return n > 0;
    }
};
