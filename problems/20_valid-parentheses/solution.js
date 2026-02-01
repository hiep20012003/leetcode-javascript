import { BaseSolution } from "../../core/solution.js";

export class ValidParenthesesSolution extends BaseSolution {
    solve(s) {
        const parentheses = {
            ")": "(",
            "]": "[",
            "}": "{",
        };

        const open = Object.values(parentheses);

        const stack = [];

        for (const char of s) {
            if (open.includes(char)) {
                stack.push(char);
            } else {
                if (stack.length === 0 || stack.pop() !== parentheses[char])
                    return false;
            }
        }

        return stack.length === 0;
    }
}
