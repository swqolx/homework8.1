// Оголоси змінні name, age, isStudent і виведи їх у консоль.
// const name1 = 'anastasiia'
// const age = 15
// const isStudent = ' true'
// console.log(name1);
// console.log(age);
// console.log(isStudent);


// Створи змінну price, змінну quantity і порахуй загальну вартість.

// const price = 100
// const quantity = 220
// const suma = price + quantity
// console.log(suma);


// Визнач тип кожної змінної за допомогою typeof.
// const text = "Lala"
// const number = 124
// const a = true
// console.log(typeof text );
// console.log(typeof number );
// console.log(typeof a );



// Створи змінну зі значенням null та undefined, виведи їх тип.
// const a = null
// const b = undefined
// console.log(typeof a);
// console.log(typeof b);


// Перевір, що станеться, якщо додати число до рядка.

// const num = "3"
// console.log(num);


// 🔹 2. Взаємодія з користувачем (prompt, alert, confirm)

// Запитай ім’я користувача та привітай його через alert.
// const userName = prompt('What is your name?')
// const helloUser = alert(`Hello ,${userName}`)

// Запитай два числа через prompt і виведи їх суму.
// const num1 = Number(prompt('number1'))
// const num2 = Number(prompt("number2"))
// const sum = num1 + num2
// alert(`${sum}`)


// Запитай вік користувача та виведи, чи він повнолітній.

// const userAge = Number(prompt("your age"))
// if(userAge >= 18){
//     alert(" повнолітній.")
// }else{
//     alert("eror")
// }

// Використай confirm() для підтвердження дії та виведи результат.
// const a = confirm("choose ok для підтвердження дії")
// console.log(a);


// Запитай число і виведи його тип (поясни, чому це string).
// const num = prompt("number")
// console.log( typeof num);


// 🔹 3. Основні оператори. Числа

// Обчисли середнє арифметичне трьох чисел.

// const num1 = 5
// const num2 = 6
// const num3 = 7
// const sum = (num1 + num2 + num3)/3
// console.log(sum);


// Перевір, чи число парне або непарне.
// const num = Number(prompt("number"))
// if(num % 2 === 0){
//     alert("true")
// }else{
//     alert("false")
// }

// Обчисли остачу від ділення одного числа на інше.
// const num1 = 33
// const num2 = 2
// const result = num1%num2
// console.log(result);


// Піднеси число до степеня.
// const num1 = 4
// console.log(Math.pow(num1 , 6));


// Знайди більше з двох чисел (без Math.max).
// const num1 =55
// const num2 =43
// if(num1 > num2){
//     alert("num1 is biggest number")
// }else{
//     alert("num2 is the biggest number")
// }

// 🔹 4. Рядки

// Створи рядок і виведи його довжину.
// const string = "javascript"
// console.log(string.length);


// Об’єднай ім’я та прізвище в один рядок.
// const name2 = "Anastasiia"
// const lastName = "mchedlishvili"
// const result = `${name2} ${lastName}`
// console.log(result);

// Заміни всі пробіли в рядку на -.
// const message = "nd wdh do ay rhe dkw fk"
// console.log(message.split(" ").join("-"));




// Перевір, чи містить рядок слово "JavaScript".
// const string = 'njnbhYVFjm JavaScript krm'
// console.log(string.includes("JavaScript"));


// Переведи рядок у верхній регістр.
// const text = "my name is nastya"
// console.log(text.toUpperCase());


// 🔹 5. Логічні оператори та if / else ---homework
//                                                    

// Перевір, чи число знаходиться в діапазоні від 10 до 50.
// const num = Number(prompt("random num"))
// if(num >= 10 & num <=50){
//     alert("true")
// }else{
//     alert("ërror")
// }

// Перевір логін і пароль (просте порівняння).
// const userPasword = prompt("enter your pssword")
// const userLogin = prompt("enter your login")
// if(userPasword.length >= 6 & userLogin.length >= 6){
//     alert("true")
// }else{
//     alert("false")
// }

// Якщо оцінка ≥ 60 — “здав”, інакше — “не здав”.

// const grade = Number(prompt("your grade"))
// if(grade >= 60){
//     alert("здав")
// }else{
//     alert("не здав")
// }

// Перевір, чи хоча б одне з двох чисел додатне.
// const num1 = Number(prompt("number 1"))
// const num2 = Number(prompt("number 2"))

// if(num1 >= 0 || num2 >= 0){
//     alert("true")
// }else {
//     alert("false")
// }

// Перевір, чи обидва числа парні.
//  const num1 = Number(prompt("number 1"))
// const num2 = Number(prompt("number 2"))

// if(num1 % 2 === 0 & num2 % 2 === 0){
//     alert("true")
// }else {
//     alert("false")
// }




// 🔹 6. switch та область видимості

// За номером дня (1–7) виведи назву дня тижня.
// const dayOfWeek = Number(prompt("number 1-7"))
// switch (dayOfWeek) {
//     case 1:
//         alert("monday")
//         break

//     case 2:
//         alert("vivtorok")
//         break

