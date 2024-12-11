"use strict";

const title = document.getElementsByTagName('h1')
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