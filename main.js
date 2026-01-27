import { ReversePrefixOfWordTest } from "./problems/2000-reverse-prefix-of-word/testing.js";
import { ReversePrefixOfWordSolution } from "./problems/2000-reverse-prefix-of-word/solution.js";

const testing = new ReversePrefixOfWordTest(new ReversePrefixOfWordSolution());

const result = testing.runTest();
console.table(result);
