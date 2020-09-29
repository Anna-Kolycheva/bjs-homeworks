"use strict";

class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(time, callback, id) {
		if(!id) {
			throw new Error('не задан id');
			return;
		}

		if (this.alarmCollection.some(alarm => alarm.id === id)) {
			console.error('Будильник с тким id уже существует');
		    return;
		}

		this.alarmCollection.push({id, time, callback});
	}

	removeClock(id) {
		if (this.alarmCollection.some(alarm => alarm.id === id)) {
			this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
			return true;
	    } 
	    return false;
	}

	getCurrentFormattedTime() {
        const time = new Date();
        const hours = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours();
        const minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes();
		return `${hours}:${minutes}`;

		///return new Date.toLocaleTimeString().slise(0,5);
	}

	start() {
		const checkClock = (alarm) => {
			if (this.getCurrentFormattedTime() === alarm.time) {
				alarm.callback();
			}
		}
		if(!this.timerId) {
			this.timerId = setInterval(() => this.alarmCollection.forEach(alarm => checkClock(alarm)), 1000);
		}
	}

	stop() {
		if (this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}

	printAlarms() {
		this.alarmCollection.forEach(alarm => console.log(`id: ${alarm.id}, time: ${alarm.time}`));
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];

	}
}

function testCase() {
    let phoneAlarm = new AlarmClock;
    phoneAlarm.addClock("09:00", () => console.log("Пора вставать"), 1);
    phoneAlarm.addClock("09:01", () => { console.log("Давай, вставай уже!"); phoneAlarm.removeClock(2) }, 2);
    phoneAlarm.addClock("09:01", () => console.log("Иди умываться"));
    phoneAlarm.addClock("09:02", () => {
        console.log("Вставай, а то проспишь!");
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);
    phoneAlarm.addClock("09:05", () => console.log("Вставай, а то проспишь!"), 1);
    phoneAlarm.printAlarms();
    phoneAlarm.start(); 
}