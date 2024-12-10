"use strict";

const body = document.querySelector('.body')
const books = document.querySelectorAll('.book')
const ad = document.querySelector('.adv')
const listItems = document.querySelectorAll('li')
const title = books[4].querySelector('a')
const newListItems = books[2].querySelectorAll('li')

title.textContent = "Книга 3. this и Прототипы Объектов";

listItems[7].after(listItems[2])
listItems[3].after(listItems[6])
listItems[6].after(listItems[8])
listItems[2].before(listItems[9])

listItems[43].after(listItems[45])
listItems[52].before(listItems[48])
listItems[48].before(listItems[50])
listItems[49].before(listItems[55])
listItems[54].before(listItems[51])



books[2].before(books[0])
books[5].after(books[2])
books[5].before(books[3])

document.body.style.backgroundImage = "url(./image/adv.jpg)";
 
ad.remove()

const newListItem = document.createElement('li')
newListItem.textContent = 'Глава 8: за пределами ES6'
books[2].insertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6</li>')
books[2].append(newListItems[9])


console.log(listItems);
console.log(books);
console.log(newListItems);