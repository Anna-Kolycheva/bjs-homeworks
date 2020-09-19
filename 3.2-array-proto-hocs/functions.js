'use srtict';
console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
	return weapons.map(weapon => weapon.name);
}

function getCountReliableWeapons(durability) {
	return weapons.filter(weapon => weapon.durability > durability).length;
}

function hasReliableWeapons(durability) {
	return weapons.some(weapon => weapon.durability > durability); 
}

function getReliableWeaponsNames(durability) {
	return weapons.filter(weapon => weapon.durability > durability).map(weapon => weapon.name);
}

function getTotalDamage() {
	return weapons.reduce((counter, weapon) => counter + weapon.attack , 0);
} 

function getValuestCountToSumValues(array, s) {
	let i = 1;
	array.reduce((counter, number) => {
		counter += number;
		if (counter < s) {
			i++;
		}
		return counter;
	}, 0);
    return i;
}

//console.log(weapons);
//console.log(getNames(weapons));
//console.log(getCountReliableWeapons(200));
//console.log(hasReliableWeapons(200));
//console.log(getReliableWeaponsNames(200));
//console.log(getTotalDamage(200));
//console.log(getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 10));
//console.log(getValuestCountToSumValues([1,2,3,5,2,7,3,5,2], 20));