// Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

let arr = [
    {
        item: "potato",
        count: 3,
        status: true
    },
    {
        item: "tomato",
        count: 4,
        status: false
    },
    {
        item: "pears",
        count: 5,
        status: true
    },
    {
        item: "beetroot",
        count: 6,
        status: false
    }
];

// - Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

function listPrint(arr) {
    arr.sort(function (a, b) {
        return b.status - a.status
    });

    let buff = "<ul>";
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i].item;
        if (arr[i].status == true) {
            buff += `<li>name : ${item[0].toUpperCase() + item.slice(1)}</li>`;
            buff += `<li>count : ${arr[i].count}</li><br>`;
        } else {
            buff += `<li class = "not_buy">name : ${item[0].toUpperCase() + item.slice(1)}</li>`;
            buff += `<li class = "not_buy">count : ${arr[i].count}</li><br>`;
        }
    }
    buff += "</ul>";
    document.getElementById('box').innerHTML = buff;
}

// - Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.

function addPurchase(arr) {
    let item = prompt("Введите название покупки").toLowerCase(),
        count = +prompt("Введите количество единиц"),
        triger = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].item === item) {
            arr[i].count += count;
            triger = false;
            break;
        } else {
            triger = true;
        }
    }
    if (triger == true) {
        arr.push({ "item": `${item}`, "count": count, "status": false });
    }
    listPrint(arr);
}

// - Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

function bought(arr) {
    let item = prompt("Введите название покупки").toLowerCase();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].item === item) {
            arr[i].status = true;
        }
    }
    listPrint(arr);
}

// - Удаление продукта.

function deletePurchase(arr) {
    let item = prompt("Введите название покупки").toLowerCase();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].item === item) {
            arr.splice(i, 1);
        }
    }
    listPrint(arr);
}