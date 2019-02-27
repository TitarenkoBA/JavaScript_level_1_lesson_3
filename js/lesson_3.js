// Практикум из второго урока "угадай число". 
// Как-то коряво, но сделал. Вроде работает. Срадостью выслушаю Ваши замечания.
// Возник вопрос: если вместо алертов ставлю консоль.лог - то в концоли все появляется только после завершения игры. 
// Почему так?

/*
var a;
var b;
var c = Math.round(Math.random() * 9000 + 1000);
var d = false;
var i = 1;

alert ('Игра началась \nУгадайте число \nЧисло загаданное компьютером, для проверки ' + c);

var valid = function (b_) {
	if (b_ >= 1000 && b_ < 10000)  {
		check (b_);
	} else {
			b_ = + prompt ('Введите четырехзначное число');
			valid (b_);
		}
}

var check = function (a_) {
	if (a_ > c) {
		alert ('Ваше число больше');
	} else if (a_ < c) { 
		alert ('Ваше число меньше');
	} else if (a_ == c) {
		d = true;
		alert ('Вы победили' + '\nЗагаданное число: ' + c + '\nЧисло попыток: ' + i);
	}
	i++;
	return d, i;
}

while (d != true) {
	b = + prompt ('Попытка номер ' + i + '\nВведите четырехзначное число');
	valid (b);
}

a = + prompt ('Хотите сыграть еще раз?  \n1 - да \n2 - нет');
if (a == 1) {
	window.location.reload();
}
*/





// Практикум из третьего урока "быки и коровы". 
// Добавил генератор массива. 

/*
var num = [];
var generator = function () {
	while (num.length < 4) {
		let randomNum = Math.floor (Math.random () * 9 + 1);
		let d = 0;
		for (let i = 0; i < num.length; i++) {
			if (num[i] === randomNum) { 
	 			d = 1;
	 			break;
			}
		}
		if (d != 1) { 
			num[num.length] = randomNum; 
		}
	}
	console.log ('Число, сгенерированное браюзером, для проверки: ' + num);
	return num;
};
		
var check = function (user) {
	let playerArray = [];
	let playerArrElement;
	console.log(playerArray);
	for (let i = 0; i < 4; i++) {
		playerArrElement = parseInt(user.substr(i, 1)); 
		playerArray.push(playerArrElement);
	}
	let bulls = 0;
	let cows = 0;
	for (let i = 0; i < 4; i++) {
		if (playerArray[i] == num[i]) {
			bulls++;
		} else if (num.indexOf(playerArray[i]) > -1) {
			cows++;
		}
	}
	console.log(user);
	console.log('быков: ' + bulls + '; коров: ' + cows);
	if (bulls == 4) {
		return true;
	}
};

var game = function () {
	generator ();
	let counter = 0;
	let end = false;
	console.log ('Игра началась');
	while (end != true) {
		if (counter == 9) {
			console.log ('Количество попыток исчерпано \nВы проиграли');
			break;
		} else {
			let userNumber = prompt ('Введите число');
			counter++;
			end = check (userNumber);
		}
	}
	if (end == true) {
		console.log('Вы победили');
	}
};

game ();
*/





// 1 - С помощью цикла while вывести все простые числа в промежутке от 0 до 100

/*
var i = 0;
var d;
var a = [];

while (i < 100) {
	i++;
	let j = 2;
	while (j < i ) {
		if (i % j == 0) {
			d = false;
			break;
		} 
		d = true;
		j++;
	}
	if (d == true) {
		a.push (i);
	}
}

console.log (a);
*/




// 2 - С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
//	 Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
//   Товары в корзине хранятся в массиве. Задачи:
//     a) Организовать такой массив для хранения товаров в корзине;
//     b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

var a = ['', '', '', '', '', ''];





// 4 - Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.

/*
for (var i = 0; i++ < 9; console.log (i)) {};
*/




// 4 - Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов

/*
var a = '';
for (var i = 0; i < 20; i++) {
	console.log (a += "x");
};
*/

// Укороченный вариант

//for (var a = ''; a.length < 20; console.log (a += "x")) {} 