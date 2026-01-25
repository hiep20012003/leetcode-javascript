import { BaseSolution } from "../../core/solution.js";

// Boyer-Moore Majority Voting Algorithm
export class MajorityElementSolution extends BaseSolution {
    /**
     * Given an array nums of size n, return the majority element.
     *
     * The majority element is the element that appears more than ⌊n / 2⌋ times.
     * You may assume that the majority element always exists in the array.
     *
     * Examples:
     *   Input:  nums = [3, 2, 3]
     *   Output: 3
     *
     * @param {number[]} nums
     * @returns {number} majority element
     */
    solve(nums) {
        let vote = 0;
        let candidate;

        for (const num of nums) {
            if (vote === 0) {
                candidate = num;
                vote = 1;
            } else {
                vote = candidate === num ? vote + 1 : vote - 1;
            }
        }

        return candidate;
    }
}
