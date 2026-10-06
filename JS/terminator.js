const questions = [
    {
        q: "1. Какая модель Терминатора была отправлена в 1984 год, чтобы убить Сару Коннор?",
        img: "t-800.jpeg",
        answers: [
            { text: "А) Т-1000", correct: false },
            { text: "Б) Т-800", correct: true },
            { text: "В) Т-X", correct: false },
            { text: "Г) Т-600", correct: false }
        ]
    },
    {
        q: "2. Кто был отцом Джона Коннора?",
        img: "john.webp",
        answers: [
            { text: "А) Терминатор", correct: false },
            { text: "Б) Питер Силберман", correct: false },
            { text: "В) Майлз Дайсон", correct: false },
            { text: "Г) Кайла Риз", correct: true }
        ]
    },
    {
        q: "3. Из какого материала сделан Т-1000 (злодей из второй части)?",
        img: "t-1000.jpg",
        answers: [
            { text: "А) Титан", correct: false },
            { text: "Б) Жидкий металл (мимикрирующий полисплав)", correct: true },
            { text: "В) Кибернетическая кожа", correct: false },
            { text: "Г) Обедненный уран", correct: false }
        ]
    },
    {
        q: "4. Как называлась нейронная сеть, которая развязала ядерную войну?",
        img: "skynet.jpg",
        answers: [
            { text: "А) Скайнет", correct: true },
            { text: "Б) Генезис", correct: false },
            { text: "В) Альтрон", correct: false },
            { text: "Г) Матрица", correct: false }
        ]
    },
    {
        q: "5. Что Терминатор ответил владельцу гостиницы в первом фильме, когда тот спросил о запахе в номере?",
        img: "fuck_you.jpg",
        answers: [
            { text: "А) «Я вернусь»", correct: false },
            { text: "Б) «Мне нужна твоя одежда»", correct: false },
            { text: "В) «Пошел ты, козел»", correct: true },
            { text: "Г) «Проблема решена»", correct: false }
        ]
    },
    {
        q: "6. В каком городе происходят события первых двух фильмов?",
        img: "angeles.jpg",
        answers: [
            { text: "А) Нью-Йорк", correct: false },
            { text: "Б) Лос-Анджелес", correct: true },
            { text: "В) Чикаго", correct: false },
            { text: "Г) Сан-Франциско", correct: false }
        ]
    },
    {
        q: "7. Какую коронную фразу произносит Т-800 перед тем, как разбить замороженного Т-1000?",
        img: "baby.jpg",
        answers: [
            { text: "А) «Прощай, детка»", correct: false },
            { text: "Б) «Это конец»", correct: false },
            { text: "В) «Ничего личного»", correct: false },
            { text: "Г) «Hasta la vista, baby»", correct: true }
        ]
    },
    {
        q: "8. Как звали инженера компании Cyberdyne Systems, который работал над новым процессором?",
        img: "ingeneer.jpg",
        answers: [
            { text: "А) Майлз Дайсон", correct: true },
            { text: "Б) Джон Коннор", correct: false },
            { text: "В) Рик Декард", correct: false },
            { text: "Г) Тони Старк", correct: false },
        ]
    },
    {
        q: "9. Какое правило Терминатор нарушил в конце второго фильма по просьбе Джона?",
        img: "dead.jpg",
        answers: [
            { text: "А) Он не стал никого убивать", correct: false },
            { text: "Б) Он научился улыбаться", correct: false },
            { text: "В) Он решил уничтожить себя в расплавленном металле»", correct: true },
            { text: "Г) Он заговорил по-испански", correct: false }
        ]
    },
    {
        q: "10. Что именно Т-1000 спросил у мачехи Джона по телефону (когда уже убил её)?",
        img: "call.jpg",
        answers: [
            { text: "А) «Как дела у Вулфи?»", correct: true },
            { text: "Б) «Где Джон?»", correct: false },
            { text: "В) «Почему собака лает?»", correct: false },
            { text: "Г) «Ты дома?»", correct: false },
            
        ]
    },
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