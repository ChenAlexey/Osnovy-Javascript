// Задание 1
// Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу: Привет, Николай! (вместо Николай должно показываться имя, которое ввел пользователь)

// const name = prompt('Введите своё имя:')
// alert(`Привет, ${name}`)


// Задание 2
// Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число. Выведите в консоль результат.

// const num = +prompt('Введите число:')
// const power = +prompt('Введите степень, в которую нужно возвести это число:')
// console.log(num ** power)


// Задание 3
// Пройдите 5 уровней игры ЗДЕСЬ (до функций).


// Сокращенная запись арифметики с присваиванием

// n = n + 5 можно сократить так: n += 5
// n = n – 5 можно сократить так: n –= 5
// n = n / 5 можно сократить так: n /= 5
// n = n * 2 можно сократить так: n *= 2
// n = n + 1 можно сократить так: n++
// n = n – 1 можно сократить так: n––


// Задание 4
// Создать произвольную переменную, присвоить ей произвольное строковое значение (например, "my text"). C помощью if написать условие: если значение переменной равно “some text”, присвоить ей значение “another text”, иначе - “some text”.

// let str = "my text"
// if (str === "some text") {
//     str = "another text"
// }
// else {
//     str = "some text"
// }
// console.log(str)


// Задание 5
// Создать переменную и присвоить ей число.
// Записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

// let a = -2
// if (a === 0) {
//     a = 1
// }
// else if (a < 0) {
//     a = 'less then zero'
// }
// else {
//     a *=10
// }
// console.log(a)


// Задание 6
// Запросите у пользователя число и запишите его в переменную. 
// (Не забывайте, что от пользователя мы всегда получаем строку).
// Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5, то результат будет '0', если больше -  '1'. Выведите результат в консоль.

// const num = +prompt('Пожалуйста введите любое число')
// let result
// if (num < 5) {
//   result = '0'
// }
// else if (num > 5) {
//    result = '1'
// }
// else {
// }
// console.log(result)


// Задание 7
// Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).
// * предусмотреть вариант ввода одинаковых чисел

// const num1 = +prompt('Пожалуйста введите первое число')
// const num2 = +prompt('Пожалуйста введите второе число')
// if (num1 < num2) {
//     console.log('Большее число: ' + num2)
// }
// else if (num1 > num2) {
//     console.log('Большее число: ' + num1)
// }
// else {
//     console.log('Вы ввели одинаковые числа: ' + num1)
// }


// Задание 8
// Определить, является ли введенное пользователем число num1 кратным введенному числу num2. Обе переменные запрашиваем у пользователя, ответ выводим в консоль.

// const num1 = +prompt('Пожалуйста введите первое число')
// const num2 = +prompt('Пожалуйста введите второе число')
// if (num1 % num2 === 0) {
//     console.log(`Число ${num1} является кратным числу ${num2}`)
// }
// else {
//     console.log(`Число ${num1} не является кратным числу ${num2}`)
// }


// Задание 9
// Запросить у пользователя средний балл, записать в переменную.
// Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!", если 5-8 - "Неплохо, но давай еще поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).

// const num = +prompt('Пожалуйста введите свой средний балл')
// if (num >= 1 && num <= 4) {
//     console.log('Двоечник иди учись!')
// }
// else if (num >= 5 && num <= 8) {
//     console.log('Неплохо, но давай ещё поднажмём!')
// }
// else if (num >= 9 && num <= 10) {
//     console.log('Ого, да ты настоящий отличник!')
// }
// else {
//     console.log('Введите корректное значение среднего балла (от 1 до 10)!')
// }


// Задание 10
// Запросить у пользователя ответы на 2 вопроса:
// - балл за экзамен (от 0 до 100)
// - количество выполненных проектов (от 0 и больше)
// Вывести в консоль общий выпускной балл в соответствии с этими значениями:
// - 100, если балл за экзамен более 90 или количество проектов более 10.
// - 90, если балл за экзамен более 75 и количество проектов не менее 5.
// - 75, если балл за экзамен более 50 и количество проектов не менее 2.
// - 0 во всех других случаях.

// const num1 = +prompt('Пожалуйста введите свой средний балл за экзамен (от 0 до 100)')
// const num2 = +prompt('Пожалуйста введите количество выполненных проектов (от 0 и больше)')
// let result
// if (num1 > 90 || num2 > 10) {
//     result = 100
// }
// else if (num1 > 75 && num2 >= 5) {
//     result = 90
// }
// else if (num1 > 50 && num2 >= 2) {
//     result = 75
// }
// else {
//     result = 0
// }
// console.log(result)


// Задание 11
// День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.
// Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt. Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.

// const days = +prompt('Введите количество дней аренды')
// let rent
// if (days >= 7) {
//     rent = days * 40 - 50
//     console.log(`Общая стоимость аренды автомобиля составит: $${rent}`)
// }
// else if (days >= 3) {
//     rent = days * 40 - 20
//     console.log(`Общая стоимость аренды автомобиля составит: $${rent}`)
// }
// else if (days >=1 && days < 3){
//     rent = days * 40
//     console.log(`Общая стоимость аренды автомобиля составит: $${rent}`)
// }
// else {
//     console.log('Введите корректное значение дней аренды (от 1 и более)!')
// }
