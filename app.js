var fooArr = [];
var barArr = [];
var fooBarArr = [];

const foobar = (x) => {
  for (let a = 1; a <= x; a++) {
    if (a % 2 == 0 && a % 5 == 0) {
      fooBarArr.push(a);
    } else if (a % 2 == 0) {
      fooArr.push(a);
    } else if (a % 5 == 0) {
      barArr.push(a);
    }
  }
};

foobar(5);
console.log('\n');
console.log('>>>>>>>>foobar(47)<<<<<<<<<');
console.log('\n');
console.log(('Foo (by 2):\t' + fooArr.length + '=>\t' + fooArr).length);
console.log('Bar (by 5):\t' + barArr.length + '=>\t' + barArr);
console.log('FooBar (2 & 5):\t' + fooBarArr.length + '=>\t' + fooBarArr);
var time = {
  year: 2345,
  month: 11,
  day: 10,
  hour: 11,
  minute: 12,
  second: 13,
  microsecond: 123456,
};

console.log(time); // (*)
time.microsecond++; // (**)

console.log(time);
time.microsecond++;

console.log(time);
time.microsecond++;

console.log(typeof (time[0]));
/*
var style = ["Джаз", "Блюз"];

style.push("Рок-н-Ролл");
style[style.length - 2] = "Классика";
console.log(style.shift());
style.unshift("Реп", "Регги");
console.log(style.join(", "));
*/
/*
var arr = [25, 11, 2, 3, 5, 67];

var arrLength = arr.map(function (item) {
	return item.length;
});

function reverseSort(a, b) {
	return a - b;
}
console.log(arr.sort(reverseSort).join(" <> "));
*/
/*
const anagram = (first, second) => {
	let firstArr = first.toLowerCase().split("").sort().join("");
	let secondArr = second.toLowerCase().split("").sort().join("");

	if (firstArr === secondArr) {
		console.log(true);
	} else {
		console.log(false);
	}
}

anagram("pasha", "ashap");
anagram("finder", "Friend");
anagram("hello", "bye");
*/
/*const students = [{
		name: "Nick",
		grade: {
			math: 10,
			bio: 6,
			physo: 8
		}
	},
	{
		name: "John",
		grade: 15
	},
	{
		name: "Julia",
		grade: 19
	},
	{
		name: "Nathalie",
		grade: 9
	},
];

const simpleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const aboveTenSum = students
	.map(student => student.grade) // сравниваем массив студентов с массивом их оценок
	.filter(grade => grade >= 10) // отбираем оценки выше 10
	.reduce((prev, next) => prev + next, 0); // суммируем каждую оценку выше 10
    print(aboveTenSum)

for (let i = 0; i < students.length; i++) {
	console.table(students[i])
}

console.table(simpleArray)*/
/*
class Repo {
	static getName() {
		return "Repo name is modern-js-cheatsheet"
	}

	static modifyName(word) {
		return `${this.getName()} > ${123 + 321} > ${word}`
	}
}

console.log(Repo.modifyName("changeIT"));
*/
/*
function getRandomNumber(start = 1, end = 10) {
	//works when both start,end are >=1 and end > start
	return parseInt(Math.random() * end) % (end - start + 1) + start;
}

var promiseTRRARNOSG = (promiseThatResolvesRandomlyAfterRandomNumnberOfSecondsGenerator = function () {
	return new Promise(function (resolve, reject) {
		let randomNumberOfSeconds = getRandomNumber(2, 10);
		setTimeout(function () {
			let randomiseResolving = getRandomNumber(1, 10);
			if (randomiseResolving > 5) {
				resolve({
					randomNumberOfSeconds: randomNumberOfSeconds,
					randomiseResolving: randomiseResolving
				});
			} else {
				reject({
					randomNumberOfSeconds: randomNumberOfSeconds,
					randomiseResolving: randomiseResolving
				});
			}
		}, randomNumberOfSeconds * 1000);
	});
});

const test = async (x) => {
	try {
		y = await somePromiseFunction(x);
		console.log(y);
	} catch (e) {
		console.error(e);
	}
}

test();*/
/*
function getSums(num) {
    let arrNums = Array.from(Array(num), (v, index) => ++index)

    let result = [];

    let totalSum = arrNums.reduce(function(sum, item) {
      result.push(sum);
      return sum + item;
    });
    result.push(totalSum);

    return result;
  }

  console.log(getSums(10));*/
/*const getSecondsInHour = hour => 3600* hour;
const getSecondsInDay = day => getSecondsInHour(24) * day;
const getSecondsInWeek = week => getSecondsInDay(7) * week;
const getSecondsInMonth = month => getSecondsInDay(31) * month;
const getSecondsInYear = year => getSecondsInMonth(12) * year;

var a = getSecondsInWeek(1);

console.log(a)*/
/*const randomArray = (length, max) =>
    [...new Array(length)].map(() => Math.floor(Math.random() * max));*/
