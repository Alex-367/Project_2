const questions = [
    {
        q: "1. С какого события начинается первый том романа?",
        img: "vecher.jpg",
        answers: [
            { text: "А) С Бородинского сражения", correct: false },
            { text: "Б) С именин у Ростовых", correct: false },
            { text: "В) С вечера в салоне Анны Павловны Шерер", correct: true },
            { text: "Г) С дуэли Пьера Безухова", correct: false }
        ]
    },
    {
        q: "2. Кто из героев в начале романа мечтает о «своем Тулоне» (быстрой и славной военной карьере)?",
        img: "649825514286.jpg",
        answers: [
            { text: "А) Николай Ростов", correct: false },
            { text: "Б) Андрей Болконский", correct: true },
            { text: "В) Борис Друбецкой", correct: false },
            { text: "Г) Федор Долохов", correct: false },
        ]
    },
    {
        q: "3. Какое событие заставило Андрея Болконского осознать ничтожность своих мечтаний о славе и Наполеоне?",
        img: "ranenie.jpg",
        answers: [
            { text: "А) Ранение под Аустерлицем и вид «высокого неба»", correct: true },
            { text: "Б) Встреча с Наташей Ростовой", correct: false },
            { text: "В) Смерть жены Лизы", correct: false },
            { text: "Г) Совет в Филях", correct: false }
        ]
    },
    {
        q: "4. К какому герою относятся слова: «Он не умел войти в салон, а еще менее умел из него выйти»?",
        img: "861762896631.jpg",
        answers: [
            { text: "А) К Анатолю Курагину", correct: false },
            { text: "Б) К Пьеру Безухову", correct: true },
            { text: "В) К Андрею Болконскому", correct: false },
            { text: "Г) К Николаю Ростову", correct: false }
        ]
    },
    {
        q: "5. Из-за кого расстроилась помолвка Наташи Ростовой и князя Андрея?",
        img: "kuragin.webp",
        answers: [
            { text: "А) Из-за Пьера Безухова", correct: false },
            { text: "Б) Из-за Федора Долохова", correct: false },
            { text: "В) Из-за запрета старого князя Болконского", correct: false },
            { text: "Г) Из-за Анатоля Курагина", correct: true }
        ]
    },
    {
        q: "6. Кто из персонажей воплощает в романе образ «народной мудрости» и простоты, который так важен для Пьера Безухова?",
        img: "karataev.jpg",
        answers: [
            { text: "А) Платон Каратаев", correct: true },
            { text: "Б) Тихон Щербатый", correct: false },
            { text: "В) Капитан Тушин", correct: false },
            { text: "Г) Кутузов", correct: false }
        ]
    },
    {
        q: "7. Какое реальное историческое лицо Толстой описывает как человека, уверенного в том, что он управляет миром, но на деле являющегося лишь «орудием истории»?",
        img: "thumb-1920-804734.jpg",
        answers: [
            { text: "А) Александр I", correct: false },
            { text: "Б) Кутузов", correct: false },
            { text: "В) Мюрат", correct: false }, 
            { text: "Г) Наполеон Бонапарт", correct: true },
        ]
    },
    {
        q: "8. Как называлась деревня, в которой жила семья Болконских?",
        img: "gory.png",
        answers: [
            { text: "А) Отрадное", correct: false },
            { text: "Б) Лысые Горы", correct: true },
            { text: "В) Богучарово", correct: false },
            { text: "Г) Мытищи", correct: false }
        ]
    },
    {
        q: "9. В чем, по мнению Толстого, заключалась причина победы России в войне 1812 года?",
        img: "victory.jpg",
        answers: [
            { text: "А) В гениальности планов Кутузова", correct: false },
            { text: "Б) В техническом превосходстве русской армии", correct: false },
            { text: "В) В суровой русской зиме", correct: false },
            { text: "Г) В «дубине народной войны» и единстве духа людей", correct: true },
        ]
    },
    {
        q: "10. За кого в эпилоге романа выходит замуж Наташа Ростова?",
        img: "rostove.jpg",
        answers: [
            { text: "А) За Андрея Болконского", correct: false },
            { text: "Б) За Бориса Друбецкого", correct: false },
            { text: "В) За Пьера Безухова", correct: true },
            { text: "Г) За Денисова", correct: false }
        ]
    }
];

const questionElement = document.getElementById('question-text');
const imageElement = document.getElementById('question-image');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.q;
    imageElement.src = currentQuestion.img;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    if (!isCorrect) {
        selectedButton.classList.add('wrong');
    }

    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Квиз пройден!");
        window.location.href = "books.html"
    }
});

startQuiz();