import { MajorityElementSolution } from "./problems/problem-169_majority-element/solution.js";
import { MajorityElementTest } from "./problems/problem-169_majority-element/testing.js";

const testing = new MajorityElementTest(new MajorityElementSolution());

const result = testing.runTest();
console.table(result);
