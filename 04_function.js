// 1 Функции
//Function declaration
// function greet(name) {
//     console.log('Привет - ', name)    
// }

// Function Expression
// const greet2 = function greet2(name) {
//     console.log('Привет 2 - ', name)}
//greet ('Ната')
//greet2 ('Ната') 
//console.log(typeof greet)
//Q!console.dir(greet)

// 2 Анонимные функции
// let counter = -3
// const interval = setInterval(function() {
//     if (counter === 5) {
//         clearInterval(interval)
// }   else {
//     console.log(++counter)
// }
// }, 1000)

// 3  Стрелочные функции
// function greet(name) {
//     console.log('Привет - ', name)
// }
// function arrow(name) {
//     console.log('Привет - ', name)
// }
// arrow('Artem')

// const arrow2 = name => console.log('Привет - ', name)

// arrow2('Artem')

// const pow2 = num => num ** 2
// console.log(pow2 (5))

// 4 Параметры по умолчанию 
// const sum = (a=40, b=a*2) => a + b

// console.log(sum(41, 4))
// console.log(sum())

// function sumAll(...all) {
//     let result = 0
//     for (let num of all){
//         result += num
//     }
//     return result
// }
// const res = sumAll(1,2,3,4,5,6,7)
// console.log(res)

// // 5 Замыкание
// function creatMember(name) {
//     return function(lastName){
//         console.log(name + lastName)
//  }
// }

// const logWithlastName = creatMember ('Artem')
// console.log(logWithlastName('Shukalovich'))
// console.log(logWithlastName('Ivanov'))