/*
const randomArray = (length, max) =>
    Array.from(Array(length), () => Math.floor(Math.random() * max))

/*
let findIt = 1
let count = 0;
let a = randomArray(20, 10);

a.find((value, index) => {
    if (value === findIt) {
        ++count;
        console.log(`${count}. value: ${findIt} / index: ${index}`)
    }
});
console.log(a)
console.log(a.length)*!/

let arr = randomArray(10, 10);
console.log(arr)
arr.indexOf(5) !== -1 ? console.log("Yes") : console.log("No");*/
/*
const getDigitSum = num => {
    let arr = String(num).split("")
    return arr.reduce( (p,n) => Number(p) + Number(n))
}

for (i = 1; i < 2019; i++) {
    if (getDigitSum(i) == 13) console.log(i)
}*/
/*
const getDivisors = num => {
    let arr = [];
    for (i = 1; i <= num; i++) {
        if (num % i == 0) arr.push(i)
    }
    return arr
}

console.log(getDivisors(98))*/
/*let str = "Сделайте заглавным, первый символ каждого слова этой строки"
let arr = str.split(" ");
let result = arr.map(value => value[0].toUpperCase() + value.substring(1));

const inArray =(text, arr) => {
    return  (arr.find(value => value.toLowerCase() === text.toLowerCase()) !== undefined)
}

print(inArray("симво", arr))*/
/*
let str = 'var_text_hello';
let text = str.split("_");
let result = text[0];
for (i = 1; i < text.length; i++) {
    result += text[i][0].toUpperCase() + text[i].substring(1)
}
print(result)*/
/*
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getFirst = (array, n = 0) => {
    if (array == null) return false;
    if (n === 0) return array[0];
    return array.slice(0, n);
}

const getLast = (array, n) => {
    if (array == null) return false;
    if (n == null) return array[array.length - 1];
    return array.slice(-n);
}

print(getLast(array, 5))
print(getFirst(array, 2))*/
/*let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6];

let arr3 = arr1.map(value => {
    for (let i = 0; i < arr2.length; i++) {
        value += arr2[i]
    }
    return value
});

print(arr3);*/
/*function printMe(a,b,c){
    console.log(arguments[0]);
    //will print all passed parameters respectively as a, b, c
}
function printMeSpread(a, ...args){
    console.log(args);
    //Will only print from 2nd passed parameters onwards
}
printMe(1,2,3);// [1,2,3]
printMeSpread(1,2,3); //[2,3]*/
/* identic items
let arr1 = [3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8];
let arr2 = [15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9];

const countIdentic = (arr) => {
    let count = 0;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.includes(arr[i])) {
            count++;
            continue;
        }
        result.push(arr[i])
    } return count
};

print(countIdentic(arr2));*/
/*
let arr1 = [3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8];
let arr2 = [15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9];

const countIdentic = (arr) => {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            ++count;
        }
    } return count
};

print(countIdentic(arr2));*/
/* многомерный массив в один
let arr1 = [1, [2, [3, [4]]]];
let arr2 = [1, [2], [3, [[4]]], [5, 6]];

function expand(arr) {
    let result = arr.slice();
    for (let i = 0; i < result.length; i++) {
        result = result.reduce((a,b) => a.concat(b), []);
        print(result)
    }
    return result
}

print(expand(arr1));
print(expand(arr2));*/
/* обьеденить без дублирования
let array1 = [5, 2, 1, -10, 8];
let array2 = [5, 2, 1, -9, 3, 7];

const union = (array1, array2) => {
    //return Array.from(new Set(array1.concat(array2))).sort((a, b) => a - b);
    let count = 0;
    let len = array1.concat(array2).length;
    for (let i = 0; i < len; i++) {
        if (array1.includes(array2[i])) {
            count++;
            continue;
        }
        else if (array2[i] === undefined) {
            break
        }
        array1.push(array2[i])
    }
    return `${array1} - Repeats: ${count}`
};

print(union(array1, array2));*/
/* отличия в массиве
let arr1 = [1, 2, 'a'];
let arr2 = [1, 2, 3, 4, 'b'];

function arrayDiff(arr1, arr2) {
    let obj1 = {}, obj2 = {}, diff = [], key;
    for (let i = 0; i < arr1.length; i++) {
        obj1[arr1[i]] = true;
    }
    for (let i = 0; i < arr2.length; i++) {
        obj2[arr2[i]] = true;
    }
    for (key in obj1) {
        if (!(key in obj2)) {
            diff.push(key);
        }
    }
    for (key in obj2) {
        if (!(key in obj1)) {
            diff.push(key);
        }
    }
    return diff ;
}

print(arrayDiff(arr1, arr2));*/
/* sum and product of array
let arr = [ 1, 2 , 3 , 4 , 5 , 6 , 7, 8 ,9];

const getSumAndProduct = (arr) => {
    let sum = arr.reduce((a, b) => a + b);
    let product = arr.reduce((a, b) => a * b);
    return {
        sum,
        product
    }
};
let {sum, product} = getSumAndProduct(arr);
print("Сумма: "+sum + "\nПроизведение: " + product);*/
/* filter False
let array = [NaN, 0, 77, false, -17, '',undefined, 99, null];

const filterFalse = (arr) => {
    return arr.filter((v) => v);
};

print(filterFalse(array));*/
/* сортировка по свойству
let books = [
    { author: 'Хэленка', title: 'Улетела сказка', id: 15},
    { author: 'Коул Кресли', title: 'Восстание Аркан', id: 25},
    { author: 'Коул Кресли', title: 'Восстание Абкан', id: 17},
    { author: 'Райчел Мид', title: 'Золотая лилия', id: 11}
];

function compare(a,b)
{
    if (a.title < b.title)
        return -1;
    if (a.title > b.title)
        return 1;
    return 0;
}

print(books.sort(compare));
print('\n');
print(books.sort((a, b) => a.id - b.id));

for (let i = 0; i < books.length; i++) {
    print(books[i].title);
}*/
/* пары чисел, сумма которых равна заданному значению
let num = 5;
let arr = [1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18];

function findCouple(array, number) {
    let result = [];
    let obj = {};

    for (let i = 0; i < array.length; i++) {
        let str = array[i];
        obj[str] = true;
    }

    array = Object.keys(obj);

    let x = null,
        y = null;
    array.forEach(function (i, value) {
        if (number - value < number) {
            x = number - value;

            array.forEach(function (j, value2) {
                if (x === value2 && j > i) {
                    y = value;

                    result.push("Ваша пара чисел: " + y + " + " + x);
                }
            })
        }
    });
    return print(result);
}

findCouple(arr, num);*/
/* все значения данного свойства в массиве объектов
let books = [
    { author: 'Хэленка', title: 'Улетела сказка'},
    { author: 'Коул Кресли', title: 'Восстание Аркан'},
    { author: 'Райчел Мид', title: 'Золотая лилия'}
];

const propertyValue = (array, key) => {
    return array.map((v,i,a) => a[i][key]).toString()
};

print(propertyValue(books, 'author'));*/
/* общая стартовая подстрока в массиве строк
let arr1 = ['Капуста', 'Капитал'];
let arr2 = ['Репа', 'Редиска'];

const startingSubstring = (arr) => {

    let result = '';

    const str1 = arr[0];
    const str2 = arr[1];

    for (let i = 0; i < str1.length; i++) {
        while (str1[i] === str2[i]) {
            result += str1[i];
            break;
        }
    }
    return result;
};

let res1 = startingSubstring(arr1);
let res2 = startingSubstring(arr2);

print(res1);
print(res2);*/
/* удалить определенный элемент из массива
let arr = [3, 5, 7, 8, 5];

const removeItem = (arr, num) => {
    /!*let result = arr.slice();
    while (result.indexOf(num) !== -1) {
        result.splice(result.indexOf(num), 1);
    }
    return result;*!/

    return arr.filter(value => value !== num)

};

print(removeItem(arr, 3));*/
/* вернуть случайный элемент из массива
let arr = [24, 45, 22, 35, 43];

const randomElement = (arr) => {
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
};

print(randomElement(arr));*/
/* массив с заданным количеством элементов
const arrayFilled = (len, value) => {
    return Array(len).fill(value);
};

print(arrayFilled(5, 'e'));*/
/* переместить элемент массива из одной позиции в другую
let arr = [ 'a', 'b', 'c', 'd', 'e'];

const moveElement = (arr, from, to) => {
    let result = arr.slice();
    let moveEl = result.splice(from, 1);
    result.splice(to, 0, ...moveEl);
    return result;
};

print(arr);
print(moveElement(arr,3,1));*/
/* массив указанной длины + шаг
const generateNumbers = (start, step, len) => {
    let result = new Array(len);
    for (let i = 0; i < len; i++) {
        result[i] = start;
        start += step;
    }
    return result
};

print(generateNumbers(0, 2, 5));*/
/* массив, содержащий все целые числа между start и end
const generateRange = (start, end) => {
    let result = [];
    for (let i = 0; i < end; i++ ) {
        result.push(start);
        start++;
    }
    return result;
};

print(generateRange(0, 5));*/
/* массив длин строковых элементов
let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
let vegetablesLength = vegetables.map(value => value.length);

print(vegetables);
print(vegetablesLength);*/
/* массив сумм чисел
let numbers = [2, 3, 5, 7, 11, 13, 17];

const currentSums = (array) => {
    let step = `${array[0]}`;
    let steps = [step];
    let sums = [];

    array.reduce((acc, current, i) => {
        step += `+${current}`;
        steps.push(step);
        return sums[i] = acc + current;
    });
    return {
        sums,
        steps
    };
};

print(numbers);
print(currentSums(numbers).steps);
print(currentSums(numbers).sums);*/
/* массив из первых букв
let str = "Каждый охотник желает знать, где сидит фазан.";

let result = str.split(" ").map(v => v[0].toLowerCase());

print(result);*/
/* массив строк по три символа
let word = "JavaScript";

// функция обратного вызова
function getChars(value, index, str) {
// Возвращаем строку состоящую из предыдущего, текущего и следующего символа
    return str.substring(index - 1, index + 2);
}

// Применяем метод map к строке
let arr = Array.prototype.map.call(word, getChars);

print(arr);*/
/* получить массив цифр по убыванию
let numerics = [5, 7, 2, 9, 3, 1, 8];

print(numerics.sort((a, b) => b - a));*/
/* слияние массивов
let a = [1,2,3];
let b = [4,5,6];
let c = [7,8,9];

const getArr = (a, b, c) => {
    return  a.concat(b, c);

};

print(getArr(a, b, c).reverse().join(" ").split());*/
/* сумма четных положительных элементов массива
let arr = [11, 2, 55, 49, -32, -27, 28, -69, 36, 44];

/!*
print(arr
    .filter(value => value % 2 === 0 && value > 0)
    .reduce((a, b) => a + b));*!/

const getMax = (arr) => {
    let result = arr.filter(value => value % 2 === 0);
    return Math.max(...result)
};

print(getMax(arr));*/
/* массив от 0 до 10
let arr = Array.from(Array(10), (v,i) => ++i);
let arr2 = Array(10).fill().map((v, i) => ++i);
let arr3 = [...Array(10).keys()].map((v) => ++v);*/
/* Элементы массива, которые меньше среднего арифметического
let arr = Array.from(Array(10), (v,i) => ++i);

const lowerOfMidValue = (arr) => {
    return arr
        .filter(v => v < (arr.reduce((a, b) => a + b)) / arr.length);
};

print(lowerOfMidValue(arr));*/
/* Сумма модулей элементов массива, расположенных после первого отрицательного
let arr = [5, 3, -1, 8, 0, -6, 1];
let result = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        result = arr
            .slice(i+1)
            .reduce((a, b) => Math.abs(a) + Math.abs(b));
        break;
    }
}

print(result);*/
/* Номер минимального по модулю элемента массива
let arr = [10, -3, -5, 2, 5];

print(Math.min(...arr.map(value => Math.abs(value))));*/
/* Сумма цифр массива
let arr = [12, 104, 81, '11'];
let result = arr.join().split('');
let sum = 0;
for (let i = 0; i < result.length; i++) {
    if (isNaN(result[i])) {
        continue
    }
    sum += +result[i];
}

print(sum);*/
/* Найти сумму элементов между минимальным и максимальным элементами массива
let arr = [-9, 17, 3, -1, 8, 0, 9, -6, 1, -12];

let min = arr.indexOf(Math.min(...arr));
let max = arr.indexOf(Math.max(...arr));

if (min < max) {
    print(arr.slice(min + 1, max).reduce((a, b) => a + b), 0);
}

if (min > max) {
    print(arr.slice(max + 1, min).reduce((a, b) => a + b), 0);
}

print(arr);*/
/* Среднее арифметическое положительных элементов массива
let arr = [-9, 17, 3, -1, 8, 0, 9, -6, 1, -12, 11];
let posNums = arr.filter(a => a >= 0);
let sum = posNums.reduce((a, b) => a + b) / posNums.length;

print(sum);*/
/* Максимальный отрицательный элемент массива
let arr = [-9, 17, 3, -1, 8, 0, 9, -6, 1, -12, 11];

print(arr.sort((a, b) => a - b)[0]);*/
/* Найти наибольший элемент и его порядковый номер в массиве
let arr = [-9, 17, 3, -1, 8, 0, 9, -6, 19, -12, 11];

print(arr.indexOf(Math.max(...arr)));
print(arr[8]);*/
/* Вставка элемента в произвольное место массива
let arr = [-9, 17, 3, -1, 8, 0, 9, -6, 19, -12, 11];

const pushToPos = (elem, pos, arr) => {
    arr.splice(pos - 1, 0, elem);
    return arr
};

print(pushToPos('Riga', 2, arr));*/
/* рандомный массив
const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)

};
print(Array.from(new Set(Array.from(Array(20), () => getRndInteger(-5, 40)))));*/

