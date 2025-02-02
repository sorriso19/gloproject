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
const totalCount = document.querySelectorAll('main-controls__input[type=text]')

const select = document.querySelectorAll('.screen select')
const field =  document.querySelectorAll('.screen input')
let screens = document.querySelectorAll('.screen')

console.log(select);
console.log(field);


 const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 5,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function () {
        this.addTitle()
        appData.start()
      
        startButton.addEventListener('click', this.start.bind(appData))
        inputRange.addEventListener('input', this.rangeChange.bind(appData))
        screenButton.addEventListener('click', this.addScreenBlock.bind(appData))
     
    },

    addTitle: function () {
        document.title = title.textContent
    },
        
    
    showResult: function () {
        total.value = this.screenPrice
        inputCountOther.value = this.servicePricesNumber + this.servicePricesPercent
        inputFullCount.value = this.fullPrice
        inputRangeValue.value = this.changeSpan
        inputRollbackCount.value = this.servicePercentPrice
        inputCount.value = this.totalCount
    },

    addScreens: function () {
        screens = document.querySelectorAll('.screen')
        this.screens = []
        

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select')
            const selectName = select.options[select.selectedIndex].textContent
            const input = screen.querySelector("input");

            if (selectName == "Тип экранов" || +input.value == 0){
                this.isError = true;
            } else {
                this.isError = false;
        }
         
            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            })
        })
        // console.log(appData.screens);
    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
         
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

       
            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value
            }
        })

        otherItemsNumber.forEach(function (item) {
           
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

           
            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value
            }
        })
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true)

        screens[screens.length - 1].after(cloneScreen)
    },


    check: function () {
        let string = "Hello123";
        let regex = /\d/;
        if (regex.test(string)) {
            console.log("В строке есть цифры");
            return true;
        } else {
            console.log("В строке нет цифр");
            return false;
        }
    },
    addPrices: function () {
        for (let screen of this.screens) {
            this.screenPrice += +screen.price
        }

        for (let key in appData.servicesNumber) {
            this.servicePricesNumber += appData.servicesNumber[key]
        }

        for (let key in appData.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
        }

        this.fullPrice = +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber

        this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100))

        this.totalCount = this.screens.reduce((sum, screen) => sum + screen.count, 0)
            console.log(this.totalCount);
    },
    rangeChange: function (event) {
        inputRangeValue.textContent = event.target.value
    },
    
    logger: function () {
        console.log(this.fullPrice);
        console.log(this.servicePercentPrice);
        console.log(this.screens);
        
    },



start: function () {
    
    this.addScreens();
    if (this.isError) {
      alert("Поля Тип экранов и Количество не могут быть пустыми!");
      console.log(this.isError);
    } else {
    console.log("no error");
    this.addServices();
    this.addPrices();
    this.showResult();
    }
    console.log(appData);

  }
}
  


appData.init()