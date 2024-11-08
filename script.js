'use strict';

let answer = prompt("Как называется ваш проект?")
let title = "Мой первый сайт"
let answer2 = prompt("Какие типы экранов нужно разработать?")
let screens = "Простые, Сложные, Интерактивные"
let answer3 = +prompt("Сколько будет стоить данная работа?")
let screenPrice = 10000;
let answer4 = ("Нужен ли адаптив на сайте?")
let adaptive = true;
let service1 = prompt("Какой дополнительный тип услуги нужен?")
let additionalService1 = "Настройка Яндекс Метрики"
let answer5 = +prompt("Сколько это будет стоить?")
let servicePrice1 = 5000;
let service2 = prompt("Какой дополнительный тип услуги нужен?")
let additionalService2 = "Настройка SEO"
let answer6 = +prompt("Сколько это будет стоить?")
let servicePrice2 = 10000;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let rollback = 5;
let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));
console.log(Math.ceil(servicePercentPrice));

if(fullPrice >= 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log ("Даем скидку в 5%");
} else if (fullPrice >= 0 && fullPrice < 15000) {
    console.log("Скидка не предусмотрена");
} else {
    console.log("Ошибка");
}
 


