const questions = [
    {
        q: "1. Как называется чип, который главный герой Ви (V) крадет из отеля «Компэки-плаза»?",
        img: "relic.jpg",
        answers: [
            { text: "А) Чип Свободы", correct: false },
            { text: "Б) Душа Найт-Сити", correct: false },
            { text: "В) Кибер-ядро", correct: false }, 
            { text: "Г) Биочип «Relic»", correct: true },
        ]
    },
    {
        q: "2. Кем был Джонни Сильверхенд до того, как его сознание записали на цифровой носитель?",
        img: "dshonny.webp",
        answers: [
            { text: "А) Лидером банды «Мальстрём»", correct: false },
            { text: "Б) Соло-наемником", correct: false },
            { text: "В) Рок-звездой и лидером группы Samurai", correct: true },
            { text: "Г) Программистом корпорации «Арасака»", correct: false },
        ]
    },
    {
        q: "3. Как называется психическое расстройство, возникающее из-за переизбытка имплантов в теле?",
        img: "cyberpsixoz.webp",
        answers: [
            { text: "А) Техно-стресс", correct: false },
            { text: "Б) Киберпсихоз", correct: true },
            { text: "В) Глюк системы", correct: false },
            { text: "Г) Цифровая кома", correct: false }
        ]
    },
    {
        q: "4. В каком районе Найт-Сити проживают самые богатые люди и находятся офисы корпораций?",
        img: "city.webp",
        answers: [
            { text: "А) Пасифика", correct: false },
            { text: "Б) Уотсон", correct: false },
            { text: "В) Деловой центр (City Center)", correct: true },
            { text: "Г) Хейвуд", correct: false }
        ]
    },
    {
        q: "5. Как зовут девушку-нетраннера, в которую влюбляется Дэвид Мартинес в аниме «Cyberpunk: Edgerunners»?",
        img: "lucy.jpg",
        answers: [
            { text: "А) Люси", correct: true },
            { text: "Б) Ребекка", correct: false },
            { text: "В) Панам", correct: false },
            { text: "Г) Джуди", correct: false }
        ]
    },
    {
        q: "6. Какое название носит легендарный бар для наемников, где работает Бестия?",
        img: "alterlife.jpg",
        answers: [
            { text: "А) «Лиззис»", correct: false },
            { text: "Б) «Посмертие» (Afterlife)", correct: true },
            { text: "В) «Дикая Роза»", correct: false },
            { text: "Г) «Тот самый бар»", correct: false }
        ]
    },
    {
        q: "7. Кто является главным личным телохранителем Сабуро Арасаки и заклятым врагом Джонни Сильверхенда?",
        img: "adam.png",
        answers: [
            { text: "А) Горо Такэмура", correct: false },
            { text: "Б) Декстер Дешон", correct: false },
            { text: "В) Артур Дженкинс", correct: false },
            { text: "Г) Адам Смэшер", correct: true },
        ]
    },
    {
        q: "8. Как называется запретная и опасная зона в Сети, отделенная «Черным заслоном»?",
        img: "set.jpg",
        answers: [
            { text: "А) Дикий нет", correct: false },
            { text: "Б) Теневой интернет", correct: false },
            { text: "В) Старая сеть", correct: true },
            { text: "Г) Глубокое погружение", correct: false }
        ]
    },
    {
        q: "9. Какая корпорация считается самой могущественной и главной в мире Cyberpunk 2077?",
        img: "arasaka.webp",
        answers: [
            { text: "А) Арасака", correct: true },
            { text: "Б) Милитех", correct: false },
            { text: "В) Найт Корп", correct: false },
            { text: "Г) Кан Тао", correct: false }
        ]
    },
    {
        q: "10. Что означает фраза «Стать легендой Найт-Сити» в понимании жителей этого города?",
        img: "night_city.webp",
        answers: [
            { text: "А) Дожить до 100 лет", correct: false },
            { text: "Б) Стать мэром города", correct: false },
            { text: "В) Громко прославиться и, скорее всего, погибнуть молодым", correct: true },
            { text: "Г) Купить квартиру в самом дорогом районе", correct: false }
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