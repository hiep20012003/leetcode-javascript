import { BaseTest } from "../../core/testing.js";

export class ValidParenthesesTest extends BaseTest {
    initTestCase() {
        return [
            {
                input: ["()"],
                expected: true,
            },
            {
                input: ["([)]"],
                expected: false,
            },
            {
                input: ["([])"],
                expected: true,
            },
        ];
    }
}
