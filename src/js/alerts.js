
let counter = 0;

let user_type = prompt("Введите тип желаемого сайта");



let user_design = prompt("Введите тип дизайна сайта");



let user_adapt = prompt("Введите тип адаптивности сайта");


if (user_type == "визитка" || user_type == "Визитка") {
    counter += 2000;
} else if (user_type == "лендинг" || user_type == "Лендинг") {
    counter += 5000;
} else if (user_type == "магазин" || user_type == "Магазин") {
    cunter += 10000;
};

if (user_design == "ретро" || user_design == "Ретро") {
    counter += 2000;
} else if (user_design == "классический" || user_design == "Классический") {
    counter += 5000;
} else if (user_design == "информативный" || user_design == "Информативный") {
    cunter += 10000;
};

if (user_adapt == "резиновый" || user_adapt == "Резиновый") {
    counter += 2000;
} else if (user_adapt == "смешанный" || user_adapt == "Смешанный") {
    counter += 5000;
} else if (user_adapt == "адаптивный" || user_adapt == "Адаптивный") {
    cunter += 10000;
};

alert(counter);
console.log(counter);