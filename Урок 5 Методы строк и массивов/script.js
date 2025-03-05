// Задание 1
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обработайте случай, если не было введено два параметра.
// Примеры результатов вызова функции:
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра

// function sum (num1, num2) {
//     if (arguments.length !== 2) {
//         return 'Введите 2 параметра'
//     }
//     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         return 'Введите пожалуйста 2 числа'
//     }
//     return num1 + num2
// }
// console.log(sum(2,4))



// Задание 2
// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"
// function square(a) {
//   console.log(a * a)
// }
// square(10) // 100
// square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

// function square(a) {
//     if (arguments.length !== 0) {
//         console.log(a * a)
//         return
//     }
//     console.error('Uncaught Error: Функция "square" не может быть вызвана без аргумента')
// }
// square(10) // 100
// square()
// square()
// square(1)
// square('aaaa')



// Задание 3
// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0).
// Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.

// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }
// // function getRandomRGB (min, max) {
// //     return (`rgb(${getRandomInteger(min, max)},${getRandomInteger(min, max)},${getRandomInteger(min, max)})`)
// // }
// // console.log(getRandomRGB(0, 255))
// const guessTheNumber = ()



// Задание 4
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива - forEach или map.

// const arr = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"]
// const newArr = []
// function copyArr (array) {           // Вариант через forEach
// array.forEach(function(element) {
//     newArr.push(element)
// })
// }
// copyArr(arr)
// console.log(newArr) 

// function copyArr(arr) {                  // Вариант через map
//     return arr.map(element => element) 
// }
// const newArr = copyArr(arr) 
// console.log(arr)
// console.log(newArr) 



// Задание 5
// Напишите функцию, которая принимает массив имен и возвращает новый массив, в котором каждое имя будет иметь приставку "Hello, "

// const arr = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"]
// const newArr = []
// function copyArr (array) {
// array.forEach(function(element) {
//     newArr.push(`Hello, ${element}`)
// })
// }
// copyArr(arr) 
// console.log(newArr) 



// Задание 6
// Напишите функцию, которая принимает массив объектов пользователей и возвращает новый массив, содержащий только их имена.

// const arr = [{name: 'Alexey', status: 'student'}, {name: 'Olzhas', status: 'teacher'}, {name: 'Tomiris', status: 'student'}] 
// function copyName(arr) {                  // Вариант через map
//     return arr.map(element => element.name) 
// }
// const newArr = copyName(arr) 
// console.log(arr)
// console.log(newArr) 



// Задание 7
// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
// Проверить работу функции можно на объекте:

// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: 'string',
//   d: 12,
// }
// let sum = 0
// function sumObjectValues (arr) {
//     for (element in arr) {
//         if (typeof arr[element] === 'number') {
//             sum += arr[element]
//         }    
//     }
//     return sum
// }
// sumObjectValues(objectWithNumbers)
// console.log(sum)



// Задание 8
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк.

// function ucFirst(str) {
//   return str[0].toUpperCase() + str.slice(1)
// }
// console.log(ucFirst('alexey'))



// Задание 9
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

// function checkSpam(str) {
//     const lowerCaseText = str.toLowerCase()
//     return (lowerCaseText.includes('badword') || lowerCaseText.includes('xxx'))
// }
// console.log(checkSpam('Hello, BadWord'))
// console.log(checkSpam('Hello, XXX'))
// console.log(checkSpam('Hello, xxX'))
// console.log(checkSpam('Hello, BADWORD'))
// console.log(checkSpam('Hello, Alexey'))



// Задание 10
// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет, Женя» -> «янеЖ ,тевирп»
// Обратите внимание: метод reverse существует только у массивов.

// 1 Способ 
// function reverseStr(str) {
// return strings.split('').reverse().join()
// }
// console.log(reverseStr('привет, Женя'))

// 2 Способ через цикл
// function reverseStr(str) {
//     let reverseStr = ''
//     for (let i = str.length - 1; i >= 0; i--) {   // обратный цикл
//         reverseStr += str[i]
//     }
//     console.log(reverseStr)
// }
// reverseStr('привет, Женя')



// Задание 11
// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 


// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
// MAN: Manchester Piccadilly
// Вывести эти строки в консоль
// ПОДСКАЗКА:

// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк

// let stations = [
//     'MAN675847583748sjt567654;Manchester Piccadilly', 
//     'GNF576746573fhdg4737dh4;Greenfield',
//     'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//     'SYB4f65hf75f736463;Stalybridge',
//     'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
//     ];
    
// for (element of stations) {                         // запускаем цикл for of, вытаскивая элементы массива
//     const stationCode = element.slice(0, 3)           // извлекаем код станции, сохраняя его в новой переменной
//     const stationName = element.slice(element.indexOf(';')+1)       // извлекаем название станции (предварительно найдя номер индекса символа ;) и сохраняем в новой переменной
    // console.log(`${stationCode}: ${stationName}`)    //  выводим в консоль строку равную сумме двух новых переменных
