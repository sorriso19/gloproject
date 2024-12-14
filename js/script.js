"use strict";

const title = document.getElementsByTagName('h1')[0]
const screenButton = document.querySelector('screen-btn')
const otherItemsNumber = document.querySelectorAll('.other-items.number')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')

const inputRange = document.querySelector('.rollback input')
const inputRangeValue = document.querySelector('.rollback .range-value')

const startButton = document.getElementsByClassName('handler_btn')[0]
const resetButton = document.getElementsByClassName('handler_btn')[1]


const total = document.getElementsByClassName('total-input')[0]
const inputCount = document.getElementsByClassName('total-input')[1]
const inputCountOther = document.getElementsByClassName('total-input')[2]
const inputFullCount = document.getElementsByClassName('total-input')[3]
const inputRollbackCount = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen')

const appData = {
    title: '',
    screens: [],
    screenPrice: 0 ,
    adaptive: true,
    rollback: 5,
    allServicePrices: 0,
    fullPrice: 0 ,
    servicePercentPrice: 0 ,
    services: {},
    init: function() {
        appData.addTitle()
        startButton.addEventListener('click', appData.start)
    },
    addTitle: function() {
        document.title = title.textContent
    },
    start: function (){
        appData.addScreens()
        // appData.asking()
        // appData.addPrices()
        // appData.getFullPrice()
        // appData.getServicePercentPrice()
        // appData.getTitle()

        // appData.logger()
    },
    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    addScreens: function() {
        screens.forEach(function(screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            appData.screens.push({
                id: index, 
                name: selectName , 
                price: +select.value * +input.value
            })
        })
        
    },

    check: function() {
        let string = "Hello123";
            let regex = /\d/;
            let matches = string.match(regex);
        for (let i = 0; i < str.length; i++) {
            if (!isNaN(Number(str[i]))) {
                return true;
            } if (matches === true) {
                console.log("В строке есть цифры");
            } else {
                console.log("В строке нет цифр");
            }
       }
    },
    asking: function () {
        appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки")
    
            for (let i = 0; i < 2; i++) {
                let name = prompt("Какие типы экранов нужно разработать?")
                let price = 0

                do {
                    price = prompt("Сколько будет стоить данная работа?");
                    } while (!appData.isNumber(price))
                
                appData.screens.push({id: i, name: name, price: price})
            }

            
        
            for (let i = 0; i < 2; i++) {
                let name = prompt("Какой дополнительный тип услуги нужен?")
                let price = 0
                         
                do {
                    price = prompt("Сколько это будет стоить?")
                } while (!appData.isNumber(price))
            
                appData.services[name] = +price
            }  

        appData.adaptive = confirm("Нужен ли адаптив на сайте?")
    },

    addPrices:  function() {
        for(let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }

        for(let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },
    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices
    },
    getServicePercentPrice: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    getTitle: function () {
        return appData.title[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase()
    },
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даем скидку в 10%"
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%"
        } else if (price >= 0 && price < 15000) {
            return "Скидка не предусмотрена"
        } else {
            return "Ошибка"
        }
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
        
    }
}           
 
appData.start()


















appData.init()