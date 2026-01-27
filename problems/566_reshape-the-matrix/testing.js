import { BaseTest } from "../../core/testing.js";

export class ReshapeTheMatrixTest extends BaseTest {
    initTestCase() {
        return [
            {
                input: [
                    [
                        [1, 2],
                        [3, 4],
                    ],
                    1,
                    4,
                ],
                expected: [[1, 2, 3, 4]],
            },
            {
                input: [
                    [
                        [1, 2],
                        [3, 4],
                    ],
                    2,
                    4,
                ],
                expected: [
                    [1, 2],
                    [3, 4],
                ],
            },
            {
                input: [
                    [
                        [1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9],
                    ],
                    9,
                    1,
                ],
                expected: [[1], [2], [3], [4], [5], [6], [7], [8], [9]],
            },
        ];
    }
}