// }



// Задание 12
// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
// Пример:
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// ПОДСКАЗКА
// - создать новый массив
// - обойти исходный массив, если элемент отсутствует в новом - добавлять его в новый. Таким образом в новый добавятся только уникальные.
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// function unique(arr) {
//     const newArr = []              // создаём новый пустой массив
//     for (element of arr) {       // через цикл обращаемся к каждому элементу массива
//         if (!newArr.includes(element)) newArr.push(element)    //  проверяем есть ли в наличии данный элемент в новом массиве и добавляем элемент при его отсутствии
//     }
//     return newArr
// }
// console.log(unique(strings))       // должен вывести "кришна, харе, :-O"



// Задание 13
// Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и сохранила данные в массиве (по одному массиву для каждой девочки). На данный момент им просто интересно узнать, является ли кошка взрослой или котёнком.
// Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.
// Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) и выполняет следующие действия:
// 1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек! Поэтому удалите возраст собак из Жениного массива.
// 2. Создайте общий массив с данными Жени (исправленными) и Юли.
// 3. Для каждой кошки этого общего массива выведите в консоль текст:
// - если кошка взрослая -  Кошка № 1 взрослая, ей 6 лет
// - если котёнок - Кошка № 2 ещё котёнок
// 4. Вызовите функцию для двух наборов тестовых данных.
// Тестовые данные:
// 1.  Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
// Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
// 2.  Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
// Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]
// В задании необходимо использовать методы массивов: forEach, slice, concat
// const Jane1 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
// const July1 = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
// const Jane2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
// const July2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]
// function verifyCats (catsJane, catsJulia) {
//     const newCatsJane = catsJane.slice(1, -1)
//     console.log(newCatsJane)
//     const allCats = newCatsJane.concat(catsJulia)
//     for (element in allCats) {
//         if (allCats[element] >= 2) {
//             console.log(`кошка номер ${+(element)+1} взрослая, ей ${allCats[element]} лет`)       // как начать счёт кошки с 1, а не с 0?!
//         }
//         else {
//             console.log(`кошка номер ${+(element)+1} ещё котёнок`)        // как начать счёт кошки с 1, а не с 0?!
//         }
//     }
// }
// verifyCats(Jane1, July1)
// verifyCats(Jane2, July2)


// Задание 14
// Решить 4 задание из прошлой темы, используя метод filter
// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]
// let arr = [5, 4, 3, 8, 0]
// function filterFor(arr, a) {
//     const newArr = arr.filter (item => item >= a)
//     return newArr
// }
// console.log(filterFor(arr, 5))
// console.log(filterFor(arr, 10))
// console.log(filterFor(arr, 3.11))



// Задание 15
// Описать функцию, которая принимает массив строк и возвращает массив, содержащий только строки более 3-х символов. Проверить работу функции на примере:  ['yes', 'hello', 'no', 'easycode', 'what'].
// function filterFor(arr) {
//     return arr.filter (item => item.length > 3)
// }
// console.log(filterFor(['yes', 'hello', 'no', 'easycode', 'what']))



// Задание 16
// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
// ПОДСКАЗКА. Для правильной сортировки метод sort принимает функцию, параметры которой a и b - это элементы массива. В данной задаче элементы массива, то есть параметры a и b, сами являются массивами и обладают всеми свойствами массивов.
// const arr = [ [14, 45], [1], ['a', 'c', 'd']]
// const newArr = arr.sort((a, b) => a.length - b.length)   // вариант 1
// console.log(newArr)
// const sortedArr = arr.sort((a, b) => {                   // вариант 2
//      if (a.lenght > b.lenght) {
//          return 1
//      }
//      if (a.lenght < b.lenght) {
//          return -1
//      }
//      return 0
// })
// console.log(sortedArr)



// Задание 17
// Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:
// 1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7. (сделать через map)
// 2. Исключает всех кошек младше 18 человеческих лет. (сделать через filter)
// 3. Возвращает средний человеческий возраст для всех взрослых кошек. (сумму для среднего посчитать через reduce)
// Вызовите функцию для обоих наборов тестовых данных.
// Тестовые данные:
// 1: [7, 3, 2, 4, 1, 15, 8, 1, 9, 2]
// 2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]
// В задании необходимо использовать методы массивов: map, filter, reduce

// const catAges1 = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2]
// const catAges2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]
// function getAverageHumanAge (cats) {
//     const humanAge = cats.map(element => element <= 2 ? element = element * 10 : element = element * 7)    // задание 1
//     console.log(humanAge)
//     const oldCats = humanAge.filter(element => element >= 18)             // задание 2
//     console.log(oldCats)
//     console.log(oldCats.reduce((acc, element) => acc+element/oldCats.length, 0))      // задание 3
// }
// getAverageHumanAge(catAges1)
// getAverageHumanAge(catAges2)