//     case 3:
//         alert("wendsday")
//         break

//     case 4:
//         alert("czetwerh")
//         break

//     case 5:
//         alert("friday")
//         break

//     case 6:
//         alert("sobota")
//         break

//     case 7:
//         alert("sunday")
//         break


//     default:
//         alert("error")
// }

// За оцінкою (A, B, C, D, F) виведи текстову характеристику.

// const yourGrade = prompt("A, B, C, D, F")

// switch(yourGrade){

//     case "A":
//         alert("very good")
//  break

//  case "B":
//     alert("good")
//     break

//     case "C":
//         alert("not bad")

//         break

//         case "D":
//             alert("bad")
//             break

//             case "F":
//                 alert("very bad")
//                 break

//                 default:
//                     alert("error")
// }

// Створи змінну всередині if і перевір її доступність ззовні.
// if(true){
//     const if1 = "lala"
// }
// console.log(if1);


// Поясни різницю між let і var на прикладі.
// if(true){
//     var a = "it works"
//     let b = "i'm not work"

// }
// console.log(a);
// console.log(b);



// Напиши програму з switch, яка працює як просте меню.

// 🔹 7. Цикли

// Виведи числа від 1 до 10.
// for(let i = 1; i <= 10;i++){
//     console.log(i);

// }

// Виведи всі парні числа від 1 до 50.
// const num = 50
// for(let i = 1;i <= num;i++){
//     if(i % 2 === 0){
//         console.log(i);

//     }
// }


// Порахуй суму чисел від 1 до 100.
// let sum = 0
// for(let i = 1;i <= 100;i++){
//     sum += i


// }
// console.log(sum);

// Виведи таблицю множення на 5.
// let num = 5
// let result = 0
// for(let i = 1;i <= 10;i++){
//     result = num * i
//     console.log(`${num} * ${i} = ${result}`);

// }



// Знайди перше число, яке ділиться на 7 (використай break).
// for(let i = 1; i <= 50;i++){
//     if(i % 7 === 0){
//         break
//     }
//     console.log(i);

// }


// 🔹 8. Масиви. Ітерація

// Створи масив з 5 імен та виведи кожне ім’я.
// const names = ["Nasta","Sofi","Mary","Nata","Lera"]
// for(let i = 0;i < names.length;i++){
//     console.log(names[i]);

// }

// Знайди найбільше число в масиві.
// const numbers = [33,42,12,93,44,2,13,]
// let max = numbers[0]
// for(let i = 0;i < numbers.length;i++){
// if(numbers[i] > max){
//     max = numbers[i]
// }

// }
// console.log(max);


// Порахуй суму елементів масиву.
// const numbers = [33,42,12,93,44,2,13,]
// let suma = 0
// for(let i = 0;i < numbers.length;i++){
//     suma += numbers[i]
// }

// console.log(suma);

// Видали всі непарні числа з масиву.
// const numbers = [33,42,12,93,44,2,13,]
// for(let i =0;i<numbers.length;i++){
//     if(numbers[i] % 2 === 0){
//         console.log(numbers[i]);

//     }

// }


// Створи двовимірний масив 3×3 і виведи всі елементи.
// const arr = [
//     [77,8,93],
//     [31,98,2],
//     [75,65,11]
// ]
// for(let i = 0;i < arr.length;i++){
//     for(let j = 0;j < arr[i].length;j++){
// console.log(arr[i] [j]);

//     }
// }


// 🔹 9. Методи масивів (бонус-практика)

// Розбий рядок "apple,banana,orange" у масив.
// const string = "apple,banana,orange"
// console.log(string.split(' '));



// З’єднай масив слів у речення.
// const arr = ['hello' , 'my', 'name', 'is','nastya']
// console.log(arr.join(' '));


// Перевір, чи є елемент у масиві (includes).
// const findElement = ['apple','kiwi','grape','corn','potato']
// console.log(findElement.includes('kiwi'));


// Додай елемент на початок і кінець масиву.
// const arr = ['apple','kiwi','grape','corn','potato']
// arr.unshift('mango')
// arr.push('tomato')
// console.log(arr);

// Видали перший і останній елемент.
// const arr = ['apple','kiwi','grape','corn','potato']
// arr.shift()
// arr.pop()
// console.log(arr);

// Скопіюй частину масиву за допомогою slice.
// const arr = ['apple','kiwi','grape','corn','potato']
// console.log(arr.slice(2,6));


// Видали елементи з середини масиву через splice.

// const arr = ['apple','kiwi','grape','corn','potato']
// const result = arr.splice(2,3)
// console.log(arr);


// Об’єднай два масиви.
// const arr1 = ['lolo','lulu']
// const arr2  = ['lala','lele']
// const result = arr1.concat(arr2)
// console.log(result);


// Знайди індекс елемента в масиві.
// const arr = ['apple','kiwi','grape','corn','potato']
// console.log(arr.indexOf('kiwi'));


// Перетвори масив слів у рядок з -.
// const arr = ['apple','kiwi','grape','corn','potato']
// console.log(arr.join("-"));

