var what = localStorage.getItem('category');

$('.category a[data-category='+what+']').addClass('active');

$('.category a').click(function(e) {
    e.preventDefault();
    what = $(this).attr('data-category');
    $('.category a').removeClass('active');
    $(this).addClass('active');
    localStorage.setItem('category', what);
});