// document.querySelector('div').addEventListener('click', () => alert('Привет'))
// document.querySelector('div').addEventListener('click', () => console.log('Привет'))
// document.querySelector('input').addEventListener('change', () => console.log('Алексей'))
// document.querySelector('input').addEventListener('keyup', () => console.log(document.querySelector('input').value))

// const form = document.querySelector('form')         // находим форму
// form.addEventListener('submit', (event) => {        // вешаем событие на форму при нажатии кнопки submit
//     event.preventDefault()                          // говорим браузеру, чтобы он предотвратил поведение браузера по умолчанию то есть при нажатии кнопки submit страница не обновлялась
//     const input = form.querySelector('.string')     // находим наш input class string
//     console.log(input.value)                        // выводим в консоль значение введённого текста
//     input.value = ''                                // очищаем input
// })



// Задание 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

// const inputTag = document.querySelector('input')     // находим input
// const ulTag = document.querySelector('ul')           // находим список

// inputTag.addEventListener('keyup', (event) => {    // присваиваем событие keydown (после нажатия и отпускания клавиши в input)
//     const liTag = document.createElement('li')       // создаём тег li
//     liTag.innerText = event.key                      // записываем в поле тега li значение Нажатая клавиша в input
//     ulTag.appendChild(liTag)                         // добавляем в список тег li
// })



// Задание 2
// Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

// const inputTag = document.querySelector('input')       // находим input
// inputTag.addEventListener('keyup', () => {             // вешаем событие keyup на input при нажатии любой клавиши в поле 
//     console.log(inputTag.value)                        // выводим в консоль текущее значение input
// })



// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).

// const form = document.querySelector('form')         // находим форму
// const ulTag = document.querySelector('ul')          // находим список
// form.addEventListener('submit', (event) => {        // вешаем событие на форму при нажатии кнопки submit
//     event.preventDefault()                          // говорим браузеру, чтобы он предотвратил поведение браузера по умолчанию, то есть при нажатии кнопки submit страница не обновлялась
//     const input = form.querySelector('input')       // находим input внутри form
//     const liTag = document.createElement('li')      // создаём тег li
//     liTag.innerText = input.value                   // записываем в поле тега li текущее значение поля input
//     ulTag.appendChild(liTag)                        // добавляем в список тег li
//     input.value = ''                                // очищаем input
// })



// Задание 4
// Калькулятор. 
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.

// 1) решить с помощью if
// 2) решить с помощью evel (https://developer.mozilla.org/...)

// const form = document.querySelector('form')         // находим форму
// const input1 = document.getElementById('input1')    // находим input1
// const input2 = document.getElementById('input2')    // находим input2
// const select = document.querySelector('select')     // находим select
// const div = document.querySelector('div')           // находим div

// // 1) Решение с помощью if 
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const num1 = +input1.value
//     const num2 = +input2.value
//     const operator = select.value

// if (Number.isNaN(num1) || Number.isNaN(num2)) {
//     alert('Invalid numbers')
//     return
// }

//     let result 
//     if (operator === '+') {
//         result = num1 + num2
//     }
//     else if (operator === '-') {
//         result = num1 - num2
//     }
//     else if (operator === '/') {
//         result = num1 / num2
//     }
//     else if (operator === '*') {
//         result = num1 / num2
//     }

// switch(operator) {              // аналог if else
//     case '+':
//         result = num1 + num2
//         break
//     case '-':
//         result = num1 - num2
//         break
//     case '/':
//         result = num1 / num2
//         break
//     case '*':
//         result = num1 * num2
//         break
//     default:
//         alert('Invalid operator')
//         return
// }

//     div.innerText = `Result: ${result}`
// })

// // 2) Решение с помощью eval
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     div.innerText = eval(`${input1.value} ${select.value} ${input2.value}`)   
// })



// Задание 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.



 