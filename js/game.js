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

var points = 0;
var fromLanguage = '';
var toLanguage = '';

function correct() {
  $('#msg').html('<p class="success">alright</p>');
}

function inCorrect() {
  $('#msg').html('<p class="error">f*ck</p>');
}

function updatePoints() {
  $('#points').html(points);
}

var questions = [{
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
