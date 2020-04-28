// Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

let arr = [
    {
        font_size: "15px",
        color: "gray",
        text_decoration: "wavy"
    },
    {
        font_size: "25px",
        color: "green",
        text_decoration: "underline"
    },
    {
        font_size: "35px",
        color: "red",
        text_decoration: "overline"
    }
];


function stylePrint(arr) {

    let i = 0;
    arr.forEach(element => {
        i += 1;
        let newObject = {};
        for (const key in element) {
            let chngKey = "";
            if (key != "color") {
                let arr = key.split("_");
                chngKey = arr[0] + "-" + arr[1];
                newObject[chngKey] = element[key] + ";";
            } else {
                newObject[key] = element[key] + ";";
            }
        }
        element = newObject;
        arr.push(element);
    });
    arr = arr.slice(i);

    console.log(arr);
    let text = prompt("введите текст для вывода на экран");
    arr.forEach(element => {
        let buff = `<p style = "`;
        for (const key in element) {
            buff += `${key + ":" + element[key]}`;
        }
        buff += `"> ${text} </p><br><br>`;
        document.write(buff);
    });
}