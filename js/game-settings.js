var fromLanguage = localStorage.getItem('from-language');
var toLanguage = localStorage.getItem('to-language');
var category = localStorage.getItem('category');
var points = parseInt(localStorage.getItem('points')) || 0;

$('.count').append('Заработано очков: ' + points);

$('.from-language a[data-language='+fromLanguage+']').addClass('active');
$('.to-language a[data-language='+toLanguage+']').addClass('active');
$('.category a[data-category='+category+']').addClass('active');

$('.from-language a').click(function(e) {
    e.preventDefault();
    if ($(this).attr('data-language') != toLanguage) {
        $('.from-language a').removeClass('active');
        fromLanguage = $(this).attr('data-language');
        $(this).addClass('active');
    }
    localStorage.setItem('from-language', fromLanguage);
});
$('.to-language a').click(function(e) {
    e.preventDefault();
    if ($(this).attr('data-language') != fromLanguage) {
        $('.to-language a').removeClass('active');
        toLanguage = $(this).attr('data-language');
        $(this).addClass('active');
    }
    localStorage.setItem('to-language', toLanguage);
});

$('.category a').click(function(e) {
    e.preventDefault();
    category = $(this).attr('data-category');
    $('.category a').removeClass('active');
    $(this).addClass('active');
    localStorage.setItem('category', category);
});



