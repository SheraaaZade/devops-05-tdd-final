const signin = require("../signin");

describe("Signin Services Tests", () => {
    it("should failed as credentials are not in the fake database", () => {
        var result = signin("test", "test");
        expect(result).toEqual({ error: "Invalid credentials" });
    });

    it("should succeed as credentials are in the fake database", () => {
        var result = signin("admin", "admin");
        expect(result).toEqual("Success !!!");
    });

    it("should failed as credentials are not provided ", () => {
        var result = signin();
        expect(result).toEqual({ error: "Empty credentials" });
    });
});
