const questions = [
    {
        q: "1. Какая надпись была сделана на подошве Вуди и Базза Лайтера?",
        img: "toy23.webp",
        answers: [
            { text: "А) Sid (Сид)", correct: false },
            { text: "Б) Andy (Энди)", correct: true },
            { text: "В) Bonnie (Бонни)", correct: false },
            { text: "Г) Disney (Дисней)", correct: false }
        ]
    },
    {
        q: "2. Кто был главным врагом игрушек в первой части мультфильма?",
        img: "latets.jpg", 
        answers: [
            { text: "А) Сосед Сид", correct: true },
            { text: "Б) Лотсо", correct: false },
            { text: "В) Старатель Пит", correct: false },
            { text: "Г) Император Зург", correct: false }
        ]
    },
    {
        q: "3. Какой коронный клич произносит Базз Лайтер?",
        img: "Toy-story2.webp",
        answers: [
            { text: "А) «Йи-ха, ковбой!»", correct: false },
            { text: "В) «В атаку!»", correct: false },
            { text: "Г) «Один за всех и все за одного!»", correct: false },
            { text: "Б) «Бесконечность не предел!»", correct: true }
        ]
    },
    {
        q: "4. Из какой посуды Базз Лайтер пил воображаемый чай на «вечеринке» у Сида?",
        img: "1235.jpg",
        answers: [
            { text: "А) Из кружки", correct: false },
            { text: "Б) Из маленькой розовой чашки", correct: true },
            { text: "В) Из бутылочки", correct: false },
            { text: "Г) Из ведра", correct: false }
        ]
    },
    {
        q: "5. Как зовут эластичную игрушку-собаку, у которой тело — это пружина?",
        img: "spiralka.jpg",
        answers: [
            { text: "А) Слинки", correct: false },
            { text: "Б) Рекс", correct: false },
            { text: "В) Спиралька", correct: true },
            { text: "Г) Гав-Гав", correct: false }
        ]
    },
    {
        q: "6. В какой ресторан отправились игрушки, чтобы найти Энди в первой части?",
        img: "pizza_planet.jpg",
        answers: [
            { text: "А) Бургер Кинг", correct: false },
            { text: "Б) Макдоналдс", correct: false },
            { text: "В) Куриная хижина (Al's Toy Barn)", correct: false },
            { text: "Г) Планета Пицца (Pizza Planet)", correct: true }
        ]
    },
    {
        q: "7. Какая игрушка была главным злодеем в «Истории игрушек 3»?",
        img: "lotso.webp",
        answers: [
            { text: "А) Медведь Лотсо", correct: true },
            { text: "Б) Кукла Габби Габби", correct: false },
            { text: "В) Кен", correct: false },
            { text: "Г) Старатель Пит", correct: false }
        ]
    },
    {
        q: "8. Из чего Бонни сделала Вилкинса в четвертой части?",
        img: "vilkins.webp",
        answers: [
            { text: "А) Из дерева", correct: false },
            { text: "Б) Из пластиковой ложко-вилки ", correct: true },
            { text: "В) Из бумаги", correct: false },
            { text: "Г) Из глины", correct: false },
        ]
    },
    {
        q: "9. К какому виду динозавров относится Рекс?",
        img: "reks.webp",
        answers: [
            { text: "А) Трицератопс", correct: false },
            { text: "Б) Диплодок", correct: false },
            { text: "В) Птеродактиль", correct: false },
            { text: "Г) Тираннозавр", correct: true },
        ]
    },
    {
        q: "10. Как звали сестру Энди?",
        img: "molly.jpg",
        answers: [
            { text: "А) Молли", correct: true },
            { text: "Б) Джесси", correct: false },
            { text: "В) Лили", correct: false },
            { text: "Г) Анна", correct: false },
            
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