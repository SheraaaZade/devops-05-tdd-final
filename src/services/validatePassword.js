module.exports = function (password) {
    const validLength = password.length >= 8;
    const containsLetter = /[a-z]/g.test(password);

    return validLength && containsLetter;
};
