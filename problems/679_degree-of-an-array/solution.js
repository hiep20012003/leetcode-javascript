import { BaseSolution } from "../../core/solution.js";

export class DegreeOfAnArraySolution extends BaseSolution {
    solve(nums) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                const value = map.get(nums[i]);
                value[0] += 1;
                value[2] = i;
            } else {
                map.set(nums[i], [1, i, i]);
            }
        }

        let maxFreq = -1,
            minLength = Number.MAX_SAFE_INTEGER;

        for (const [key, value] of map.entries()) {
            if (value[0] >= maxFreq) {
                const currentLength = value[2] - value[1] + 1;
                if (value[0] > maxFreq || currentLength < minLength) {
                    minLength = currentLength;
                    maxFreq = value[0];
                }
            }
        }

        return minLength;
    }
}

export class DegreeOfAnArrayOneLoopSolution extends BaseSolution {
    solve(nums) {
        const map = new Map();
        let maxFreq = 0,
            minLength = 0;

        for (let i = 0; i < nums.length; i++) {
            if (!map.has(nums[i])) {
                map.set(nums[i], [1, i]);
                if (maxFreq === 0) maxFreq = 1;
                if (minLength === 0) minLength = 1;
            } else {
                const value = map.get(nums[i]);
                value[0] += 1;
                if (maxFreq <= value[0]) {
                    const currentLength = i - value[1] + 1;
                    minLength =
                        value[0] > maxFreq
                            ? currentLength
                            : Math.min(minLength, currentLength);
                    maxFreq = value[0];
                }
            }
        }

        return minLength;
    }
}
