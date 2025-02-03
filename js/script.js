"use strict";

const title = document.getElementsByTagName('h1')[0]
const screenButton = document.querySelector('.screen-btn')
const startButton = document.getElementsByClassName('handler_btn')[0]
const resetButton = document.getElementsByClassName('handler_btn')[1]
const otherItemsNumber = document.querySelectorAll('.other-items.number')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')

const inputRange = document.querySelector('.rollback input')
const inputRangeValue = document.querySelector('.rollback .range-value')

const total = document.getElementsByClassName('total-input')[0]
const inputCount = document.getElementsByClassName('total-input')[1]
const inputCountOther = document.getElementsByClassName('total-input')[2]
const inputFullCount = document.getElementsByClassName('total-input')[3]
const inputRollbackCount = document.getElementsByClassName('total-input')[4]
const totalCount = document.querySelectorAll('main-controls__input[type=text]')

const totalInput = () => {
    let list = document.getElementsByClassName("total-input")
    for (let i = 0; i <list.length; i++) {}
};

let listScreen = document.querySelectorAll('.screen')
let allSelect = document.querySelectorAll('.main-controls__select select')
let allInput = document.querySelectorAll(".main_controls__input input[placeholder='Количество экранов']")

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    isError: false,
    init: function () {
        this.addTitle()
              
        startButton.addEventListener('click', this.start.bind(appData))
        resetButton.addEventListener('click', this.reset.bind(appData))
        inputRange.addEventListener('input',  this.rangeChange.bind(appData))
        screenButton.addEventListener('click', this.addScreenBlock.bind(appData))
     
    },

    addTitle: function () {
        document.title = title.textContent
    },
        
    showResult: function () {
        total.value = this.screenPrice
        inputCountOther.value = this.servicePricesNumber + this.servicePricesPercent
        inputFullCount.value = this.fullPrice
   
    },

    addScreens: function () {
        listScreen = document.querySelectorAll('.screen')
        this.screens = []
        

        listScreen.forEach((screen, index) => {
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
            });

            this.screens.forEach((item) => {
                inputCount.value = +inputCount.value +item.count
            });
        });
       
    },
    addServices: function () {
        otherItemsPercent.forEach((item) => {
         
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

       
            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value
            }
        })

        otherItemsNumber.forEach((item) => {
           
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

           
            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value
            }
        });
    },
    addScreenBlock: function () {
        const cloneScreen = listScreen[0].cloneNode(true)

        listScreen[listScreen.length - 1].after(cloneScreen)
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

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key]
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
        }

        this.fullPrice = +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber

        this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100))

        inputRollbackCount.value = this.servicePercentPrice                  
    },

    rangeChange: function (event) {
        inputRangeValue.innerText = event.target.value
        this.rollback = event.target.value
    },

    blockAttribute: function () {
        allSelect = document.querySelectorAll(".main-controls__select select");
        allInput = document.querySelectorAll(
          ".main-controls__input input[type = 'text']"
        );
    
        allInput.forEach((item) => {
          item.setAttribute("disabled", "");
        });
        allSelect.forEach((item) => {
          item.setAttribute("disabled", "");
        });
      },
      addDisabled: function () {
        allSelect = document.querySelectorAll(".main-controls__select select");
        allInput = document.querySelectorAll(
          ".main-controls__input input[placeholder='Количество экранов']"
        );
    
        allInput.forEach((item) => {
          item.removeAttribute("disabled");
        });
        allSelect.forEach((item) => {
          item.removeAttribute("disabled");
        });
      },

      reset: function () {
        this.addDisabled();
        this.screens = [];
        otherItemsPercent.forEach((item) => {
          const check = item.querySelector("input[type = checkbox]");
          check.checked = false;
        });
        let removeListScreen = (list) => {
          if (list.length !== 1) {
            list[list.length - 1].remove();
            listScreen = document.querySelectorAll(".screen");
            removeListScreen(listScreen);
          } else {
            allSelect = document.querySelectorAll(".main-controls__select select");
            allInput = document.querySelectorAll(
              ".main-controls__input input[placeholder='Количество экранов']"
            );
            allInput[0].value = "";
            allSelect[0].value = "";
          }
        };

        removeListScreen(listScreen);
        startButton.style.display = null;
        resetButton.style.display = "none";
        inputRange.value = 0;
        inputRangeValue.innerText = "0%";
        total.value = 0;
        inputCount.value = 0;
        inputCountOther.value = 0;
        inputFullCount.value = 0;
        inputRollbackCount.value = 0;
    },
    
start: function () {
    this.blockAttribute();
    this.addScreens();
    if (this.isError) {
      alert("Поля Тип экранов и Количество не могут быть пустыми!");
      console.log(this.isError);
        } else {
    this.addServices();
    this.addPrices();
    this.showResult();
    startButton.style.display = "none";
    resetButton.style.display = null;

        }
    },
}
 
appData.init()


