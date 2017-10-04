$('#question').click(function() {
    if (!fromLanguage || !toLanguage) {
        return;
    }
    var index = Math.floor(Math.random() * questions.length);
    var questionObject = questions[index];
    if (prompt(questionObject[fromLanguage]) == questionObject[toLanguage]) {
        correct();
        points++;
    } else {
        inCorrect();
        points--;
    }
    localStorage.setItem('points', points);
    updatePoints();
});

$('.from-language a').click(function(e) {
    e.preventDefault();
    if ($(this).attr('data-language') != toLanguage) {
        $('.from-language a').removeClass('active');
        fromLanguage = $(this).attr('data-language');
        $(this).addClass('active');
    }
});
$('.to-language a').click(function(e) {
    e.preventDefault();
    if ($(this).attr('data-language') != fromLanguage) {
        $('.to-language a').removeClass('active');
        toLanguage = $(this).attr('data-language');
        $(this).addClass('active');
    }
});

$('.category a').click(function() {
    category = $(this).attr('data-category');
    questions = allQuestions[category];
    $('.category a').removeClass('active');
    $(this).addClass('active');
});

var points = parseInt(localStorage.getItem('points')) || 0;
var fromLanguage = '';
var toLanguage = '';
var category = '';
var questions = [];


function correct() {
    $('#msg').html('<p class="success">alright</p>');
}

function inCorrect() {
    $('#msg').html('<p class="error">f*ck</p>');
}

function updatePoints() {
    $('#points').html(points);
}

var tasty = [{
    russian: "яблоко",
    english: "apple",
    spain: "manzana"
}, {
    russian: "виноград",
    english: "grape",
    spain: "uvas"
}, {
    russian: "гранат",
    english: "pomegranate",
    spain: "granate"
}, {
    russian: "ананас",
    english: "pineapple",
    spain: "pina"
}, {
    russian: "морковь",
    english: "carrot",
    spain: "zanahoria"
}, {
    russian: "свекла",
    english: "beetroot",
    spain: "remolachas"
}, {
    russian: "чеснок",
    english: "garlic",
    spain: "ajo"
}, {
    russian: "арбуз",
    english: "watermelon",
    spain: "sandia"
}, {
    russian: "кунжут",
    english: "sesame",
    spain: "sesamo"
}];

var dammit = [{
    russian: "сука",
    english: "bitch",
    spain: "perra"
}, {
    russian: "задница",
    english: "ass",
    spain: "culo"
}, {
    russian: "черт",
    english: "heck",
    spain: "infierno"
}, {
    russian: "тупица",
    english: "stupid",
    spain: "estúpido"
}, {
    russian: "идиот",
    english: "idiot",
    spain: "idiota"
}, {
    russian: "дерьмо",
    english: "bullshit",
    spain: "mierda"
}, {
    russian: "мудак",
    english: "asshole",
    spain: "Estúpido"
}, {
    russian: "простофиля",
    english: "nitwit",
    spain: "simplón"
}, {
    russian: "ублюдок",
    english: "bastard",
    spain: "bastardo"
}];

var travel = [{
    russian: "где я?",
    english: "where i am?",
    spain: "donde estoy?"
}, {
    russian: "багаж",
    english: "luggage",
    spain: "equipaje"
}, {
    russian: "страховка",
    english: "insurance",
    spain: "seguro"
}, {
    russian: "экскурсия",
    english: "excursion",
    spain: "excursión"
}, {
    russian: "поездка",
    english: "journey",
    spain: "viaje"
}, {
    russian: "чемодан",
    english: "suitcase",
    spain: "maleta"
}, {
    russian: "прибытие",
    english: "arrival",
    spain: "llegada"
}, {
    russian: "внутренние рейсы",
    english: "domestic flights",
    spain: "vuelos domésticos"
}, {
    russian: "иностранец",
    english: "foreigner",
    spain: "extranjero"
}];
var allQuestions = {
    tasty: tasty,
    dammit: dammit,
    travel: travel
}

updatePoints();