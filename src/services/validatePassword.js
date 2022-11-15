module.exports = function (password) {
    if(password.length >= 8){
        return true;
    }
    return false;
};
