$('#from-cards').on('click', '.button', function(){
	$('#from-cards .button').removeClass('active');
	$(this).addClass('active');
});

$('#to-cards').on('click', '.button', function(){
	var activeCard = $('#from-cards .active');
  if (!activeCard) {
  	return;
  }
 	if(activeCard.attr('data-to') == $(this).text()) {
  	activeCard.remove();
    $(this).remove();
  	correct();
  	points++;
  } else {
  	activeCard.removeClass('active');
  	incorrect();
  	points--;
  }
  localStorage.setItem('points', points);
  updatePoints(points);
});

$('#start-game-2').click(function(e) {
  e.preventDefault();
  if (cartNum > questions.length) {
  	alert('Вопросы закончились');
    return;
  }
  actualQuestions = [];
  var index = 0;
  for (var i = 0; i < cartNum; i++) {
    index = Math.floor(Math.random() * questions.length);
    actualQuestions.push(questions.splice(index, 1)[0]);
  }
  $('#from-cards').html('');
  $('#to-cards').html('');
  for (var i = 0; i < actualQuestions.length; i++) {
    $('#from-cards').append('<span class="button" data-to="' + actualQuestions[i][toLanguage] + '">' + actualQuestions[i][fromLanguage]) + '</span>';
  }
  var actQuestionsLength = actualQuestions.length;
  for (var i = 0; i < actQuestionsLength; i++) {
  console.log('check');
  	index = Math.floor(Math.random() * actualQuestions.length);
    console.log(index);
    $('#to-cards').append('<span class="button">' + actualQuestions.splice(index, 1)[0][toLanguage]) + '</span>';
  }
});

var cartNum = 3;
var actualQuestions = [];
