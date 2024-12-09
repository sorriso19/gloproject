"use strict";

const body = document.querySelector('.body')
const books = document.querySelector('.books')
const elems = document.querySelectorAll('.book')
const ad = document.querySelector('.adv')
const lists = document.querySelector('ul')
const heading = document.querySelectorAll('h2')
const book6 = document.querySelectorAll('.book')

const links = document.querySelectorAll('a')
let bookList, node






elems[2].before(elems[0])
elems[5].after(elems[2])
elems[5].before(elems[3])

document.body.style.backgroundImage = "url(./image/adv.jpg)";

ad.remove()

node = bookList[4].querySelector("a")
node.innerText = node.innerText.replace('Пропопипы', 'Прототипы')


const newElem = document.createElement('li')
newElem.textContent = 'Глава 8: за пределами ES6'
elems[2].classList.add('book6')
bookList[2].querySelector('ul').lastElementChild.insertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6</li>')