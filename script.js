'use strict';

let title = prompt("Как называется ваш проект?")
title = "Мой первый сайт"
let screens = prompt("Какие типы экранов нужно разработать?")
screens = "Простые, Сложные, Интерактивные"
let screenPrice = +prompt("Сколько будет стоить данная работа?")
screenPrice = 10000;
let adaptive = ("Нужен ли адаптив на сайте?")
adaptive = true;
let service1 = prompt("Какой дополнительный тип услуги нужен?")
service1 = "Настройка Яндекс Метрики"
let servicePrice1 = +prompt("Сколько это будет стоить?")
servicePrice1 = 5000;
let service2 = prompt("Какой дополнительный тип услуги нужен?")
service2 = "Настройка SEO"
let servicePrice2 = +prompt("Сколько это будет стоить?")
servicePrice2 = 10000;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
const rollback = 5;
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
 
console.log("Стоимость верстки экранов: "  +  screenPrice + " рублей");

console.log("Стоимость разработки сайта: " + fullPrice + " рублей");


