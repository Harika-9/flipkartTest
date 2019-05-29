function maxSumSubarray(arr) {
	var resArr = [];
	for(var i = 0; i<arr.length -1; i++) {
		var j = i;
		var sum = 0;
		while(j<arr.length) {
			sum+= arr[j];
			resArr.push(sum);
			j++;
		}
	}
	if(!resArr.length) {
		return 0;
	}
	return resArr.reduce(function(max, cur) {
		max = max > cur ? max: cur;
		return max;
	}
}