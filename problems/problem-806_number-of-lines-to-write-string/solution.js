import { BaseSolution } from "../../core/solution.js";

export class NumberOfLinesToWriteStringSolution extends BaseSolution {
    /**
     * Solves the problem of determining the number of lines and width of the last line
     * needed to write a string within a maximum width constraint.
     *
     * @param {number[]} widths - An array of integers where each element represents
     * the width of a letter ('a' to 'z').
     * @param {string} s - The string to be written, consisting of lowercase letters.
     * @returns {number[]} - An array where the first element is the number of lines
     * used, and the second is the width of the last line.
     */
    solve(widths, s) {
        const maxPixels = 100;
        let numberOfLines = 1,
            pixelsOfLine = 0;

        // Loop through each character in the string 's'
        for (const character of s) {
            // Find the index of the character by calculating its position in the alphabet
            const index = character.codePointAt(0) - "a".codePointAt(0);

            // Get the width of the current character from the 'widths' array
            const pixels = widths[index];

            // Add the width of the character to the current line's total pixel count
            pixelsOfLine += pixels;

            // If adding the current character would exceed the max pixel width, move to the next line
            if (pixelsOfLine > maxPixels) {
                numberOfLines += 1; // Increment the number of lines
                pixelsOfLine = pixels; // Start a new line with the current character
            }
        }

        // Return the total number of lines used and the width of the last line
        return [numberOfLines, pixelsOfLine];
    }
}
