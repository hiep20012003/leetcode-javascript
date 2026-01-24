import { BaseSolution } from "../../core/solution.js";

/*
Write string s line by line with a max width of 100 pixels per line.
Each character has a width given by widths['a'..'z'].

Start from the first character of s, keep adding characters to the
current line until adding the next one would exceed 100 pixels.
Then move to a new line and continue.

Return:
- result[0]: total number of lines used
- result[1]: width (in pixels) of the last line
*/

export class NumberOfLinesToWriteStringSolution extends BaseSolution {
    solve(widths, s) {
        const maxPixels = 100;
        let numberOfLines = 1,
            pixelsOfLine = 0;

        for (const character of s) {
            const index = character.codePointAt(0) - "a".codePointAt(0);

            const pixels = widths[index];
            pixelsOfLine += pixels;

            if (pixelsOfLine > maxPixels) {
                numberOfLines += 1;
                pixelsOfLine = pixels;
            }
        }

        return [numberOfLines, pixelsOfLine];
    }
}
