//Задача 1
function parseCount(string) {
	const number = Number.parseInt(string);
	if (isNaN(number)) {
		const parseError = new Error('Невалидное значение');
		throw parseError;
	}
	return number;
}

function validateCount(string) {
	try {
	    number = parseCount(string);
	} catch(e) {
		return e;
	}
	return number;
}

//Задача 2
class Triangle {
	constructor(a, b, c) {
		
		this.a = a,
		this.b = b,
		this.c = c

		if ( ((a + b) <= c) || ((a + c) <= b) || ((b + c) <= a)) {
			const geometryError = new Error('Треугольник с такими сторонами не существует');
		    throw geometryError;
		}

	}

	getPerimeter() {
			return this.a + this.b + this.c;
		}

	getArea() {
			const p = this.getPerimeter()/2;
			return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
		}
}

function getTriangle(a, b, c) {
	try {
		const triangle = new Triangle(a, b, c);
		return triangle;
	} catch(e) {
		const a = {
			getArea: function() {return 'Ошибка! Треугольник не существует'},
			getPerimeter: function() {return 'Ошибка! Треугольник не существует'}
		};
		return a;
	}
	
}

