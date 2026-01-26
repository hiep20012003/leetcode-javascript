import { BaseSolution } from "../../core/solution.js";

export class ReverseStringIISolution extends BaseSolution {
    reverse(characters, start, end) {
        while (start < end) {
            [characters[start], characters[end]] = [
                characters[end],
                characters[start],
            ];
            start++;
            end--;
        }
    }

    solve(s, k) {
        const characters = s.split("");
        for (let i = 0; i < characters.length; i += 2 * k) {
            if (i + k - 1 >= characters.length - 1) {
                this.reverse(characters, i, characters.length - 1);
            } else {
                this.reverse(characters, i, i + k - 1);
            }
        }

        return characters.join("");
    }
}
