import { BaseTest } from "../../core/testing.js";

export class MajorityElementTest extends BaseTest {
    initTestCase() {
        return [
            {
                input: [[3, 2, 3]],
                expected: 3,
            },
            {
                input: [[2, 2, 1, 1, 1, 2, 2]],
                expected: 2,
            },
        ];
    }
}
