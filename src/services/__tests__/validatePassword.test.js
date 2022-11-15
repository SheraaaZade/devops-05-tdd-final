// at least 8 char
// at least a letter
// at least a number

const validatePassword = require("../validatePassword");

describe("validatePassword test suite", () => {
    it("should return false as an empty String is provided", () => {
        expect(validatePassword("")).toBe(false);
    });

    it('should return true given a password 8 char or longer, a letter and a number', () =>{
        expect(validatePassword("012345678test")).toBe(true);
    });

    it('should return true given a password 8 char or longer, without letter', () =>{
        expect(validatePassword("01234243")).toBe(false);
    });
});
