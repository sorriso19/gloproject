let title = "Мой первый веб-сайт";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 10000;
let rollback = 5;
let fullPrice = 70000;
let adaptive = true;

console.log(title);
console.log(fullPrice);
console.log(adaptive);



console.log(screens.length);
let str1 = 'Стоимость верстки экранов';
let str2 = ' руб.';
console.log(str1  + " " + screenPrice + str2);

let str3 = 'Стоимость разработки сайта ';
let str4 = ' руб.';
console.log(str3  + " " + fullPrice + str4);

console.log(screens.toLowerCase().split(","));
console.log(fullPrice * (rollback/100));screenPrice