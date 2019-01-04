function reduce(arr, fn, initial) {

return (function reduceOnce(index, prev) {
	if (index >= arr.length) {
		return prev;
	}
	return reduceOnce(index + 1, fn(prev, arr[index], index, arr));
	}(0, initial));
}

module.exports = reduce;