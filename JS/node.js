const universes = [
    { title: "The Witcher", desc: "Чудовища, интриги и чеканные монеты.", img: "https://vignette.wikia.nocookie.net", category: "Games" },
    { title: "Star Wars", desc: "Далекая-далекая галактика ждет.", img: "https://wallpaperaccess.com", category: "Movies" },
    { title: "Harry Potter", desc: "Школа чародейства и волшебства.", img: "https://wallpaperaccess.com", category: "Books" },
    { title: "Cyberpunk 2077", desc: "Найт-Сити не прощает ошибок.", img: "https://wallpaperaccess.com", category: "Games" },
    { title: "Lord of the Rings", desc: "Путешествие в Средиземье.", img: "https://wallpaperaccess.com", category: "Books" },
    { title: "Marvel", desc: "От Мстителей до Мультивселенной.", img: "https://wallpaperaccess.com", category: "Comics" }
];

function renderCards(list) {
    const grid = document.getElementById('universe-grid');
    grid.innerHTML = list.map(u => `
        <div class="card" onclick="alert('Переход к тесту: ${u.title}')">
            <span class="badge">${u.category}</span>
            <img src="${u.img}" alt="${u.title}">
            <div class="card-info">
                <h3>${u.title}</h3>
                <p>${u.desc}</p>
            </div>
        </div>
    `).join('');
}

// Поиск в реальном времени
document.getElementById('search').addEventListener('input', (e) => {
    const filtered = universes.filter(u => 
        u.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    renderCards(filtered);
});

// Первый запуск
renderCards(universes);