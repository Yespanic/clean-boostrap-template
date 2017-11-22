var denomination = function(){
	for (var i=0; i<denomArr.length; i++) {
		$('#denomination').append('<span class="button" data-number="'+i+'">' + denomArr[i] + '</span>');	
	}	
};

var suit = function(){
	for (var i=0; i<suitArr.length; i++) {
		$('#suit').append('<span class="button"><img src="' + suitArr[i] + '">	</span>');
	}
};

var denomArr = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var suitArr = ["img/diamonds.png", "img/clubs.png", "img/hearts.png", "img/spades.png"];
denomination();
suit();

$('#denomination').on('click', '.button', function(){
	$('#denomination .button').removeClass('active');
	$(this).addClass('active');
	localStorage.setItem('denomination', this);
});
