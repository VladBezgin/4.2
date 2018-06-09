






function getFriendlyNumbers(start, end) {
	endPlus = end + 1;
    if (start < end && start > 0 && (start ^ 0) === start && (end ^ 0) === end) {
        for(var k = start; k < endPlus; k++) {
        var arr1 = [];
        var sum = 0;
        var arr2 = [];
        var sum2 = 0;
        for (var i = 1; i < start; i++) {
            if (start % i == 0) {
                arr1.push(i);
            }
        }
        for (var s = 0; s < arr1.length; s++) {
            sum += arr1[s];
        }
        for (var m = 1; m < sum; m++){
        	if (sum %  m == 0) {
        		arr2.push(i);
        	}
        }
        for (var f = 0; f < arr2.length; f++) {
            sum2 += arr2[f];
        }
        if (sum == sum2 &&  start < sum) {
        	 console.log(start + ' , ' + sum);
        }
    }
    } else {
        console.log('false');
    }
}