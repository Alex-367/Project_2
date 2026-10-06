const questions = [
    {
        q: "1. Как звали юного падавана, который был учеником Энакина Скайуокера?",
        img: "asako_tano.webp",
        answers: [
            { text: "А) Рей", correct: false },
            { text: "Б) Асока Тано", correct: true },
            { text: "В) Шак Ти", correct: false },
            { text: "Г) Луминара Ундули", correct: false }
        ]
    },
    {
        q: "2. На какой планете вырос Люк Скайуокер?",
        img: "tatyine.webp",
        answers: [
            { text: "А) Татуин", correct: true },
            { text: "Б) Набу", correct: false },
            { text: "Б) Хот", correct: false },
            { text: "Г) Корусант", correct: false }
        ]
    },
    {
        q: "3. Кто является «отцом» армии клонов (чьи гены использовали для их создания)?",
        img: "jango_fett.jpg",
        answers: [
            { text: "А) Боба Фетт", correct: false },
            { text: "Б) Капитан Рекс", correct: false },
            { text: "В) Граф Дуку", correct: false },
            { text: "Г) Джанго Фетт", correct: true }
        ]
    },
    {
        q: "4. Какой номер был у приказа, заставившего клонов предать джедаев?",
        img: "66.jpg",
        answers: [
            { text: "А) Приказ 44", correct: false },
            { text: "Б) Приказ 77", correct: false },
            { text: "В) Приказ 66", correct: true },
            { text: "Г) Приказ 99", correct: false }
        ]
    },
    {
        q: "5. Как называется корабль Хана Соло?",
        img: "AA1OQxFf.jpeg",
        answers: [
            { text: "А) «Звезда смерти»", correct: false },
            { text: "Б) «Тысячелетний сокол»", correct: true },
            { text: "В) «Раб I»", correct: false },
            { text: "Г) «Лямбда»", correct: false }
        ]
    },
    {
        q: "6. Кто убил магистра Квай-Гон Джинна в первом эпизоде?",
        img: "501320822843.jpg",
        answers: [
            { text: "А) Дарт Мол", correct: true },
            { text: "Б) Дарт Вейдер", correct: false },
            { text: "В) Генерал Гривус", correct: false },
            { text: "Г) Император Палпатин", correct: false }
        ]
    },
    {
        q: "7. Какого цвета световой меч у магистра Мейса Винду?",
        img: "AA1WzpPq.jpeg",
        answers: [
            { text: "А) Зеленый", correct: false },
            { text: "Б) Синий", correct: false },
            { text: "В) Фиолетовый", correct: true },
            { text: "Г) Желтый", correct: false }
        ]
    },
    {
        q: "8. Как зовут маленького зеленого персонажа той же расы, что и Йода, из сериала «Мандалорец»?",
        img: "AA1XRi9g.jpeg",
        answers: [
            { text: "А) Джа-Джа Бинкс", correct: false },
            { text: "Б) Викет", correct: false },
            { text: "В) Бо-Катан", correct: false },
            { text: "Г) Грогу", correct: true },
        ]
    },
    {
        q: "9. Какую фразу чаще всего произносит адмирал Акбар во время битв?",
        img: "akbar.webp",
        answers: [
            { text: "А) «Это ловушка!»", correct: true },
            { text: "Б) «Да пребудет с вами Сила!»", correct: false },
            { text: "В) «Огонь по готовности!»", correct: false },
            { text: "Г) «Мы сдаемся!»", correct: false }
        ]
    },
    {
        q: "10. Кем приходится Дарт Вейдер принцессе Лее?",
        img: "darth-vader-interogatting-princess-leia.avif",
        answers: [
            { text: "А) Дядей", correct: false },
            { text: "Б) Учителем", correct: false },
            { text: "В) Мужем", correct: false },
            { text: "Г) Отцом", correct: true }
        ]
    }
];

let currentQuestionIndex = 0;

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
        window.location.href = "films.html"
    }
});

startQuiz();