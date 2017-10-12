var points = parseInt(localStorage.getItem('points')) || 0;
var fromLanguage = upDateFromLanguage(fromLanguage);
var toLanguage = upDateToLanguage(toLanguage);
var category = upDateCategory(category);
var questions = [];

localStorage.getItem('from-language');
localStorage.getItem('to-language');
localStorage.getItem('category');


function correct() {
    $('#msg').html('<p class="success">alright</p>');
}

function inCorrect() {
    $('#msg').html('<p class="error">f*ck</p>');
}

function updatePoints(points) {
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

updatePoints(points);