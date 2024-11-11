'use strict';

const rollback = 5;

let title = prompt("Как называется ваш проект?")
const screens = prompt("Какие типы экранов нужно разработать?")
const screenPrice = +prompt("Сколько будет стоить данная работа?")
const adaptive = confirm("Нужен ли адаптив на сайте?")
const service1 = prompt("Какой дополнительный тип услуги нужен?")
const servicePrice1 = +prompt("Сколько это будет стоить?")
const service2 = prompt("Какой дополнительный тип услуги нужен?")
const servicePrice2 = +prompt("Сколько это будет стоить?")

let allServicePrices = servicePrice1 + servicePrice2
let fullPrice
let servicePercentPrice


const getAllServicePrices = function() {
        return servicePrice1 + servicePrice2;
}

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

const getFullPrice = function() {
    return screenPrice + allServicePrices;
}

const getServicePercentPrice = function() {
    return fullPrice - (fullPrice * (rollback / 100));
}

const getTitle = function() {
    return title[0].toUpperCase() + title.substring(1, title.length).toLocaleLowerCase()
    } 


const getRollbackMessage = function(fullPrice) {
    if(fullPrice >= 30000) {
        return "Даем скидку в 10%";
    } else if (fullPrice >= 15000 && fullPrice < 30000) {
        return "Даем скидку в 5%";
    } else if (fullPrice >= 0 && fullPrice< 15000) {
        return "Скидка не предусмотрена";
    } else {
        return "Ошибка";
    }
}

allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrice()
title = getTitle()

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log("Стоимость верстки экранов: "  +  screenPrice + " рублей");
console.log("Стоимость разработки сайта: " + fullPrice + " рублей");