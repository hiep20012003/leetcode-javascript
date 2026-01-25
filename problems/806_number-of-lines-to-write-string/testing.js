import { BaseTest } from "../../core/testing.js";

export class NumberOfLinesToWriteStringTest extends BaseTest {
    initTestCase() {
        return [
            {
                input: [
                    [
                        10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
                        10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
                    ],
                    "abcdefghijklmnopqrstuvwxyz",
                ],
                expected: [3, 60],
            },
            {
                input: [
                    [
                        4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
                        10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
                    ],
                    "bbbcccdddaaa",
                ],
                expected: [2, 4],
            },
        ];
    }
}
