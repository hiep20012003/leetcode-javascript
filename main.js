import { NumberOfLinesToWriteStringSolution } from "./problems/problem-806_number-of-lines-to-write-string/solution.js";
import { NumberOfLinesToWriteStringTest } from "./problems/problem-806_number-of-lines-to-write-string/testing.js";

const testing = new NumberOfLinesToWriteStringTest(
    new NumberOfLinesToWriteStringSolution(),
);

const result = testing.runTest();
console.table(result);