/* Practices with JS Class
class Person {
    constructor(firstName, lastName = '') {
        this._firstName = 'Dear ' + firstName;
        this._lastName = lastName;
    }
    getFullName() {
        return `${this._firstName} ${this._lastName}`
    }

    get firstName() {
        return this._firstName;
    }

    addFirstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    addLastName(value) {
        this._lastName = value;
    }
}

class Programmer extends Person {
    constructor(firstName, ...languages) {
        super(firstName);
        this._languages = languages;
    }

    get languages() {
        return this._languages.join(', ');
    }

    addLanguage(value) {
        this._languages.push(value);
    }

    getInfo() {
        return `${this.firstName} learn hard next program languages: ${this.languages} `
    }
}

const candidate = new Programmer('Pasha', 'JS', 'Java');

candidate.addLanguage('Phyton');
candidate.addLastName("Dvoinos");
console.log(candidate.getFullName());
candidate.addLanguage('C#');
console.log(candidate.getInfo());*/

/*let arr = [7, 9, 0, -2];

const last = (arr, i) => {
    let len = arr.length;
    if (i === undefined) return arr[len - 1];
    return arr.slice(Math.max(len - i, 0));
};

print(last(arr,2));*/
/*let number = '025468';

const dash = (nums) => {
    let result = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] % 2 === 0 && nums[i] % 2 === 0) {
            result.push('-', nums[i]);
        } else {
            result.push(nums[i]);
        }
    }
    return result.join('');

};

print(dash(number));*/
/*let cats = ['Tom','Fluffy','Tom','Bella','Chloe','Tom','Chloe'];
let counts = {};
let compare = 0;
let mostFrequent;

for (let i = 0; i < cats.length; i++) {
    let name = cats[i];

    if (counts[name] === undefined) {
        counts[name] = 1;
    } else {
        counts[name] = counts[name] + 1;
    }

    if (counts[name] > compare) {
        compare = counts[name];
        mostFrequent = cats[i];
    }
}

print(mostFrequent + ": " + compare);*/
/*let arr = [0, 1, 2, 3, 4];
let res = [];
const sum_sq = (arr) => {
    return arr.reduce((a, b) => {
        res.push(b ** 2);
        return a + b ** 2;
    }, 0);
};

print(sum_sq(arr));
print(res);*/
/*let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
    switch (i) {
        case 0:
            print(`${i + 1 + o[1]} choice is ${color[i]}`);
            break;
        case 1:
            print(`${i + 1 + o[2]} choice is ${color[i]}`);
            break;
        case 2:
            print(`${i + 1 + o[3]} choice is ${color[i]}`);
            break;
        default:
            print(`${i + 1 + o[0]} choice is ${color[i]}`);
            break;
    }
}*/
/* to shuffle an array

let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const shuffle = (arra1) => {
    let ctr = arra1.length;
    let temp;
    let index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}*/
