//String.prototype.isPalindrome - для задачи №1
"use strict";

String.prototype.isPalindrome = function() {
	let message = this;
	message = message.toLowerCase().split(" ").join(""); 
    for (let i = 0; i < message.length / 2; i++) {
    	if (message[i] != message[message.length - i - 1]) {
    		return false;
    	} 
    }return true;
}

function getAverageMark(marks) {
    let averageMark;
    let roundedAverage;
    if (marks.length == 0) {
    	averageMark = 0;
    } else {
    	let sum = 0;
        for (let i = 0; i < marks.length; i++) {
        	sum += marks[i];
        }
        averageMark = sum / marks.length;
    }
    return Math.round(averageMark);
}

function checkBirthday(birthday) {
    const now = Date.now();
    birthday = new Date(birthday).getTime();
    let dif = now - birthday;
    let age = dif / (365.25 * 24 * 60 * 60 * 1000);
    if (age > 18) {
    	return true;
    } else {
    	return false;
    }
}