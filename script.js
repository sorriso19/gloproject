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

console.log("Стоимость верстки экранов: "  +  screenPrice + " рублей");

console.log("Стоимость разработки сайта: " + fullPrice + " рублей");

console.log(screens.toLowerCase().split(","));
console.log(fullPrice * (rollback/100));screenPrice