/*
const array_range = (from, to) => {
    let result = [];
    for (let i = from; i <= to; i++) {
        result.push(i);
    }
    return result;
};

print(array_range(-4, 7));*/
/*let numberArray = [1, 2, 3, 4, 10, 5, 6, 7];

let result = numberArray.map(value => () => console.log(value));

result[4]();*/

/*const placeAnOrder = (orderNumber) => {
    console.log("Customer order:", orderNumber);

    cookAndDeliverFood(() => {
        console.log("Delivered food order:", orderNumber);
    })
};

const cookAndDeliverFood = (callback) => {
    setTimeout(callback, 5000);
};

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);*/

/*function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = (targetPlayer) => {
        targetPlayer.life += 1;
        this.life -= 1;
        console.log(this.name + " give 1 life for " + targetPlayer.name);
        console.log(targetPlayer.name + ": " + targetPlayer.life);
        console.log(this.name + ": " + this.life);
    }
}

const Pasha = new User();
const Andrey = new User();

Pasha.name = "Pasha";
Andrey.name = "Andrey";

Pasha.giveLife(Andrey);
Pasha.giveLife(Andrey);


User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetPlayer.name);
    console.log(targetPlayer.name + ": " + targetPlayer.life);
};

Pasha.uppercut(Andrey);*/

