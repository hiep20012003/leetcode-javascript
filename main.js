import { ValidParenthesesSolution } from "./problems/20_valid-parentheses/solution.js";
import { ValidParenthesesTest } from "./problems/20_valid-parentheses/testing.js";

const testing = new ValidParenthesesTest(new ValidParenthesesSolution());

const result = testing.runTest();
console.table(result);
