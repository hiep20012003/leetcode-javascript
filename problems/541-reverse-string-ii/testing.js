import { BaseTest } from "../../core/testing.js";

export class ReverseStringIITest extends BaseTest {
    initTestCase() {
        return [
            {
                input: ["abcdefg", 2],
                expected: "bacdfeg",
            },
            {
                input: ["abcd", 2],
                expected: "bacd",
            },
            {
                input: ["nguyendunghiep", 3],
                expected: "ugnyennudghipe",
            },
        ];
    }
}