/*let text = 'SMS messages are really short';
let text2 = '1234567 123 1234 123456789 12';
let text4 = 'Abc cde';
let length = 50;


function split(arr, delimiter) {
   let tmp = [];
   if(!arr)
	  return tmp;
   let res = [tmp];
   for(let i = 0; i < arr.length; i++) {
	  if(arr[i] !== delimiter)
		 tmp.push(arr[i]);
	  else {
		 tmp = [];
		 res.push(tmp);
	  }
   }
   return res.map(el => el.join(''));
}

const solution = (S, K) => {
   let textArr = split(S.trim(),' ');
   let tempResult = [];

   if (!S) return [];

   let validateMsg = textArr.reduce((acc, curr) => {
	  if ((acc.join('').length + curr.length + acc.length <= K)) {
		 return [...acc, curr];
	  } else {
		 tempResult.push([...acc]);
		 return [curr];
	  }
   }, textArr.splice(0, 1));

   return [...tempResult, validateMsg].map(el => el.join(' '));
};*/
/*let text = 'SMS messages are really short';
let text2 = '1234567 123 1234 123456789 12 12345678';
let text3 = 'One proper SMS can contain at most K characters.' +
   ' If the text is longer, it needs to be split into parts.' +
   ' Each part should be sent in a separate message that fulfills' +
   ' the maximum length requirement. Text may not be split within words.' +
   ' The order of the words and the messages can\'t change, so that we can' +
   ' later concatenate the resulting messages to retrieve the original text.' +
   ' Spaces at the start and end of all messages are removed, and thus are' +
   ' not accounted for in the overall message length.';
let length = 22;

const solution = (S, K) => {
   let textArr = S.split(' ');
   let tempResult = [];

   if (textArr.some(text => text.length > K)) return -1;

   let validateMsg = textArr.reduce((acc, curr) => {
	  if ((acc.join('').length + curr.length + acc.length <= K)) {
		 return [...acc, curr];
	  } else {
		 tempResult.push([...acc]);
		 return [curr];
	  }
   }, textArr.splice(0, 1));

   let result = [...tempResult, validateMsg];

   return result.length;
};
*/

