import { BaseSolution } from "../../core/solution.js";

export class ReversePrefixOfWordSolution extends BaseSolution {
    solve(word, ch) {
        function reverse(chars, start, end) {
            while (start < end) {
                [chars[start], chars[end]] = [chars[end], chars[start]];
                start++;
                end--;
            }
        }

        const characters = word.split("");
        for (let i = 0; i < characters.length; i++) {
            if (characters[i] === ch) {
                reverse(characters, 0, i);
                return characters.join("");
            }
        }

        return characters.join("");
    }
}
