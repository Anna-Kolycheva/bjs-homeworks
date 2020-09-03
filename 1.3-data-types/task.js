"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
	let totalAmount;
    let numberOfMonths = (date.getFullYear() - new Date().getFullYear()) * 12 - new Date().getMonth() + date.getMonth();
    let loanBody = parseFloat(amount) - parseFloat(contribution);
    let payment;


    if (isNaN(parseFloat(percent))) {
    return `Процентная ставка введина некорректно`;
    } 
    if (isNaN(parseFloat(contribution))) {
    return `Некорректно введен первоначльный взнос`;
    } 
    if (isNaN(parseFloat(amount))) {
    return `Некорректно введена общая стоимость`;
    }
    if (contribution >= amount) {
    return 0;
    }	
    	

    totalAmount = parseFloat(numberOfMonths * ( loanBody * (((percent / 100) / 12) + ((percent / 100) / 12) / ((Math.pow((1 + ((percent / 100) / 12)), numberOfMonths)) - 1)))).toFixed(2);
    //console.log(`Сумма выплаты ипотеки составляет : ` + totalAmount + `руб.`)
    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
	if ( name == "" || name == undefined ) {
          name = "Аноним";
    }
    console.log(`Привет, мир! Меня зовут ${name}`);
    return `Привет, мир! Меня зовут ${name}`;
}
