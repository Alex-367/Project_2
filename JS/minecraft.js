const questions = [
    {
        q: "1. Как назывался Майнкрафт на самом раннем этапе разработки?",
        img: "minecraft-ve-kupler.jpg",
        answers: [
            { text: "А) Block Game", correct: false },
            { text: "Б) Cave Game", correct: true },
            { text: "В) World Builder", correct: false },
            { text: "Г) Craft World", correct: false }
        ]
    },
    {
        q: "2. Какой предмет нужно использовать, чтобы приручить волка?",
        img: "wolf.jpg",
        answers: [
            { text: "А) Сырая говядина", correct: false },
            { text: "Б) Гнилая плоть", correct: false },
            { text: "В) Яблоко", correct: false },
            { text: "Г) Кость", correct: true },
        ]
    },
    {
        q: "3. Что произойдет, если странник Края (Эндермен) окажется на воде?",
        img: "87ac0-16726340707877-1920.webp",
        answers: [
            { text: "А) Он станет сильнее", correct: false },
            { text: "Б) Он превратится в обычного зомби", correct: false },
            { text: "В) Он получит урон и телепортируется", correct: true },
            { text: "Г) Ничего, он любит воду", correct: false }
        ]
    },
    {
        q: "4. Какой блок невозможно разрушить в режиме «Выживание»?",
        img: "blocks.webp",
        answers: [
            { text: "А) Обсидиан", correct: false },
            { text: "Б) Коренная порода (Бедрок)", correct: true },
            { text: "В) Алмазный блок", correct: false },
            { text: "Г) Древний обломок", correct: false }
        ]
    },
    {
        q: "5. Как называется измерение, в которое можно попасть через портал из обсидиана?",
        img: "screen-5.jpg",
        answers: [
            { text: "А) Нижний мир (Незер)", correct: true },
            { text: "Б) Край (Энд)", correct: false },
            { text: "В) Сумеречный лес", correct: false },
            { text: "Г) Глубокая тьма", correct: false }
        ]
    },
    {
        q: "6. Какое из этих животных можно использовать как транспорт, если надеть на него седло и взять удочку с морковкой?",
        img: "animals.webp",
        answers: [
            { text: "А) Свинья", correct: true },
            { text: "Б) Корова", correct: false },
            { text: "В) Овца", correct: false },
            { text: "Г) Лама", correct: false }
        ]
    },
    {
        q: "7. Кто из мобов боится кошек и всегда убегает от них?",
        img: "creeper.webp",
        answers: [
            { text: "А) Зомби", correct: false },
            { text: "Б) Крипер", correct: true },
            { text: "В) Скелет", correct: false },
            { text: "Г) Паук", correct: false }
        ]
    },
    {
        q: "8. Сколько золотых слитков и яблок нужно, чтобы скрафтить обычное «золотое яблоко»?",
        img: "apple.webp",
        answers: [
            { text: "А) 4 слитка и 1 яблоко", correct: false },
            { text: "Б) 9 слитков и 1 яблоко", correct: false },
            { text: "В) Оно не крафтится, только находится в сундуках", correct: false },
            { text: "Г) 8 слитков и 1 яблоко", correct: true }
        ]
    },
    {
        q: "9. Как зовут главного босса в измерении Край?",
        img: "end.png",
        answers: [
            { text: "А) Иссушитель", correct: false },
            { text: "Б) Херобрин", correct: false },
            { text: "В) Дракон Края", correct: true },
            { text: "Г) Варден", correct: false }
        ]
    },
    {
        q: "10. Что нужно сделать с зомби-жителем, чтобы превратить его обратно в обычного жителя?",
        img: "zhitel.webp",
        answers: [
            { text: "А) Использовать взрывное зелье слабости и дать золотое яблоко", correct: true },
            { text: "Б) Дать ему торт", correct: false },
            { text: "В) Просто подождать 10 минут", correct: false },
            { text: "Г) Ударить его алмазным мечом", correct: false }
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