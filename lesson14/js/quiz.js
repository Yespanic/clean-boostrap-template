
//$('#play').append('category');

$('#play').click(function(e) {
	e.preventDefault();
	if (number > questions.lenght) {
		alert('finish');
		return;
	}
	actualQuestions = [];
  var index = 0;
  for (var i = 0; i < number; i++) {
    index = Math.floor(Math.random() * questions.length);
    actualQuestions.push(questions.splice(index, 1)[0]);
  }
  $('#term').html('');
  $('#meaning').html('');
  for (var i = 0, i < actualQuestions.lenght; i++) {
  	$('#term').append('<span class="button" data-to="' + actualQuestions[i][meaning] + '">' + actualQuestions[i][term]) + '</span>';
  }
  var actQuestionsLength = actualQuestions.length;
  for (var i = 0; i < actQuestionsLength; i++) {
  	index = Math.floor(Math.random() * actualQuestions.length);
  	$('#meaning').append('<span class = "button">' + actualQuestions.splice(index, 1)[0][meaning]) + '</span>';
  }
});

var html = [{
	tag: "<em>",
	meaning: "акцентирование текста(курсив)"
}, {
	tag: "<hr>",
	meaning: "горизонтальная линия"
}, {
	tag: "<i>",
	meaning: "курсивное начертание шрифта"
}, {
	tag: "<input>",
	meaning: "элемент формы(флажки, кнопки..)" 
}, {
	tag: "<li>",
	meaning: "элемент списка" 
}, {
	tag: "<link>",
	meaning: "связь с внешним документом(head only)" 
}, {
	tag: "<map>",
	meaning: "связывает кооржинаты областей с изображением" 
}, {
	tag: "<area> ",
	meaning: "активные области изображения(ссылки)" 
}, {
	tag: "<marquee>",
	meaning: "создает бегущую строку на странице" 
}, {
	tag: "<meta>",
	meaning: "хранение информации для браузеров и систем" 
}, {
	tag: "<nobr>",
	meaning: "браузер отображает текст без переносов" 
}, {
	tag: "<nav>",
	meaning: "задает навигацию по сайту" 
}, {
	tag: " <main>",
	meaning: "основное содержание документа" 
}, {
	tag: "<mark>",
	meaning: "помечает текст как выделенный" 
}, {
	tag: "<menu>",
	meaning: "контейнером для тега <command> и создания меню" 
}, {
	tag: "<figure>",
	meaning: "группирование любых элементов" 
}, {
	tag: "<ol>",
	meaning: "устанавливает нумированный список" 
}, {
	tag: "<p>",
	meaning: "текстовый абзац" 
}, {
	tag: "<q>",
	meaning: "выделение цитать в тексте" 
}, {
	tag: "<section>",
	meaning: "задаёт раздел документа" 
}, {
	tag: "<select>",
	meaning: "раскрывающийся список или множественного выбора" 
}, {
	tag: "<small>",
	meaning: "уменьшает размер шрифта на единицу" 
}, {
	tag: "<span>",
	meaning: "определение строчного элемента" 
}, {
	tag: "<sub>",
	meaning: "отображает нижний индекс" 
}, {
	tag: "<sup>",
	meaning: "отображает верхний индекс" 
}, {
	tag: "<tt>",
	meaning: "отображает моноширинный текст" 
}, {
	tag: "<ul>",
	meaning: "маркированный список" 
}];


var css = [{
	style: "float",
	meaning: "сторона выравнивания элемента" 
}, {
	style: "color",
	meaning: "цвет текста" 
}, {
	style: "columns",
	meaning: "задает ширину и количество колонок текста" 
}, {
	style: "cursor",
	meaning: "форма курсора в пределах элемента" 
}, {
	style: "direction",
	meaning: "направление текста" 
}, {
	style: "display",
	meaning: "отображение элемента в документе(многоцелевое)" 
}, {
	style: "filter",
	meaning: "применение художественных эффектов" 
}, {
	style: "flex",
	meaning: "параметры заполнения доступного пространства" 
}, {
	style: "font",
	meaning: "задает несколько характеристик текста" 
}, {
	style: "hyphens",
	meaning: "расставление переносов слов" 
}, {
	style: "list-style",
	meaning: "стиль, положение маркера списка" 
}, {
	style: "margin",
	meaning: "отступ от границы текущего до внутренней границы его родительского элемента" 
}, {
	style: "object-fit",
	meaning: "соотношение сторон заменяемых элементов и масштабирование" 
}, {
	style: "opacity",
	meaning: "прозрачность элемента" 
}, {
	style: "order",
	meaning: "порядок вывода флексов внутри флекс-контейнера" 
}, {
	style: "outline",
	meaning: "цвет, стиль, толщина всех границ элемента" 
}, {
	style: "overflow",
	meaning: "отображение непомещающегося содержания блочного элемента" 
}, {
	style: "padding",
	meaning: "расстояние от внутреннего края рамки элемента до содержания" 
}, {
	style: "position",
	meaning: "позиционирование элемента относительно браузера или др.объектов" 
}, {
	style: "quotes",
	meaning: "устанавливает тип кавычек" 
}, {
	style: "tab-size",
	meaning: "изменение ширины отступа клавишей tab" 
}, {
	style: "text-align",
	meaning: "горизонтальное выравнивание текста в элементе" 
}, {
	style: "transform",
	meaning: "трансформирует элемент(вращает, сдвигает)" 
}, {
	style: "transition",
	meaning: "устанавливает эффект перехода между двумя состояниями элемента" 
}, {
	style: "user-select",
	meaning: "выделение текста и других элементов" 
}, {
	style: "vertical-align",
	meaning: "выравнивает элемент по вертикали" 
}, {
	style: "visibility",
	meaning: "отображение или скрытие элемента" 
}, {
	style: "white-space",
	meaning: "отображение пробелов между словами" 
}, {
	style: "width",
	meaning: "ширина содержимого элемента" 
}, {
	style: "word-break",
	meaning: "перенос строк внутри слов" 
}];

var questions = {
	html: html,
	css: css
}

var number = 3;
var actualQuestions = [];
