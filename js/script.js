"use strict";

const title = document.getElementsByTagName('h1')[0]
const screenButton = document.querySelector('.screen-btn')
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
    servicePricesPercent: 0,
    servicePricesNumber: 0 ,
    fullPrice: 0 ,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function() {
        appData.addTitle()
        startButton.addEventListener('click', appData.start)
        screenButton.addEventListener('click', appData.addScreenBlock)
    },
    addTitle: function() {
        document.title = title.textContent
    },
    start: function (){
        appData.addScreens()
        appData.addServices()
       
        appData.addPrices()
        // appData.getFullPrice()
        // appData.getServicePercentPrice()
       

        // appData.logger()
        console.log(appData);
    },
    addScreens: function() {
        screens = document.querySelectorAll('.screen')

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

        console.log(appData.screens);
    },
    addServices: function() {
        otherItemsPercent.forEach(function(item) {
            console.log(item);
            const check = item.querySelector('input[type=checkbox')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text')

            console.log(check);
            console.log(label);
            console.log(input);
            if(check.checked) {
                appData.servicesPercent[label.textContent] = +input.value
            }
        })

        otherItemsNumber.forEach(function(item) {
            console.log(item);
            const check = item.querySelector('input[type=checkbox')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text')

            console.log(check);
            console.log(label);
            console.log(input);
            if(check.checked) {
                appData.servicesNumber[label.textContent] = +input.value
            }
        })
    },
    addScreenBlock: function() {
       const cloneScreen = screens[0].cloneNode(true)
      
       screens[screens.length - 1].after(cloneScreen)
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
    addPrices:  function() {
        for(let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }

        for(let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        }

        for(let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
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
 
appData.init()


















appData.init()