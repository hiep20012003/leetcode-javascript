// BaseTest class that can be extended to implement specific test cases for different solutions
export class BaseTest {
    /**
     * Constructor initializes the test class with the solution to be tested.
     * @param {Object} solution - The solution object that contains the method to solve the problem.
     */
    constructor(solution) {
        this.solution = solution; // The solution object, such as the problem-solving class (e.g., `NumberOfLinesToWriteStringSolution`)
        this.testCases = this.initTestCase(); // Initialize test cases (must be defined in a subclass)
    }

    /**
     * Abstract method that should be implemented in the child class to initialize test cases.
     * This method should return an array of test cases.
     * Throws an error if not implemented.
     */
    initTestCase() {
        throw new Error("Need implement in child class!"); // This method must be overridden in the child class
    }

    /**
     * Compares two values by converting them to JSON strings and checking if they're equal.
     * @param {any} a - The first value to compare.
     * @param {any} b - The second value to compare.
     * @returns {boolean} - Returns true if the values are equal, false otherwise.
     */
    compare(a, b) {
        return JSON.stringify(a) === JSON.stringify(b); // Converts both values to JSON strings for deep comparison
    }

    /**
     * Runs all the test cases, compares the outputs with the expected results, and returns the results.
     * @returns {Array} - An array of result objects containing input, expected output, actual output, and a message.
     */
    runTest() {
        if (!this.solution || !this.testCases)
            throw new Error("Don't have solution or test cases!"); // Ensure both the solution and test cases are provided

        const results = []; // Array to store the results of each test case

        try {
            // Iterate over each test case
            this.testCases.forEach((test, index) => {
                const result = {
                    input: test.input, // The input for the test case
                    expected: test.expected, // The expected output
                };
                // Solve the problem using the solution's solve method
                const output = this.solution.solve(...test.input);
                result["output"] = output; // Store the output from the solution

                // Check if the output matches the expected result
                if (this.compare(output, test.expected)) {
                    result["message"] = `Test case ${index + 1}: Passed`; // Test passed message
                } else {
                    result["message"] = `Test case ${index + 1}: Failed`; // Test failed message
                }

                results.push(result); // Push the result object to the results array
            });

            return results; // Return the array of test results
        } catch (err) {
            throw err; // If any error occurs, rethrow it
        }
    }
}
