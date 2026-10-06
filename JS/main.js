const universes = [
    {title: "Гарри Поттер", desc: "Магия, дружба, борьба.", img: "harry_potter.webp"},
    {title: "Винни Пух", desc: "Плюшевый медведь ищет мёд и приключения.", img: "vinny_pyx.jpg"},
    {title: "Война и мир", desc: "Жизнь аристократии на фоне наполеоновских войн.", img: "war_and_peace.jpg"},
    {title: "Унесённые ветром", desc: "Выживание в гражданской войне.", img: "унесённые_ветром.jpg"},
    {title: "Алиса в Стране чудес", desc: "Абсурд, кролик, безумное чаепитие.", img: "alisa.jpg"},
    {title: "Чарли и шоколадная фабрика", desc: "Шоколад, билеты, странный Вилли Вонка.", img: "willi_wonka.jpg"},
    {title: "Преступление и наказание", desc: "Убийство, совесть, раскаяние.", img: "nakazanie.png"},
    {title: "Мастер и Маргарита", desc: "Дьявол, Москва, любовь, рукописи.", img: "master.jpg"},
    {title: "Маленький принц", desc: "Планета, роза, дружба, мудрость.", img: "princ.webp"},
];

function renderCards(list) {
    const grid = document.getElementById('universe-grid');
    grid.innerHTML = list.map(u => `
        <div class="card" onclick="alert('Переход к тесту: ${u.title}')">
            <img src="${u.img}" alt="${u.title}" class="img">
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