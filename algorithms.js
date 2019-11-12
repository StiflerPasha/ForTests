/******************************************
 *                                        *
 *              АЛГОРИТМЫ               *
 *                                        *
 ******************************************/
//QUICK SORT
function qsort(arr) {
	if (arr.length < 2) {
		return arr;
	} else {
		const pivotPosition = Math.floor(Math.random() * arr.length);
		const pivot = arr[pivotPosition];
		
		let less = [];
		let greater = [];
		
		for (let i = 0; i < arr.length; i++) {
			const isPivot = i === pivotPosition;
			if (arr[i] <= pivot && !isPivot) {
				less.push(arr[i]);
			} else if (arr[i] > pivot) {
				greater.push(arr[i]);
			}
		}
		return [...qsort(less), pivot, ...qsort(greater)];
	}
}

//MERGE SORT
function merge(arrays, sortFunc) {
	let result = [];
	let next;
	// Add an 'index' property to each array to keep track of where we are in it.
	arrays.forEach(array => (array.index = 0));
	
	// Find the next array to pull from.
	// Just sort the list of arrays by their current value and take the first one.
	function findNext() {
		return arrays
		 .filter(array => array.index < array.length)
		 .sort((a, b) => sortFunc(a[a.index], b[b.index]))[0];
	}
	
	// This is the heart of the algorithm.
	while ((next = findNext())) result.push(next[next.index++]);
	
	return result;
}

//GREATER COMMON DEVIDER(gcd)
function gcd(a, b) {
	return b ? gcd(b, a % b) : a;
}

//FIBONACCI LOOP
function fibonacci(num) {
	let a = 1;
	let b = 1;
	
	for (let i = 3; i <= num; i++) {
		let c = a + b;
		a = b;
		b = c;
	}
	return b;
}

//FIBONACCI RECURSION
function fibonacciRec(num) {
	if (num < 3) return 1;
	return fibonacciRec(num - 1) + fibonacciRec(num - 2);
}

//POWER
function binpow(a, n) {
	if (n == 0) return 1;
	if (n % 2 == 1) return binpow(a, n - 1) * a;
	else {
		let b = binpow(a, n / 2);
		return b * b;
	}
}

//FACTORIAL RECURSION
function factorial(n) {
	return n != 1 ? n * factorial(n - 1) : 1;
}

//SEARCH in GRAPH
const graph = {
	you: {
		friends: ['alice', 'bob', 'claire'],
		sale: [],
	},
	bob: {
		friends: ['anuj', 'peggy'],
		sale: [],
	},
	alice: {
		friends: ['peggy'],
		sale: [],
	},
	claire: {
		friends: ['tom', 'johny'],
		sale: [],
	},
	anuj: {
		friends: [],
		sale: [],
	},
	peggy: {
		friends: [],
		sale: ['car'],
	},
	tom: {
		friends: ['peggy', 'you'],
		sale: ['pen', 'moto', 'mango'],
	},
	johny: {
		friends: [],
		sale: ['mango'],
	},
};

function search(graph, name) {
	let searchQueue = graph[name].friends;
	let searched = [name];
	
	function personIsSeller(name) {
		return graph[name].sale.includes('mango');
	}
	
	while (searchQueue) {
		let person = searchQueue.shift();
		if (!searchQueue.includes(person)) {
			if (personIsSeller(person)) {
				console.log(`${ person } is a mango seller`);
				return true;
			} else {
				searchQueue.push(...graph[person].friends);
				searched.push(person);
			}
		}
	}
	return false;
}
