// const count = function(countFrom = 0, countTo = 10, step = 1) {
//     console.lo(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
//     for (let i = countFrom; i <= countTo; i += step) {
//       console.log(i);
//     }
//   };

//   count(1, 5); // countFrom = 1, countT = 5, step = 1
//   count(2); // countFrom = 2, countTo = 10, step = 1
//   count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2
//   count(); // countFrom = 0, coutTo = 10, step = 1

// const manyNumbers = function(...arg){
//     let result = 0
//     for (let index = 0; index < arg.length; index++) {
//         result = result + arg[index];
//     }
//     return console.log(result)
// }
// manyNbers(1,2,3,4)
// manyNumbers(10,22,31,432,4,56,1,2)
// manyNumbers(123,98)

// function hello2(name) {
// 	console.log(`Привіт, ${name}`)
// }
// hello2('Василь')

function mul(n, m) {
	let myMnojenna = n * m
	let myPlus = n + m
	let myMinus = n - m

	return {
		myMnojenna: myMnojenna,
		myPlus: myPlus,
		myMinus: myMinus,
	}
}

console.log(mul(5, 3))
console.log(mul(10, 4))

const myAverageScore = (...arg) => {
		let result = 0
		for (let index = 0; index < arg.length; index++) {
			result = result + arg[index]
		}
	if (result >= 91 && result <= 100) {
		console.log('My average score: A')
	} else if (result >= 81 && result <= 90) {
		console.log('My average score: B')
	} else if (result >= 71 && result <= 80) {
		console.log('My average score: C')
	} else {
		console.log('My average score: D')
	}
}

myAverageScore([100, 75, 81, 96])
myAverageScore([45, 63, 85, 70])
myAverageScore([77, 82, 60, 58])
myAverageScore([93, 99, 93, 96])