/*
let test = '1plus2plus3minus4'.replace(/plus/g, '+').replace(/minus/g, '-');

function calculate(str) {
   let ans = str.replace(/plus/g, '+').replace(/minus/g, '-');
   return new Function(`return ${ ans }`)() + '';
}*/

/*
const firstDup = str => {
   let fullArr = str.split('');

   while (fullArr.length) {
	  let el = fullArr.splice(0, 1);
	  if (fullArr.some(elem => el.join('') === elem)) return el[0];
   }
};*/

/*function firstNonRepeated(s) {
   for (let i = 0; i < s.length; ++i) {
	  if (s.lastIndexOf(s[i]) === i && s.indexOf(s[i]) === i) {
		 return s[i];
	  }
   }
   return null;
}*/

/*const multiplyAll = numbers => (factor) => numbers.map(num => num * factor);*/

/* Vasya clerk
let group1 = [25, 25, 25, 25, 100, 50];
let group2 = [25, 100, 25, 25];
let group3 = [25, 25, 50, 50, 25, 100];
let group4 = [25, 50, 100, 25, 25, 25, 50];


const tickets = peopleInLine => {
   let money = [];
   let isChange = true;

   const isHaveChange = (cash, buyer) => {
	  const compareNumbers = (a, b) => a - b;
	  switch (buyer) {
		 case 25:
			money.push(25);
			money.sort(compareNumbers);
			break;
		 case 50:
			if (cash.some(el => el === 25)) {
			   money.splice(cash.lastIndexOf(25), 1, 50);
			   money.sort(compareNumbers);
			} else {
			   isChange = false;
			}
			break;
		 case 100:
			let pair = cash.filter(el => el === 25 || 50);
			if (pair.includes(50) && pair.includes(25)) {
			   money.splice(cash.lastIndexOf(25), 1);
			   money.splice(cash.lastIndexOf(50), 1, 100);
			   money.sort(compareNumbers);
			} else if (cash.filter(el => el === 25).length >= 3) {
			   money.splice(0, 3, 100);
			   money.sort(compareNumbers);
			} else {
			   isChange = false;
			}
			break;
		 default:
			return false;
	  }
   };

   for (let i = 0; i < peopleInLine.length; i++) {
	  if (isChange) isHaveChange(money, peopleInLine[i]);
   }
   return isChange ? 'YES' : 'NO';
};*/
/* Vasya Clerk
const tickets = (peopleInLine) => {
   let bill25 = 0,
	  bill50 = 0,
	  bill100 = 0;

   return peopleInLine.every(person => {
	  switch (person) {
		 case 25:
			bill25 += 1;
			return true;
		 case 50:
			bill50 += 1;
			bill25 -= 1;
			return bill25 >= 0;
		 case 100:
			bill100 += 1;
			if (bill50 >= 1) {
			   bill50 -= 1;
			   bill25 -= 1;
			} else bill25 -= 3;
			return bill50 >= 0 && bill25 >= 0;
	  }
   }) ? 'YES' : 'NO';
};*/

/*josephusSurvivor
function josephusSurvivor(n, k) {
   let survivors = Array.from({ length: n }, (el, i) => ++i);

   if (k === 1) return survivors[n - 1];

   for (let i = 0, j = 1; survivors.length > 1; i++, i %= survivors.length) {
	  if (j < k) {
		 j++;
	  } else {
		 survivors.splice(i, 1);
		 j = 2;
	  }
   }

   return survivors[0];
}*/
/*josephusSurvivor
function josephusSurvivor(n,k){
   let arr = [...Array(n).keys()].map(i => i + 1);
   let pos = 0;

   while (arr.length > 1) {
	  pos = (pos + (k - 1)) % arr.length;
	  arr.splice(pos, 1);
   }
   return arr[0];
}*/

