const questions = [
    {
        q: "1. Как зовут сову Гарри Поттера?",
        img: "maxresdefault.jpg", // Ссылка на фото
        answers: [
            { text: "А) Короста", correct: false },
            { text: "Б) Букля", correct: true },
            { text: "В) Живоглот", correct: false },
            { text: "Г) Норберт", correct: false }
        ]
    },
    {
        q: "2. Как звали эльфа-домовика, который принадлежал семье Блэков?",
        img: "413879.jpg", // Ссылка на фото
        answers: [
            { text: "А) Добби", correct: false },
            { text: "Б) Винки", correct: false },
            { text: "В) Кикимер", correct: true },
            { text: "Г) Похлеба", correct: false }
        ]
    },
    {
        q: "3. Какой предмет нужно использовать, чтобы попасть в кабинет директора Хогвартса?",
        img: "i.webp",
        answers: [
            { text: "А) Волшебную палочку", correct: false },
            { text: "Б) Пароль (название сладостей)", correct: true },
            { text: "В) Серебряный ключ", correct: false },
            { text: "Г) Исчезательный шкаф", correct: false }
        ]
    },
    {
        q: "4. Кем работал Артур Уизли, отец Рона, в Министерстве магии?",
        img: "5.Harry.Potter.mkv_20230909_112658.845.jpg",
        answers: [
            { text: "А) Мракоборцем", correct: false },
            { text: "Б) Секретарем Министра", correct: false },
            { text: "В) Судьей в Визенгамоте", correct: false },
            { text: "Г) В отделе по борьбе с незаконным использованием изобретений маглов", correct: true }
        ]
    },
    {
        q: "5. Какое заклинание использовал Гарри, чтобы победить Волан-де-Морта в финальной битве?",
        img: "125958-harry-potter-and-the-deathly-hallows-part-2-harry-potter-and-the-deathly-hallows-part-2.jpg",
        answers: [
            { text: "А) Экспеллиармус", correct: true },
            { text: "Б) Авада Кедавра", correct: false },
            { text: "В) Экспекто Патронум", correct: false },
            { text: "Г) Сектумсемпра", correct: false }
        ]
    },
    {
        q: "6. Какое лекарство или зелье помогает восстановить кости после их исчезновения?",
        img: "harry-potter4-movie-screencaps.com-6727%202.jpg",
        answers: [
            { text: "А) Костерост", correct: true },
            { text: "Б) Напиток живой смерти", correct: false },
            { text: "В) Оборотное зелье", correct: false },
            { text: "Г) Феликс Фелицис", correct: false }
        ]
    },
    {
        q: "7. Как называется деревня, в которой живут только волшебники и которая находится рядом с Хогвартсом?",
        img: "sotallampsitrons_191121.jpg",
        answers: [
            { text: "А) Литтл Уингинг", correct: false },
            { text: "Б) Хогсмид", correct: true },
            { text: "В) Годрикова Впадина", correct: false },
            { text: "Г) Косой переулок", correct: false }
        ]
    },
    {
        q: "8. Какое существо охраняло вход в люк, где лежал Философский камень?",
        img: "pyshok.jpg",
        answers: [
            { text: "А) Трехглавый пес Пушок", correct: true },
            { text: "Б) Сфинкс", correct: false },
            { text: "В) Горный тролль", correct: false },
            { text: "Г) Василиск", correct: false }
        ]
    },
    {
        q: "9. На каком этаже Хогвартса находится Выручай-комната?",
        img: "cb0c3-16463113838967-1920.webp",
        answers: [
            { text: "А) На третьем", correct: false },
            { text: "Б) На пятом", correct: false },
            { text: "В) На седьмом", correct: true },
            { text: "Г) В подземельях", correct: false }
        ]
    },
    {
        q: "10. Какой формы был Патронус у матери Гарри Поттера, Лили Эванс?",
        img: "39d7b8a16f1ab2e821a586f5c2_cmUgMTkyMCAxMDgwAzdmMzdhZmI4YTZj.avif",
        answers: [
            { text: "А) Олениха", correct: false },
            { text: "Б) Выдра", correct: false },
            { text: "В) Кошка", correct: false },
            { text: "Г) Лань", correct: true }
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