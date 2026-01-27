import { ReshapeTheMatrixSolution } from "./problems/566_reshape-the-matrix/solution.js";
import { ReshapeTheMatrixTest } from "./problems/566_reshape-the-matrix/testing.js";

const testing = new ReshapeTheMatrixTest(new ReshapeTheMatrixSolution());

const result = testing.runTest();
console.table(result);
