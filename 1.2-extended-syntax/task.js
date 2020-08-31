"use strict";
function getResult(a,b,c){
	let discriminant = b ** 2 - 4 * a * c;
    let x = [];
    if (discriminant == 0) {
    x.push ( - b / 2 * a );
    } else if (discriminant > 0) {
    x.push (( - b + discriminant ** 0.5 ) / ( 2 * a ), ( - b - discriminant ** 0.5 ) / ( 2 * a ));
    }
    return x;
}

function getAverageMark(marks){
    let averageMark;
    if (marks.length == 0) {
    	averageMark = 0;
    } else {
    	if (marks.length > 5) {
    		marks.splice(5);
    		console.log("оценок больше 5");
     	}
        let sum = 0;
        for (let i = 0; i < marks.length; i++) {
        	sum += marks[i];
        }
        averageMark = sum / marks.length;
    }
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let result;
    if (new Date().getFullYear() - dateOfBirthday.getFullYear() < 18) {
    	result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    } else {
    	result = (`Не желаете ли олд-фэшн, ${name}?`);
    }
    return result;
}