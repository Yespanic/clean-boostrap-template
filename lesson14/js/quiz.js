var what = localStorage.getItem('category');
var points = parseInt(localStorage.getItem('points')) || 0;
var images = {
	html: 'img/logo-html.png',
	css: 'img/logo-css2.png',
}

$('#play').append('<img src="' +images[what] +'" alt="">');

function correct() {
    $('#msg').html('<p class="success">YES</p>');
}
function inCorrect() {
    $('#msg').html('<p class="error">NO</p>');
}
function updatePoints(points) {
    $('#points').html('<span>points</span> ' + points);
}

$('#term').on('click', '.button', function(){
	$('#term .button').removeClass('active');
	$(this).addClass('active');
});
$('#meaning').on('click', '.button', function(){
	var activeCard = $('#term .active');
	if (!activeCard){
		return;
	};
	if (activeCard.attr('data-to') == $(this).text()){
		activeCard.remove();
		$(this).remove();
		correct();
  		points++;
	} else {
  	activeCard.removeClass('active');
  	inCorrect();
  	points--;
  }
  localStorage.setItem('points', points);
  updatePoints(points);
});


var number = 3;

$('#play').click(function(e){
	e.preventDefault();
	if (number > questions.length){
		alert('finish');
		return;
	}
	actualQuestions = [];
	var index = 0;
	for (var i = 0; i < number; i++){
		index = Math.floor(Math.random() * questions.length);
		actualQuestions.push(questions.splice(index, 1)[0]);
	}
	$('#term').html('');
	$('#meaning').html('');
	for (var i = 0; i < actualQuestions.length; i++){
	// debugger;
		$('#term').append('<span class="button" data-to="' + actualQuestions[i]['meaning'] + '">' + actualQuestions[i]['termin'] + '</span>');
	}
	var actQuestionsLength = actualQuestions.length;
	for (var i = 0; i < actQuestionsLength; i++){
		index = Math.floor(Math.random() * actualQuestions.length);
		$('#meaning').append('<span class="button">' + actualQuestions.splice(index, 1)[0]['meaning']) + '</span>';
	}
});

var html = [{
	termin: "&lt;em&gt;",
	meaning: "акцентирование текста(курсив)"
}, {
	termin: "&lt;hr&gt;",
	meaning: "горизонтальная линия"
}, {
	termin: "&lt;i&gt;",
	meaning: "курсивное начертание шрифта"
}, {
	termin: "&lt;input&gt;",
	meaning: "элемент формы(флажки, кнопки..)" 
}, {
	termin: "&lt;li&gt;",
	meaning: "элемент списка" 
}, {
	termin: "&lt;link&gt;",
	meaning: "связь с внешним документом(head only)" 
}, {
	termin: "&lt;map&gt;",
	meaning: "связывает кооржинаты областей с изображением" 
}, {
	termin: "&lt;area&gt; ",
	meaning: "активные области изображения(ссылки)" 
}, {
	termin: "&lt;marquee&gt;",
	meaning: "создает бегущую строку на странице" 
}, {
	termin: "&lt;meta&gt;",
	meaning: "хранение информации для браузеров и систем" 
}, {
	termin: "&lt;nobr&gt;",
	meaning: "браузер отображает текст без переносов" 
}, {
	termin: "&lt;nav&gt;",
	meaning: "задает навигацию по сайту" 
}, {
	termin: " &lt;main&gt;",
	meaning: "основное содержание документа" 
}, {
	termin: "&lt;mark&gt;",
	meaning: "помечает текст как выделенный" 
}, {
	termin: "&lt;menu&gt;",
	meaning: "контейнером для тега &lt;command&gt; и создания меню" 
}, {
	termin: "&lt;figure&gt;",
	meaning: "группирование любых элементов" 
}, {
	termin: "&lt;ol&gt;",
	meaning: "устанавливает нумированный список" 
}, {
	termin: "&lt;p&gt;",
	meaning: "текстовый абзац" 
}, {
	termin: "&lt;q&gt;",
	meaning: "выделение цитать в тексте" 
}, {
	termin: "&lt;section&gt;",
	meaning: "задаёт раздел документа" 
}, {
	termin: "&lt;select&gt;",
	meaning: "раскрывающийся список или множественного выбора" 
}, {
	termin: "&lt;small&gt;",
	meaning: "уменьшает размер шрифта на единицу" 
}, {
	termin: "&lt;span&gt;",
	meaning: "определение строчного элемента" 
}, {
	termin: "&lt;sub&gt;",
	meaning: "отображает нижний индекс" 
}, {
	termin: "&lt;sup&gt;",
	meaning: "отображает верхний индекс" 
}, {
	termin: "&lt;tt&gt;",
	meaning: "отображает моноширинный текст" 
}, {
	termin: "&lt;ul&gt;",
	meaning: "маркированный список" 
}];


var css = [{
	termin: "float",
	meaning: "сторона выравнивания элемента" 
}, {
	termin: "color",
	meaning: "цвет текста" 
}, {
	termin: "columns",
	meaning: "задает ширину и количество колонок текста" 
}, {
	termin: "cursor",
	meaning: "форма курсора в пределах элемента" 
}, {
	termin: "direction",
	meaning: "направление текста" 
}, {
	termin: "display",
	meaning: "отображение элемента в документе(многоцелевое)" 
}, {
	termin: "filter",
	meaning: "применение художественных эффектов" 
}, {
	termin: "flex",
	meaning: "параметры заполнения доступного пространства" 
}, {
	termin: "font",
	meaning: "задает несколько характеристик текста" 
}, {
	termin: "hyphens",
	meaning: "расставление переносов слов" 
}, {
	termin: "list-termin",
	meaning: "стиль, положение маркера списка" 
}, {
	termin: "margin",
	meaning: "отступ от границы текущего до внутренней границы его родительского элемента" 
}, {
	termin: "object-fit",
	meaning: "соотношение сторон заменяемых элементов и масштабирование" 
}, {
	termin: "opacity",
	meaning: "прозрачность элемента" 
}, {
	termin: "order",
	meaning: "порядок вывода флексов внутри флекс-контейнера" 
}, {
	termin: "outline",
	meaning: "цвет, стиль, толщина всех границ элемента" 
}, {
	termin: "overflow",
	meaning: "отображение непомещающегося содержания блочного элемента" 
}, {
	termin: "padding",
	meaning: "расстояние от внутреннего края рамки элемента до содержания" 
}, {
	termin: "position",
	meaning: "позиционирование элемента относительно браузера или др.объектов" 
}, {
	termin: "quotes",
	meaning: "устанавливает тип кавычек" 
}, {
	termin: "tab-size",
	meaning: "изменение ширины отступа клавишей tab" 
}, {
	termin: "text-align",
	meaning: "горизонтальное выравнивание текста в элементе" 
}, {
	termin: "transform",
	meaning: "трансформирует элемент(вращает, сдвигает)" 
}, {
	termin: "transition",
	meaning: "устанавливает эффект перехода между двумя состояниями элемента" 
}, {
	termin: "user-select",
	meaning: "выделение текста и других элементов" 
}, {
	termin: "vertical-align",
	meaning: "выравнивает элемент по вертикали" 
}, {
	termin: "visibility",
	meaning: "отображение или скрытие элемента" 
}, {
	termin: "white-space",
	meaning: "отображение пробелов между словами" 
}, {
	termin: "width",
	meaning: "ширина содержимого элемента" 
}, {
	termin: "word-break",
	meaning: "перенос строк внутри слов" 
}];

var allQuestions = {
	html: html,
	css: css
};

var questions = allQuestions[what];
var actualQuestions = [];

updatePoints(points);
