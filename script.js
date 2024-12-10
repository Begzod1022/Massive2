let text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit, Officiis, nostrum,";

    console.log(text.replaceAll(',', '.'));
    console.log(Math.random() * 500);

// Заменить все запятые на точки

// генерация рандомных чисел до 500

let arr1 = [0, 123, -3, 43, 22, -16, 12, 99, 100];
let max1 = Math.max(...arr1)
console.log(max1);

// достать наибольшее число с массива, сохранить в max

let arr2 = [10.45, 9.519, 85.56, 22, 6.26, 98.245, 15, 34.2];
let min1 = Math.min(...arr2)
console.log(Math.round(min1));

let max2 = Math.max(...arr2)
console.log(Math.round(max2));

console.log(max2 / min1);
// Достать наименьшее число с массива, округлить логически и сохранить в min  
// достать наибольшее число с массива, округлить вверх и сохранить в max
// поделить с остатком max на min, показать результат


let num1 = '10.4568313123132';
console.log(num1.slice(0, 6));

console.log(num1.length);

console.log(num1.slice(0, 2));

// 1. num1 переводим в string, оставляем только три цифры после точки: '10.456'
// 2. показать длину полученной строки 
// 3. полученную строку переводим в тип number оставляя лишь целое число (убрать все цифры после точки)