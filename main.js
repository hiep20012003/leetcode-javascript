import { ReverseStringIISolution } from "./problems/541-reverse-string-ii/solution.js";
import { ReverseStringIITest } from "./problems/541-reverse-string-ii/testing.js";

const testing = new ReverseStringIITest(new ReverseStringIISolution());

const result = testing.runTest();
console.table(result);
