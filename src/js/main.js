/*Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».*/

// let login = prompt('Kto tam?', ''); 

// if (login == 'Admin') {
//     let password = prompt('Parol', '');

//     if (password == 'I glava') {
//         alert('Hello');
//     } else if (password == '' || password == null) {
//         alert('otmena');
//     } else {
//         alert('Neverno');
//     }


// } else if (login == '' || login == null) {
//     alert('otmena');
// } else {
//     alert('Neverno');
// }


/*Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case. Решить с помошью switch case*/

// let num = prompt('Vvedite chislo', '');

// switch (num) {
//     case '1':
//         alert('Zima');
//         break;
//     case '2': 
//         alert('Vesna');
//         break;
//     case '3':
//         alert('Leto');
//         break;
//     default: 
//         alert('Vvedite ot 1 do 3')
// }

/*Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.*/

// let a = prompt('Vvedite chislo a', '');
// let b = prompt('Vvedite chislo b', '');

// if (a > 2 && a < 11 || b >= 6 && b < 14) {
//     alert('Verno');
// } else {
//     alert('Neverno');
// }

/*Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.*/

// let a = +prompt('Vvedite chislo a', '');
// let b = +prompt('Vvedite chislo b', '');

// if (a <= 1 && b >= 3) {
//     alert(a + b);
// } else {
//     alert(a - b);
// }

/*Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.*/

// let arr = [2,3,4,5];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//    sum *= arr[i];
//    console.log(sum);
// } 

