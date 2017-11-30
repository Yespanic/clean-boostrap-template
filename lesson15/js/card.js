var cardDenomination;
var cardSuit;

var denomination = function(){	for (var i=0; i<denomArr.length; i++) {
		$('#denomination').append('<span class="button" data-number="'+i+'">' + denomArr[i] + '</span>');	
	}	
};

var suit = function(){
	for (var i=0; i<suitArr.length; i++) {
		$('#suit').append('<span class="button" data-number="'+i+'"><img src="' + suitArr[i] + '">	</span>');
	}
};

var denomArr = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var suitArr = ["img/diamonds.png", "img/clubs.png", "img/hearts.png", "img/spades.png"];
denomination();
suit();

$('#denomination').on('click', '.button', function(){
	$('#denomination .button').removeClass('active');
	$(this).addClass('active');
	cardDenomination = $(this).data('number');
	console.log(denomArr[cardDenomination]);
	updateCard();
	// var object = $(this);
	// var serialObject = JSON.stringify(object);
	// localStorage.setItem("need", serialObject);
	// var returnObject = JSON.parse(localStorage.getItem("need"));
});

$('#suit').on('click', '.button', function(){
	$('#suit .button').removeClass('active');
	$(this).addClass('active');
	cardSuit = $(this).data('number');
	console.log(suitArr[cardSuit]);
	updateCard();
});

function updateCard() {
	if (typeof(cardDenomination)==='undefined') return false; 
	if (typeof(cardSuit)==='undefined') return false;
	$('#card').html('<span>' + denomArr[cardDenomination] + '</span>' + 
	'<span> <img src="' + suitArr[cardSuit] + '"> </span>');
};



