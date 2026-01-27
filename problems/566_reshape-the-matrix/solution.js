import { BaseSolution } from "../../core/solution.js";

export class ReshapeTheMatrixSolution extends BaseSolution {
    solve(mat, r, c) {
        const m = mat.length;
        const n = mat[0].length;

        if (m * n !== r * c) {
            return mat;
        }

        let newMat = new Array(r);
        for (let i = 0; i < newMat.length; i++) {
            newMat[i] = new Array(c).fill(undefined);
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                const indexInOneRow = i * n + j;
                const newRowIndex = Number.parseInt(indexInOneRow / c);
                const newColIndex = indexInOneRow % c;
                newMat[newRowIndex][newColIndex] = mat[i][j];
            }
        }

        return newMat;
    }
}
