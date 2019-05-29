function comp(a, b) {
	if(a.length !== b.length) {
		return false;
	}
	sortA = sortArr(a);
	sortB = sortArr(b);
	for (var i = 0; i<sortA.length; i++) {
		if(sortA[i] * sortA[i] !== sortB[i]){
			return false;
		}
	}
	return true;
}
function sortArr(arr) {
	return arr.sort(function(a,b){
		return a-b;
	}
}