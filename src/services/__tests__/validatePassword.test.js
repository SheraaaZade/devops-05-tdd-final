// at least 8 char
// at least a upper case char
// at least a number

const validatePassword = require("../validatePassword");

describe("validatePassword test suites", () => {
    it("should return false as an empty string is provided", () => {
        expect(validatePassword("")).toBe(false);
    });
});
