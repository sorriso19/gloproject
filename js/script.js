"use strict";

const title = document.getElementsByTagName('h1')[0]
const screenButton = document.querySelector('.screen-btn')
const otherItemsNumber = document.querySelectorAll('.other-items.number')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const screenTypes = document.getElementsByClassName('main-controls__select')
const screenCount = document.getElementsByClassName('main-controls__input')

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
        inputRange.addEventListener('input', appData.changeSpan)
        screenButton.addEventListener('input', appData.blockButton)

    },
    changeSpan: function(event) {
        inputRangeValue.textContent = event.target.value
    },
        
    addTitle: function() {
        document.title = title.textContent
    },
    start: function (){
        appData.addScreens()
        appData.addServices()
       
        appData.addPrices()
        appData.changeSpan()
        appData.blockButton()
        // appData.getServicePercentPrice()
       

        // appData.logger()
       
        appData.showResult()
    },
    showResult: function() {
        total.value = appData.screenPrice
        inputCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        inputFullCount.value = appData.fullPrice
        span.value = appData.changeSpan
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
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

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

        appData.fullPrice = +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber
    },
    blockButton: function() {
        if (screenTypes.value == "" && screenCount.value == "") {
            screenButton.disabled = true;
        } else {
            screenButton.disabled = false;
        }
    },
    
    getServicePercentPrice: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
        
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
        
    }
}           
 
appData.init()


















appData.init()