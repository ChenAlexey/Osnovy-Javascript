// Урок 7 BOM и DOM

// Задание 1
// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// Выведите в консоль строку:
// На компьютере с ОС ... с помощью браузера ... я открыл страничку ... 
// (необходимые значения добавьте с помощью BOM)
// console.log(location.href)          // показывает текущий URL
// console.log(navigator.userAgent)    // информация о текущем браузере
// console.log(navigator.platform)     // информация о платформе (может помочь в понимании того, в какой ОС открыт браузер – Windows/Linux/Mac и так далее).
// console.log(`На компьютере с ОС ${navigator.platform} с помощью браузера ${navigator.userAgent} я открыл страничку ${location.href}`)



// Задание 2
// В файле html есть разметка (добавьте ее в свой файл html):
// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>
// 2.1. Вывести в консоль каждое из имен (содержимое каждого li).
// 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

// const allLi = document.querySelectorAll('li')
// console.log(allLi)
// for (element of allLi) {          //  2.1. Вывести в консоль каждое из имен (содержимое каждого li).
//     console.log(element.innerText)
// }

// let i = 0
// for (element of allLi) {          // 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)
//     console.log(element.innerText = i)
//     i += 1
// }

// const liTags = document.querySelectorAll('#list li')         2.1. Вывести в консоль каждое из имен (содержимое каждого li).
// liTags.forEach(tag => {
//      console.log(tag.innerText)
// })

// liTags.forEach((tag, index) => {         // 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)
//     tag.innerText = index
// })



// Задание 3
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
// const elementsRemove = document.querySelectorAll('.forRemove')
// elementsRemove.forEach(tag => tag.remove())



// Задание 4
// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.
// const paragraph = document.createElement('p')
// paragraph.innerText = 'Новый абзац 1'
// paragraph.style.fontSize = '36px'
// paragraph.style.fontWeight = 'bold'
// document.body.appendChild(paragraph)



// Задание 5
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.
// function tagGenerator (tagName, color, text) {
//     const newTag = document.createElement(tagName)
//     newTag.style.color = color
//     newTag.innerText = text
//     return newTag
// }
// const tag1 = tagGenerator('a', 'pink', 'Ссылка')
// const tag2 = tagGenerator('h2', 'red', 'Заголовок 2')
// const tag3 = tagGenerator('div', 'yellow', 'Div')
// document.body.append(tag1, tag2, tag3)



// Задание 6
// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.
  
// const select = document.querySelector('select')
// for (let i = 1960; i < 2021; i++) {
//     const option = document.createElement('option')
//     option.innerText = i
//     option.value = i
//     select.appendChild(option)
// }



// Задание 7
// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:
// const clients = [
// {name: "Женя", order: true},
// {name: "Кристина", order: true},
// {name: "Павел", order: false},
// {name: "Виолетта", order: false},
// {name: "Костя", order: true}
// ]

// // Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// // - Клиент Женя оплатил заказ
// // - Клиент Павел отменил заказ
// // ... остальные li с контентом

// // Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.
// const ulTag = document.getElementById('list')
// clients.forEach((client) => {
//     const litag = document.createElement('li')
//     litag.innerText=`Клиент ${client.name} ${client.order ? 'оплатил' : 'отменил'} заказ`
//     ulTag.appendChild(litag)
// })



// Задание 8
// Есть массив ссылок:
// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY
// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
// const divTag = document.createElement('div')        // 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// divTag.style.backgroundColor = 'lightblue'
// divTag.style.padding = '20px'
// linksArr.forEach((link) => {             // 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
//     aTag.href = link                     // c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
//     const aTag = document.createElement('a')
//     aTag.innerHTML = `${link}<br>`
//     aTag.target = '_blank'               // При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
//     divTag.appendChild(aTag)
// })
// document.body.appendChild(divTag)        // 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY



// Задание 9*
// Есть массив объектов с полями name, age. Например:

// Создать в html таблицу (table).
// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.

// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.
// const users = [
//     {name: 'Mark', age: 12},
//     {name: 'Olga', age: 30},
//     {name:'Tom', age: 25},
//     {name:'Den', age: 43}
//     ]
// const tBody = document.getElementById('tBody')
// users.forEach((user) => {
//     const tr = document.createElement('tr')
//     const td1 = document.createElement('td')
//     td1.innerText = user.name
//     td1.style.color = 'red'
//     const td2 = document.createElement('td')
//     td2.innerText = user.age
//     td2.style.color = 'blue'
//     tr.append(td1, td2)
//     tBody.appendChild(tr)
// })



// Задание 10
// Есть верстка: https://teenscool1.notion.site...
// С помощью JavaScript:
// 1) Найти в коде список ul и добавить ему класс “list”.
// 2) На li через один (начиная с самого первого) установить класс “item”
// 3) На все ссылки в примере установить класс “custom-link”

// const ulTag = document.querySelector('ul')       // 1) Найти в коде список ul
// console.log(ulTag)
// ulTag.className = 'list'             // добавить ему класс “list”.

// const liTags = document.querySelectorAll('li')
// console.log(liTags)
// for (i = 1; i <= liTags.length; i += 2) {        // 2) На li через один (начиная с самого первого) установить класс “item”
//     liTags[i].classList.add('item')
// }

// const aTags = document.querySelectorAll('a')     //  3) На все ссылки в примере установить класс “custom-link”
// console.log(aTags)
// aTags.forEach(link => {
//     link.classList.add('custom-link')
// })