const questions = [
    {
        q: "1. Как зовут главного героя игры, за которого мы играем большую часть времени?",
        img: "artur.webp",
        answers: [
            { text: "А) Джон Марстон", correct: false },
            { text: "Б) Датч Ван дер Линде", correct: false }, 
            { text: "В) Артур Морган", correct: true },
            { text: "Г) Билл Уильямсон", correct: false },
        ]
    },
    {
        q: "2. Как называется банда, в которой состоит главный герой?",
        img: "gang.jpeg",
        answers: [
            { text: "А) Банда «О'Дрисколла»", correct: false },
            { text: "Б) Банда «Ван дер Линде»", correct: true },
            { text: "В) «Охотники за головами»", correct: false },
            { text: "Г) «Свободные всадники»", correct: false },
        ]
    },
    {
        q: "3. Какой город в игре является самым крупным, современным и промышленным?",
        img: "san_marino.jpg",
        answers: [
            { text: "А) Валентайн", correct: false },
            { text: "Б) Роудс", correct: false },
            { text: "В) Блэкуотер", correct: false },
            { text: "Г) Сен-Дени", correct: true }
        ]
    },
    {
        q: "4. Какое прозвище Артур Морган часто использует, когда обращается к своему коню?",
        img: "horse.webp",
        answers: [
            { text: "А) «Good boy / girl»", correct: true },
            { text: "Б) «My friend»", correct: false },
            { text: "В) «Cowboy»", correct: false },
            { text: "Г) «Fast one»", correct: false }
        ]
    },
    {
        q: "5. Как зовут лидера банды, который постоянно говорит, что у него «есть план»?",
        img: "linde.jpg",
        answers: [
            { text: "А) Хозия Мэттьюз", correct: false },
            { text: "Б) Майка Белл", correct: false },
            { text: "В) Датч Ван дер Линде", correct: true },
            { text: "Г) Чарльз Смит", correct: false }
        ]
    },
    {
        q: "6. В каком штате начинается игра, где банда пытается выжить в снежную бурю?",
        img: "ambarino.webp",
        answers: [
            { text: "А) Лемойн", correct: false },
            { text: "Б) Амбарино", correct: true },
            { text: "В) Нью-Ганновер", correct: false },
            { text: "Г) Вест-Элизабет", correct: false }
        ]
    },
    {
        q: "7. Кто из членов банды является главным антагонистом и предателем?",
        img: "bell.webp",
        answers: [
            { text: "А) Майка Белл", correct: true },
            { text: "Б) Ленни Саммерс", correct: false },
            { text: "В) Шон Макгуайр", correct: false },
            { text: "Г) Хавьер Эскуэлла", correct: false },
        ]
    },
    {
        q: "8. Как называется особая способность, которая замедляет время при стрельбе?",
        img: "eye.webp",
        answers: [
            { text: "А) Bullet Time", correct: false },
            { text: "Б) Eagle Eye (Орлиный глаз)", correct: false },
            { text: "В) Slow Motion", correct: false },
            { text: "Г) Dead Eye (Меткий глаз)", correct: true }
        ]
    },
    {
        q: "9. Какое животное является легендарным и встречается в самом начале игры во время охоты с Хозией?",
        img: "barti.jpg",
        answers: [
            { text: "А) Белый медведь", correct: false },
            { text: "Б) Медведь гризли (Барти)", correct: true },
            { text: "В) Белый бизон", correct: false },
            { text: "Г) Огромный волк", correct: false }
        ]
    },
    {
        q: "10. Как зовут сына Джона Марстона и Эбигейл?",
        img: "jack.jpg",
        answers: [
            { text: "А) Джек", correct: true },
            { text: "Б) Артур", correct: false },
            { text: "В) Датч-младший", correct: false },
            { text: "Г) Киран", correct: false }
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
        window.location.href = "games.html"
    }
});

startQuiz();