/*
firstNSmallest
const firstNSmallest = (array, n) => {
   if (!n) return [];

   while (array.length > n) {
	  array.splice(array.lastIndexOf(Math.max(...array)), 1);
   }

   return array;
};*/

/*function solution(input, markers) {
   let mark1 = input.indexOf(markers[0]);
   let mark2 = input.indexOf(markers[1]);

   let clean =  input.indexOf('\n') || input.indexOf('\\n');

   let firstPart = input.slice(0, mark1).trim();
   let secondPart = input.slice(clean, mark2).trim();

   return firstPart + '\n' + secondPart;
}*/

/*function addLetters(...letters) {
   if (!letters.length) return 'z';

   let charIndex = letters
	  .map(el => el.charCodeAt() - 96)
	  .reduce((a, b) => a + b) + 96;

   const check = () => {
	  if (charIndex > 122) {
		 charIndex -= (122 - 96);
		 check();
	  }
   };

   check();

   return String.fromCharCode(charIndex);
}*/

/*const letterFrequency = (text) => {
   let uniq = Array.from(new Set([...text.toLowerCase().replace(/[^a-zA-Z]+/g, '')]));

   return uniq
	  .map(el => [el, text.match(new RegExp(el, 'gi')).length])
	  .sort((a, b) => {
		 if (a[1] === b[1]) {
			return a[0].charCodeAt(0) - b[0].charCodeAt(0);
		 }
		 return b[1] - a[1];
	  });
};*/

/*const rowSumOddNumbers = count => {
    return Array.from({length: 2 * count}, (_, i) => ++i)
                .filter(el => el % 2 !== 0)
                .reduce((acc, curr) => acc + curr)  * count;
};
*/

/*const allNonConsecutive = arr => {
    return arr
        .map((n, i) => {
            if (!(n === (arr[i - 1] || n - 1) + 1)) return { i, n }
        })
        .filter(el => el)
}*/

/* const test = [21, 13, 2, 7, 5, 14, 7, 15, 9, 10]
const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log([...'bingo']
    .map(el => el.charCodeAt(0) - 96)
    .every(el => test.includes(el)) ? 'WIN' : 'LOSE') */

/* function HQ9(code) {
  switch (code) {
    case "H":
      return "Hello World!";
    case "Q":
      return code;
    case "9":
      let text = "";
      for (let i = 99; i > 0; i--) {
        if (i === 1) {
          text +=
            "1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.";
        } else {
          text +=
            i +
            " bottles of beer on the wall, " +
            i +
            " bottles of beer.\nTake one down and pass it around, " +
            (i - 1) +
            " bottles of beer on the wall.\n";
        }
      }
      return text;
    default:
      return;
  }
} */

/* const letterFrequency = text => {
  let uniq = Array.from(new Set([...text.toLowerCase().replace(/\W/g, "")]));
  return uniq
    .map(el => [el, text.match(new RegExp(el, "gi")).length])
    .sort()
    .sort((a, b) => b[1] - a[1]);
};
 */

/* let word = "attitude";

function wordsToMarks(string) {
  const toInt = a => a.charCodeAt(0) - 96;
  return [...string].map(toInt).reduce((a, b) => a + b);
} */

/* const check = (word, num) => {
  const toInt = w => ((w.charCodeAt(0) - 97) * num) % 26;
  const toStr = n => String.fromCharCode(n + 97);
  return num + [...word].map(el => toStr(toInt(el))).join("");
};

console.log(check("pasha", 13465657));

function decode(r) {
  const code = +r.match(/\d+/g)[0];
  const wordArr = r.match(/\D/g);

  const res = wordArr.map(el => {
    for (let i = 0; i < 26; i++) {
      if ((i * code) % 26 === el.charCodeAt(0) - 97) {
        //console.log((i * code) % wordArr.length);

        return String.fromCharCode(i + 97);
      }
    }
  });
  return code + res.join("") === r ? "Impossible to decode" : res.join("");
}

console.log(decode("1346566455naana")); */

/* const jawerly = (jewels, stones) => {
  let result = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones.charAt(i))) {
      ++result;
    }
  }
  return result;
};

console.log(jawerly("ab", "aabbccd")); */

/* const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin
});

let lines = [];

rl.on("line", line => {
  lines.push(line);
  lines[0] <= lines.length - 1 && rl.close();
}).on("close", () => {
  const [len, ...nums] = lines;

  //let a = [];
  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];
    if (nums.lastIndexOf(el) === i) {
      process.stdout.write(`${el}\n`);
    }
  }

  //const result = nums.filter((v, i, a) => a.indexOf(v) === i);
  //a.forEach(el => process.stdout.write(`${el}\n`));
}); */

