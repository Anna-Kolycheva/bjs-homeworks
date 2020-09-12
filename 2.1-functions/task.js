"use strict";

// Задача 1
function getSolutions( a, b, c ) {
	let roots = [];
	let D = b ** 2 - 4 * a * c;
	
	if (D == 0) {
		let x1 = -b / (2 * a);
		roots.push(x1);
	}
	if (D > 0) {
		let x1 = ( -b + Math.sqrt(D)) / ( 2 * a );
		let x2 = ( -b - Math.sqrt(D)) / ( 2 * a );
		roots.push(x1);
		roots.push(x2);
	}
	return { 
		D, 
		roots
	};
}

function showSolutionsMessage( a, b, c ) {
	let result = getSolutions( a, b, c );
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`) 
    console.log(`Значение дискриминанта: ${result.D}`)
    if ( result.D < 0 ) {
    	return `Уравнение не имеет вещественных корней`;
    }
    if ( result.D === 0 ) {
    	return (`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    }
    if ( result.D > 0 ) {
    	return (`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}


// Задача 2

function getAverageMark(marks) {
	let averageMark;
    if (marks.length == 0) {
    	averageMark = 0;
    } else {
    	let sum = 0;
        for (let i = 0; i < marks.length; i++) {
        	sum += marks[i];
        }
        averageMark = sum / marks.length;
    }
    return averageMark;
}
function getAverageScore(data) {
   let averageScore = {};
   let score;
   let generalAverage = [];
   let generalAverageMark;

   for ( let prop in data ) {
   score =  getAverageMark(data[prop]);
   averageScore[prop] = score;
   generalAverage.push(score);
   }
   averageScore[`average`] = getAverageMark(generalAverage);
   return averageScore;
}

// Задача 3

function getPersonData(secretData) {
	return {
		firstName: getDecodedValue(secretData[`aaa`]),
		lastName: getDecodedValue(secretData[`bbb`])
	}
}

function getDecodedValue(secret) {
	if (secret === 0) {
    return `Родриго`;
    } else {
    return `Эмильо`;
    }
}