export class BaseTest {
    constructor(solution) {
        this.solution = solution;
        this.testCases = this.initTestCase();
    }

    initTestCase() {
        throw new Error("Need implement in child class!");
    }

    compare(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }

    runTest() {
        if (!this.solution || !this.testCases)
            throw new Error("Dont't have solution or test cases!");

        const results = [];

        try {
            this.testCases.forEach((test, index) => {
                const result = {
                    input: test.input,
                    expected: test.expected,
                };
                const output = this.solution.solve(...test.input);
                result["output"] = output;

                if (this.compare(output, test.expected)) {
                    result["message"] = `Test case ${index + 1}: Passed`;
                } else {
                    result["message"] = `Test case ${index + 1}: Failed`;
                }

                results.push(result);
            });

            return results;
        } catch (err) {
            throw err;
        }
    }
}
