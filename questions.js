const NUMQUESTIONS = 5;

let questionsMap = new Map();

let quizSequence = [];

let quizStats = {
  counter: 0,
  correct: 0,
  wrong: 0,
  currentQuestion: 0,
};

function quizQuestions() {
  questionsMap.set(1, {
    question: "متى تحتفل السعودية باليوم الوطني؟",
    a: "23 سبتمبر",
    b: "1 نوفمبر",
    c: "15 أغسطس",
    d: "2 يناير",
    answer: "a",
  });
  questionsMap.set(2, {
    question: "من هو الملك الذي أعلن توحيد المملكة العربية السعودية؟",
    a: "الملك فيصل",
    b: "الملك سلمان",
    c: " الملك عبدالعزيز",
    d: "الملك فهد",
    answer: "c",
  });
  questionsMap.set(3, {
    question: "ما هو اللون الأساسي في العلم السعودي؟",
    a: "الأحمر",
    b: "الأخضر",
    c: " الأزرق",
    d: "الأبيض",
    answer: "b",
  });
  questionsMap.set(4, {
    question: "ما هي العبارة المكتوبة على العلم السعودي؟",
    a: "لا إله إلا الله محمد رسول الله",
    b: "الله أكبر",
    c: " سبحان الله",
    d: "الحمد لله",
    answer: "a",
  });
  questionsMap.set(5, {
    question: "في أي عام تأسست المملكة العربية السعودية؟",
    a: "1902",
    b: "1932",
    c: "1945",
    d: "1960",
    answer: "b",
  });
  questionsMap.set(6, {
    question: "ما هو رمز رؤية السعودية 2030؟",
    a: "تطوير التعليم",
    b: "الاستدامة الاقتصادية",
    c: "النمو السكاني",
    d: "الاستثمارات الخارجية",
    answer: "b",
  });
  questionsMap.set(7, {
    question: "ما هي العملة الرسمية للمملكة العربية السعودية؟",
    a: "الريال",
    b: "الدينار",
    c: "الجنيه",
    d: "الدولار",
    answer: "a",
  });
}

let questionContainer = document.getElementById("the-question"),
  answerA = document.getElementById("first-answer"),
  answerB = document.getElementById("second-answer"),
  answerC = document.getElementById("third-answer"),
  answerD = document.getElementById("fourth-answer"),
  scoreCounter = document.getElementById("score-counter");

let character_main = document.getElementById("character_main");

function determineSequence() {
  for (let [key, value] of questionsMap) {
    quizSequence.push(key);
  }

  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  quizSequence = shuffle(quizSequence);
}

function getNextQuestion() {
  quizStats.counter++;

  let qn = quizSequence.shift();

  let a = questionsMap.get(qn).a,
    b = questionsMap.get(qn).b,
    c = questionsMap.get(qn).c,
    d = questionsMap.get(qn).d,
    question = questionsMap.get(qn).question;

  questionContainer.textContent = question;
  answerA.textContent = a;
  answerB.textContent = b;
  answerC.textContent = c;
  answerD.textContent = d;

  quizStats.currentQuestion = qn;

  character_main.src = "./I-dont-know.png";
}

function addEventListeners() {
  answerA.addEventListener("click", checkTheAnswer);
  answerB.addEventListener("click", checkTheAnswer);
  answerC.addEventListener("click", checkTheAnswer);
  answerD.addEventListener("click", checkTheAnswer);
}

function addDataAttributes() {
  answerA.setAttribute("data-answer", "a");
  answerB.setAttribute("data-answer", "b");
  answerC.setAttribute("data-answer", "c");
  answerD.setAttribute("data-answer", "d");
}

function checkTheAnswer() {
  let givenAnswer = this.dataset.answer,
    correctAnswer = questionsMap.get(quizStats.currentQuestion).answer;

  if (givenAnswer === correctAnswer) {
    quizStats.correct++;
    this.classList.add("correct");

    character_main.src = "./correct-answer.png";
  } else {
    quizStats.wrong++;
    this.classList.add("wrong");

    character_main.src = "./wrong-answer.png";
  }

  scoreCounter.textContent = quizStats.correct;

  if (quizStats.counter < NUMQUESTIONS) {
    setTimeout(clearClasses, 1500);
    setTimeout(getNextQuestion, 1500);
  } else {
    showTheResults();
  }

  return scoreCounter;
}

function clearClasses() {
  answerA.classList.remove("correct", "wrong");
  answerB.classList.remove("correct", "wrong");
  answerC.classList.remove("correct", "wrong");
  answerD.classList.remove("correct", "wrong");
}

function showTheResults() {
  const userData = JSON.parse(localStorage.getItem("user"));

  let correct = quizStats.correct;

  document
    .getElementsByClassName("results-container")[0]
    .classList.add("display");

  document.getElementsByClassName("d-none")[0].classList.remove("d-none");

  document.getElementById("character_main").style.visibility = "hidden";

  if (correct < 4) {
    document.getElementById(
      "title_results"
    ).textContent = `افااا يا ${userData.user}`;

    let result_text = document.getElementsByClassName("result-text")[0];

    let content_result = document.createElement("p");
    let aTag = document.createElement("a");

    content_result.textContent = "متأكد انت سعودي!! ثقف عمرك من";
    aTag.href = "./info.html";
    aTag.textContent = "هنا";

    result_text.appendChild(content_result);
    result_text.appendChild(aTag);

    document.getElementById("caracter_src").src = "./wrong-answer.png";
  } else {
    document.getElementById(
      "title_results"
    ).textContent = `الله عليك يا ${userData.user}`;

    let result_text = document.getElementsByClassName("result-text")[0];

    let content_result = document.createElement("p");
    let aTag = document.createElement("a");

    content_result.textContent = "وطنيتك مرتفعه, بس تقدر تثقف عمرك زياده من";
    aTag.href = "./index.html";
    aTag.textContent = "هنا";

    result_text.appendChild(content_result);
    result_text.appendChild(aTag);

    document.getElementById("caracter_src").src = "./correct-answer.png";
  }
}

(function startQuiz() {
  quizQuestions();
  determineSequence();
  getNextQuestion();
  addEventListeners();
  addDataAttributes();
})();

/*direct to login*/
window.onload = function () {
  const userData = JSON.parse(localStorage.getItem("user"));

  if (!userData) {
    window.location.href = "./log.html";
  }
};

function logOut() {
  localStorage.removeItem("user");
  window.location.href = "./log.html";
}
