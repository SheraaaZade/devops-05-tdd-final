module.exports = function (password) {
    if (password.length >= 8 && /[a-z]/g.test(password)) {
        return true;
    }
    return false;
};
