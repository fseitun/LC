function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        let localArea = area(right - left, Math.min(height[right], height[left]));
        max = Math.max(max, localArea);
        
        if (height[right] < height[left]) {
            right--;
        } else if (height[right] >= height[left]) {
            left++;
        }
    }

    return max;
};

function area(base: number, height: number) {
    return base * height;
}
