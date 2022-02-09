//1 Переменные
//const LastName = 'Shukalovich'
//let age = 26
//const firstName = 'Artem'
//const isProgrammer = true
//age = 32
//console.log(isProgrammer)

//2 Мутирование
//console.log('Имя человека: ' + LastName + ', а возраст человека: ' + age)
//console.log(age.toString)
//alert('Имя человека: ' + LastName + ', а возраст человека: ' + age)

 //const LastName = prompt('Введите фамилию')
// alert(firstName + ' ' + LastName)

// 3 Операторы
//let currentYear = 2022
//const birthYear = 1989

//const age = currentYear + birthYear

//const a = 10
//const b = 5

//let c = 32
//c = c + a
// c += a
//c -= a
//c *= a
//c /= a

//console.log(a + b)
//console.log(a - b)
//console.log(a * b)
//console.log(a / b)
//console.log(++currentYear)
//console.log(--currentYear)
//console.log(c)

// 4 Типы данных
// const isProgrammer = true
// const name = 'Artem'
// const age = 32
// let x
// null
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null) 

// 5 Приоритет операторов
// const fullAge = 32
// const birthYear = 1989
// const currentYer = 2022
// // > < >= <=
// const isFullAge = (currentYer - birthYear) >= fullAge
// console.log(isFullAge)

// 6 Условные операторы
// const courseStatus = 'fail' //ready, fail, pending
// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// }
// else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в процессе разработки')
// }
// else {
//     console.log('Курс не получился') 
// }
// const num1 = 42 // number
// const num2 = '42' // string
// console.log(num1 === num2)
 
//  const isReady = true

// if (isReady) {
//     console.log('Все готово')
// }
//     else {
//      console.log('Все не готово')
//     }
// Тернарное выражение
// isReady ? console.log('Все готово') : console.log('Все не готово')

// 7   Булевая логика 
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators#%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// 8 Функции 

// function calculateAge(year) {
//     return 2022 - year
// }

//const myAge = calculateAge(1989)

//console.log(calculateAge(1989))
//console.log(calculateAge(2001))
//console.log(calculateAge(1998))

// function loginfoAbout(name, year) {
//     const age = calculateAge(year)

//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     }   else {
//     console.log('Вообще-то это уже будущее!')
//     }
// }

// loginfoAbout('Artem', 1989)
// loginfoAbout('Victor', 1999)
// loginfoAbout('Artem', 2023)

// 9 Массивы
// const cars = ['BMW','Mercedes','Audi'] 
// //console.log(cars)
// //const cars = new Array('BMW','Mercedes','Audi')  
// console.log(cars.length)
// console.log(cars[0])
// console.log(cars[3])
// console.log(cars[2])

// cars[0] = 'Porsche'
// cars[cars.length] = 'BMW'
// console.log(cars)

// // 10 Циклы
// const cars = ['BMW','Mercedes','Audi', 'Porshe'] 

// //     for (let i = 0; i < cars.length; i++) {
// //     const car = cars[i]
// //     console.log(car)
// // }

// for (let car of cars) {
//     console.log(car)
// }

// 11 ОБъекты
// const person = {
//     firstName: 'Artem',
//     lastName: 'Shukalovich',
//     year: 1989,
//     languages: ['Ru' , 'En' , 'De'],
//     hasWife: false,
//     greet: function() {
//         console.log('greet from person')
//     }
// }

// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'hasWife'
// console.log(person[key])
// person.hasWife = true
// console.log(person)

// person.greet()

