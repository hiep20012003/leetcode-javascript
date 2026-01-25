import { BaseTest } from "../../core/testing.js";

export class DegreeOfAnArrayTest extends BaseTest {
    initTestCase() {
        return [
            {
                input: [[3, 2, 3]],
                expected: 3,
            },
            {
                input: [[2, 2, 1, 1, 1, 2, 2]],
                expected: 7,
            },
            {
                input: [[1, 2, 2, 3, 1]],
                expected: 2,
            },
            {
                input: [[1]],
                expected: 1,
            },
            {
                input: [[2, 1, 1, 2, 1, 3, 3, 3, 1, 3, 1, 3, 2]],
                expected: 7,
            },
        ];
    }
}
