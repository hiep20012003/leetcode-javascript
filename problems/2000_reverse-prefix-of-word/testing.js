import { BaseTest } from "../../core/testing.js";

export class ReversePrefixOfWordTest extends BaseTest {
    initTestCase() {
        return [
            {
                input: ["abcd", "c"],
                expected: "cbad",
            },
            {
                input: ["nguyendunghiep", "d"],
                expected: "dneyugnunghiep",
            },
            {
                input: ["abcdefg", "h"],
                expected: "abcdefg",
            },
        ];
    }
}
