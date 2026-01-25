import {
    DegreeOfAnArraySolution,
    DegreeOfAnArrayOneLoopSolution,
} from "./problems/679_degree-of-an-array/solution.js";
import { DegreeOfAnArrayTest } from "./problems/679_degree-of-an-array/testing.js";

const testing = new DegreeOfAnArrayTest(new DegreeOfAnArrayOneLoopSolution());

const result = testing.runTest();
console.table(result);
