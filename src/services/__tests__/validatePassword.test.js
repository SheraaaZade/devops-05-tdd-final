// at least 8 char
// at least a letter
// at least a number

const validatePassword = require("../validatePassword");

describe("validatePassword test suite", () => {
    it("should return false as an empty String is provided", () => {
        expect(validatePassword("")).toBe(false);
    });
});