/* const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin
});

let lines = [];

rl.on("line", line => {
  lines.push(line);
  lines.length === 2 && rl.close();
}).on("close", () => {
  process.stdout.write(
    `${Number([...lines[0]].sort().join() === [...lines[1]].sort().join())}`
  );
}); */

/* const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin
});

let lines = [];
rl.on("line", line => {
  lines.push(line.split(" "));
  lines.length === 3 && rl.close();
}).on("close", () => {
  const [len, ...nums] = lines;
  const sliced = nums.map(el => el.slice(1));
  const arr = []
    .concat(...sliced)
    .map(Number)
    .sort((a, b) => a - b)
    .join(" ");
  //console.log(arr.length);

  const qsort = arr => {
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
  };
  process.stdout.write(`${qsort(arr).join(" ")}`);
}); */

/* function randomArray(length, max) {
  return [...new Array(length)].map(() => Math.floor(Math.random() * max));
} */

/* const cards = [1, 2, 3]; //must arr.length % 3 === 0
const cardGame = arr => {
  let petya = 0;
  let vasya = 0;

  for (
    let i = 0, petyaTurn = true;
    i < arr.length;
    i += 3, petyaTurn = !petyaTurn
  ) {
    const check = arr.slice(i, i + 3);

    if (petyaTurn) {
      petya += check[0];
      vasya += check[1];
      check[0] < check[1] ? (petya += check[2]) : (vasya += check[2]);
    } else {
      petya += check[1];
      vasya += check[0];
      check[1] < check[0] ? (petya += check[2]) : (vasya += check[2]);
    }
  }
  console.log(`${petya > vasya ? "Petya" : "Vasya"}`);
};

cardGame(cards); */

//TIMES TABLE
function table(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
      row += `${ i * j }\t`;
    }
    console.log(row);
  }
}


//Numericals of a String
function replace(str) {
  let result = '';
  
  [...str].reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1;
    result += prev[curr];
    return prev;
  }, {});
  
  return result;
}


//Sums of Parts
function partsSums(ls) {
  ls.unshift(0);
  let sum = ls.reduce((a, b) => a + b, 0);
  return ls.map(el => sum -= el);
}


//MinMinMax
function minMinMax(array) {
  let sorted = array.sort((a, b) => a - b);
  
  let min = array[0];
  let max = array[array.length - 1];
  
  for (let i = min; i < max; i++) {
    if (!array.includes(i)) {
      return [min, i, max];
    }
  }
}

/*let city = {
	'AZ': 'Arizona',
	'CA': 'California',
	'ID': 'Idaho',
	'IN': 'Indiana',
	'MA': 'Massachusetts',
	'OK': 'Oklahoma',
	'PA': 'Pennsylvania',
	'VA': 'Virginia',
};


let test = `John Daggett, 341 King Road, Plymouth MA
Alice Ford, 22 East Broadway, Richmond VA
Sal Carpenter, 73 6th Street, Boston MA`;

let arr = test.split('\n').map(el => el.replace(/,/gm, ''));

let divider = {};

for (let [key, value] of Object.entries(city)) {
	divider[value] = arr
		.filter(el => el.includes(key.toString()))
		.map(el => el.replace(new RegExp(key, 'gm'), value));
}

for (let [key, value] of Object.entries(divider)) {
	if (value.length) {
		work.push(`${ key }\n..... ${ value.join('\n..... ') }`);
		//console.log(` ${ key }\n..... ${ value.join('\n..... ') }`);
	}
}*/


//Smallest possible sum
function solution(numbers) {
  
  return numbers.reduce(gcd) * numbers.length;
  
  function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  }
  
  /*let sorted = numbers.sort((a, b) => a - b);
  let max = sorted[numbers.length - 1];
  let min = sorted[0];*/
  
  /*return (() => {
   while (min) {
    let t = min;
    min = max % min;
    max = t;
   }
   return max;
  })() * numbers.length;*/
  
  /*if (max === min) {
   return numbers[0] * numbers.length;
  } else {
   let changed = max - min;

   sorted.pop();
   sorted.push(changed);

   return solution(sorted);
  }*/
}


//Longest Palindrome
function longestPalindrome(str) {
  if (str.length === 1) return 1;
  let modStr = str.toLowerCase().replace(/[^A-Za-z0-9]+/gm, '');
  let unique = [...new Set(modStr)];
  return unique.length % 2 === 0 ? unique.length * 2 - 1 : unique.length * 2;
}


//Consecutive Ducks
function consecutiveDucks(num) {
  return Math.log2(num) % 1 !== 0;
  
  /*if (num === 1) return false;
  return num % 2 !== 0 ? true : consecutiveDucks(num / 2);*/
}


//Geometric Progression Sequence
function geometricSequenceElements(a, r, n) {
  let arr = [a];
  for (let i = 0; i < n - 1; i++) {
    arr.push(arr[i] * r);
  }
  return arr.join`, `;
}

