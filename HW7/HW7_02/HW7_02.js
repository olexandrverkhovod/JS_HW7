// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции.
// - Распечатка чека на экран.

let arr = [
    {
        item: "potato",
        count: 3,
        cost: 10
    },
    {
        item: "tomato",
        count: 4,
        cost: 15
    },
    {
        item: "pears",
        count: 5,
        cost: 20
    },
    {
        item: "beetroot",
        count: 6,
        cost: 5
    }
];

function listPrint(arr) {
    let buff = "<ul><br>Ваш чек<br>------------";
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i].item;
        buff += `<li>name : ${item[0].toUpperCase() + item.slice(1)}</li>`;
        buff += `<li>count : ${arr[i].count}</li>`;
        buff += `<li>cost : ${arr[i].cost} &#8372;</li><br>`;
    }
    buff += "------------<br></ul>";
    document.getElementById('box').innerHTML = buff;
}

function change(arr) {
    let item = prompt("Введите название продукта для смены цены").toLowerCase(),
        cost = +prompt("Введите сумму на которую произойдет замена");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].item === item) {
            arr[i].cost = cost;
            break;
        }
    }
    listPrint(arr);
}


// - Подсчет общей суммы покупки.

function sum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].count * arr[i].cost;
    }
    document.getElementById('box1').innerHTML = `Сумма ваших покупок составляяет - ${sum} &#8372`;
}

// - Получение самой дорогой покупки в чеке.

function biggest(arr) {
    let biggest = [];
    for (let i = 0; i < arr.length; i++) {
        biggest.push(arr[i].count * arr[i].cost);
    }
    document.getElementById('box1').innerHTML = `Самя дорогая покупка - ${Math.max(...biggest)} &#8372`;
}

// - Подсчет средней стоимости одного товара в чеке.

function average(arr) {
    let cost = 0;
    for (let i = 0; i < arr.length; i++) {
        cost += arr[i].count * arr[i].cost;
    }
    cost /= arr.length;
    document.getElementById('box1').innerHTML = `Средняя стоимость товара в чеке - ${cost.toFixed(2)} &#8372`;
}