//Задача 2

function sleep(milliseconds) {
	let e = new Date().getTime() + milliseconds;
	while (new Date().getTime() <= e) {}
}

function sum(...args) {
	// Замедление на половину секунды.
	//sleep(100); // Можно использовать другое значение замедления.
	return args.reduce((sum, arg) => {
    return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
	return (arr1.every((number, index) => number === arr2[index])) && (arr1.length === arr2.length);
}

function memorize(fn, limit) {
	const memory = [];
	return function(...args) { 
		const appropriate = memory.find(mem => compareArrays(mem.args, args));
		if (appropriate) {
           return appropriate.result;
		} else {
			result = fn(...args);
			memory.push({args: args, result: result});
			if (memory.length > limit) {
				memory.unshift();
			}
			return result;
		}
	}
}

function testCase(testFunction, time) {
	let array = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
    console.time(time);
    for (let i=0; i<=100; i++ ) {
    	array.forEach(item => testFunction(...item));
    }
    console.timeEnd(time);
}


console.log(testCase(sum, `time1`)); 	 		
//time1: 51006.801025390625 ms
//без замедления time1: 0.36181640625 ms

console.log(testCase(memorize, `time2`)); 		
// time2: 0.14599609375 ms

// memorize быстрее :)
// без замедления тоже быстрее
