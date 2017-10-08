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
    localStorage.setItem('points', points);
    updatePoints(points);
});