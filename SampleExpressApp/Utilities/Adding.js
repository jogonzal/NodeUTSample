// Constructor
function Adding() {
    // always initialize all instance properties
    this.author = "Jorge";
}
// class methods
Adding.prototype.add = function (x, y) {
	return x + y;
};
// export the class
module.exports = Adding;