
let questionsAndAnswers = [
    { question: 'متى يُحتفل باليوم الوطني السعودي؟', answer: ' 23 سبتمبر' },
    { question: 'في أي عام هجري تم توحيد المملكة العربية السعودية؟', answer: '1351' },
    { question: 'من هو الملك الذي وحد المملكة العربية السعودية؟', answer: ' الملك عبد العزيز بن عبد الرحمن آل سعود' },
    { question: 'ما هو العلم الرسمي للمملكة العربية السعودية؟', answer: 'علم أخضر '},
    { question: 'ما هي عاصمة المملكة العربية السعودية؟', answer: 'الرياض' },
    { question: 'كم عدد مناطق المملكة العربية السعودية؟', answer: '13' },
    { question: 'ما هو رمز المملكة العربية السعودية الوطني؟', answer: ' السيفين والنخلة' },
    { question: 'ما هي العملة الرسمية في السعودية؟', answer: 'الريال السعودي' },
    { question: 'ما هو اسم أطول برج في المملكة؟', answer: 'برج المملكه' },
    { question: 'همة السعوديين مثل جبل؟', answer: 'طويق' }
];


let currentQuestionIndex;

document.getElementById('character').addEventListener('click', function() {
    document.getElementById('chatbox').style.display = 'block';

    currentQuestionIndex = Math.floor(Math.random() * questionsAndAnswers.length);
    document.getElementById('questionDisplay').innerText = questionsAndAnswers[currentQuestionIndex].question;
    document.getElementById('result').innerText = ''; 
    document.getElementById('answerInput').value = ''; 
});

function checkAnswer() {
    let userAnswer = document.getElementById('answerInput').value;
    let correctAnswer = questionsAndAnswers[currentQuestionIndex].answer;

    if (userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
        document.getElementById('result').innerText = 'إجابة صحيحة!';
    } else {
        document.getElementById('result').innerText = ' أخطأت، راجع وطنيتك!';
    }
}