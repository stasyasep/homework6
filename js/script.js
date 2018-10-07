// Створіть функцію, що приймає в себе строку виду "42 см" і повертає перетворене значення в метри: "0.42 м".


(function task1(){

	console.log(getMeters("42 см"));

	function getMeters(str){
  		return ((parseInt(str)/100)+" м");
	}

})();

// Дано: 2 або 3 строкові змінні з номером дня, місяця та року: d = 04, m = 07, y = 1996.
// Створіть функцію, яка приймає 2 обов'язкових параметра d та m і необов'язковий y.
// Функція повинна повернути строку з датою в одному з двох форматів:
// "04.07"
// "04.07.1996"


(function task2(){

	let d = "04", m = "07", y = "1996";

	console.log(formatDate(d,m,y));

	function formatDate(d,m,y){
  		if(y===undefined){
    		return (d+"."+m);
  		}
  		else{
    		return (d+"."+m+"."+y)
  		}
	}

})();


// Дано кубічне рівняння (квадратичний тричлен ax2 + bx + c = 0).
// Для знаходження коренів рівняння потрібно спочатку знайти дискримінант цього рівняння.
// Створіть функцію розрахунку дискримінанта (формула D = b2 - 4ac).
// function diskr(){ ... }
// var a = 5, b = 4, c = 7;
// console.log(diskr(a, b, c));

(function task3(){

	let a = 5, b = 4, c = 7;

	console.log(diskr(a, b, c));

	function diskr(a,b,c){
  		return b*b-4*a*c;
	}

})();



// Створіть функцію, що повертає тип даних змінної Ї українською мовою.
// function типДаних(){ ... }

// var Ї;
// console.log(типДаних());    // "значення не задано"
// Ї = 'Привіт!';
// console.log(типДаних());    // "строка"
// Ї = 42;
// console.log(типДаних());    // "число"
// Ї = 1 / 0;
// console.log(типДаних());    // "безкінечність"
// Ї = null;
// console.log(типДаних());    // "порожнеча"
// Ї = {};
// console.log(типДаних());    // "об'єкт"
// Ї = типДаних;
// console.log(типДаних());    // "функція"
// // і завдання з зірочкою:
// Ї = 1 / 'Ї';
// console.log(типДаних());    // "не число!"

(function task4(){

	console.group("Типи даних українською мовою"); 

	let Ї;
	console.log(типДаних());
	Ї = 'Привіт!';
	console.log(типДаних());
	Ї = 42;
	console.log(типДаних());
	Ї = 1 / 0;
	console.log(типДаних());
	Ї = null;
	console.log(типДаних());
	Ї = {};
	console.log(типДаних());
	Ї = типДаних;
	console.log(типДаних());
	Ї = 1 / 'Ї';
	console.log(типДаних());

	console.groupEnd();


	function типДаних(){
  		let res = typeof Ї;
  		if(!(Ї===Ї)){
    		return "не число!";
  		}
  		if (res==="string"){
    		return "строка";
  		}
  		else if (res==="number"&&Ї!==Infinity){
    		return "число";
  		}
  		else if (res==="undefined"){
    		return "значення не задано";
  		}
  		else if (Ї===null){
    		return "порожнеча";
  		}
  		else if (Ї===Infinity){
    		return "безкінечність";
  		}
  		else if (res==="object"){
    		return "об'єкт";
  		}
  		else if (res==="function"){
    		return "функція";
  		}
	}

})();


// Скрипт отримує "з сервера" габарити коробки та вираховує об'єм.
// Виправте помилки та недоліки скрипта (функцію getFromServer не чіпайте).
// Переробіть функцію calcBox, щоб вона стала чистою.
// <p>Результат вивести сюди</p>

// function getFromServer(v){
//   var res = Math.ceil(Math.random()*100) + ' см';
//   console.info('Користувач запросив ' + v + ' розмір коробки: ' + res + '.');
//   return res;
// }

// var x = getFromServer('x');
// var y = getFromServer('y');
// var z = getFromServer('z');
// function calcBox(){
//   var res = 'Габарити коробки: ' + x + ' * ' + y + ' * ' + z + '.<br>';
//   res += "Об'єм коробки: " + x * y * z + ' кубічних дециметрів.';
//   document.getElementsByTagName('p')[0].innerHTML = res;
// }
// calcBox();
// console.info('Скрипт виконано.');

(function task5(){
	
	function getFromServer(v){

  		let res = Math.ceil(Math.random()*100) + ' см';

  		console.info('Користувач запросив ' + v + ' розмір коробки: ' + res + '.');
  		
  		return res;
	}

	let x = getFromServer("x");
	let y = getFromServer("y");
	let z = getFromServer("z");

	function calcBox(x,y,z){

  		let res = 'Габарити коробки: ' + x + ' * ' + y + ' * ' + z + '.<br>';

  		res += "Об'єм коробки: " + parseInt(x) * parseInt(y) * parseInt(z) + ' кубічних дециметрів.';

  		document.getElementsByTagName('p')[0].innerHTML = res;
	}

	calcBox(x,y,z);
	
	console.info('Скрипт виконано.');

})();
