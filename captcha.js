(function () {
  var a, b, answer;

  function newQuestion() {
    a = Math.floor(Math.random() * 9) + 1;
    b = Math.floor(Math.random() * 9) + 1;
    answer = a + b;
    document.getElementById('captcha-question').textContent = 'What is ' + a + ' + ' + b + '?';
    document.getElementById('captcha-answer').value = '';
    document.getElementById('captcha-error').style.display = 'none';
  }

  newQuestion();

  document.querySelector('.form').addEventListener('submit', function (e) {
    var userAnswer = parseInt(document.getElementById('captcha-answer').value.trim(), 10);
    if (isNaN(userAnswer) || userAnswer !== answer) {
      e.preventDefault();
      document.getElementById('captcha-error').style.display = 'block';
      newQuestion();
    }
  });
})();
