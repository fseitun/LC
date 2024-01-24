type M = Map<string, number>;

function equalPairs(grid: number[][]) {
    const rows: M = new Map();
    const cols: M = new Map();

    for (let i = 0; i < grid.length; i++) {
        const stringifiedRow = 'x' + grid[i].join('x') + 'x';
        rows.set(stringifiedRow, 1 + (rows.get(stringifiedRow)! || 0));
        let stringifiedCol = 'x';
        for (let j = 0; j < grid.length; j++) {
            stringifiedCol += grid[j][i] + 'x'
        }
        cols.set(stringifiedCol, 1 + (cols.get(stringifiedCol)! || 0));
    }

    let sum = 0;
    for (const [string, stringFreqInRows] of rows) {
        const stringFreqInCols = cols.get(string)
        if (stringFreqInCols) {
            sum += stringFreqInRows * stringFreqInCols;
        }
    }
    return sum;
}
