"use strict";

const rollback = 5
let title
let screens
let screenPrice
let adaptive
let allServicePrices
let fullPrice
let servicePercentPrice
let service1
let service2

const isNumber = function(num) {
    return !isNaN(parseFloat(num) && isFinite(num))
}

const asking = function () {
    title = prompt("Как называется ваш проект?", "Калькулятор верстки")
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные")
    screenPrice = prompt("Сколько будет стоить данная работа?")

    do {
        screenPrice = prompt("Сколько будет стоить данная работа?");
        } while (!isNumber(screenPrice));
      
    adaptive = confirm("Нужен ли адаптив на сайте?")
}

const getAllServicePrices = function (num) {
    let sum = 0

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?")
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?")
        } else if (!isNaN(parseFloat(num) && isFinite(num))) {
        sum += +prompt("Сколько это будет стоить?")
        } 
    }

    return sum
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getFullPrice = function () {
    return screenPrice + allServicePrices;
}

const getServicePercentPrice = function () {
    return fullPrice - (fullPrice * (rollback / 100));
}

const getTitle = function () {
    return title[0].toUpperCase() + title.substring(1, title.length).toLocaleLowerCase()
}

const getRollbackMessage = function (fullPrice) {
    if (fullPrice >= 30000) {
        return "Даем скидку в 10%";
    } else if (fullPrice >= 15000 && fullPrice < 30000) {
        return "Даем скидку в 5%";
    } else if (fullPrice >= 0 && fullPrice < 15000) {
        return "Скидка не предусмотрена";
    } else {
        return "Ошибка";
    }
}

asking()
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
console.log("Стоимость верстки экранов: " + screenPrice + " рублей");
console.log("Стоимость разработки сайта: " + fullPrice + " рублей");


