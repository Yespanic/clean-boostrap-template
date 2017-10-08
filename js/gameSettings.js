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

$('.category a').click(function() {
    category = $(this).attr('data-category');
    $('.category a').removeClass('active');
    $(this).addClass('active');
    localStorage.setItem('category', category);
});

var fromLanguage = '';
var toLanguage = '';
var category = '';
var questions = [];

