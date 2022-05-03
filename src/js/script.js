/*
let counter = 0;

let user_type = prompt("Введите тип желаемого сайта");


let user_design = prompt("Введите тип дизайна сайта");



let user_adapt = prompt("Введите тип адаптивности сайта");


if (user_type == "визитка" || user_type == "Визитка") {
    counter += 2000;
} else if (user_type == "лендинг" || user_type == "Лендинг") {
    counter += 5000;
} else if (user_type == "магазин" || user_type == "Магазин") {
    counter += 10000;
};

if (user_design == "ретро" || user_design == "Ретро") {
    counter += 2000;
} else if (user_design == "классический" || user_design == "Классический") {
    counter += 5000;
} else if (user_design == "информативный" || user_design == "Информативный") {
    counter += 10000;
};

if (user_adapt == "резиновый" || user_adapt == "Резиновый") {
    counter += 2000;
} else if (user_adapt == "смешанный" || user_adapt == "Смешанный") {
    counter += 5000;
} else if (user_adapt == "адаптивный" || user_adapt == "Адаптивный") {
    counter += 10000;
};

alert(counter);
console.log(counter);*/

const menuLinks = document.querySelectorAll('.links[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", gotoL);
    });
    
    function gotoL(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockV = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.menu').offsetHeight;
            
            window.scrollTo({
                top: gotoBlockV,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}


document.getElementById("trigger").onclick = function() {
    open();
};

function open() {
    document.getElementById("menub").classList.toggle("show");
    document.getElementById("trigger").classList.toggle("open");
}

$('#feedbacks').slick();

var time = 2,
  cc = 1;
$(window).scroll(function() {
  $('#counter').each(function() {
    var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 200) {
      if (cc < 2) {
        $('div').each(function() {
          var
            i = 1,
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this),
            int = setInterval(function() {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});
