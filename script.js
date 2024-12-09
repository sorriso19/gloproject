"use strict";

const body = document.querySelector('.body')
const elems = document.querySelectorAll('.book')
const ad = document.querySelector('.adv')
const lists = document.querySelectorAll('li')
const heading = document.querySelectorAll('h2')
const li = document.querySelector('book > li')




elems[2].before(elems[0])
elems[5].after(elems[2])
elems[5].before(elems[3])

document.body.style.backgroundImage = "url(./image/adv.jpg)";
 
ad.remove()

elems[2].classList.add('book6')

const newElem = document.createElement('li')
newElem.textContent = 'Глава 8: за пределами ES6'
newElem.classList.add('new1')








// .replaceWith('Книга 3. this и Пропотипы Объектов')

