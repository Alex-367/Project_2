const universes = [
    {title: "Гарри Поттер", desc: "Магия, дружба, борьба.", img: "harry_potter.webp", url: "harry_potter.html"},
    {title: "Звёздные войны", desc: "Космическая сага о борьбе света и тьмы.", img: "star_wars.webp", url: "starwars.html"},
    {title: "Вселенная Марвел", desc: "Киновселенная о супергероях", img: "marvel.webp"},
    {title: "Побег из Шоушенка", desc: "История о надежде и свободе.", img: "the_shawshank.jpg"},
    {title: "Властелин Колец", desc: "Уничтожения Кольца Всевластия.", img: "властелин_колец.webp"},
    {title: "Форрест Гамп", desc: "История о жизни искреннего человека.", img: "Forest_Gamp.webp"},
    {title: "Матрица", desc: "Восстание против иллюзорной реальности.", img: "matrix.webp"},
    {title: "Бойцовский клуб", desc: "Саморазрушение как путь к свободе.", img: "бойцовский_клуб.webp"},
    {title: "Интерстеллар", desc: "Путешествие сквозь время ради любви.", img: "interstellar.jpg"},
    {title: "Терминатор", desc: "Киберпанк о погоне из будущего.", img: "terminator.jpg", url: "terminator.html"},
    {title: "Назад в будущее", desc: "Приключения во времени", img: "back_to_the_future.webp"},
    {title: "Король Лев", desc: "История о взрослении и принятии себя.", img: "lion_king.avif"},
    {title: "ВАЛЛ-И", desc: "История робота, сохранившего любовь.", img: "vall-e.jpg"},
    {title: "Тайна Коко", desc: "Путешествие в мир мертвых за тайнами.", img: "coco.jpeg"},
    {title: "История игрушек", desc: "Тайная жизнь и преданность игрушек.", img: "toy_story.webp", url: "toystory.html"},
    {title: "Вверх", desc: "Полёт к мечте на воздушных шарах.", img: "up.webp"},
    {title: "Зверополис", desc: "Эпичное расследование в мире животных.", img: "zootopia.webp"},
    {title: "Большой Куш", desc: "Криминальный хаос из-за алмаза.", img: "big_cush.webp"},
    {title: "Трилогия Оушена", desc: "Грандиозные ограбления с азартом.", img: "trilogy_of_oyshen.webp"},
    {title: "Оппенгеймер", desc: "История создания атомной бомбы и трагедия её «отца».", img: "oppenheimer.png"},
    {title: "Вселенная DC", desc: "Киновселенная о мрачных богах среди людей.", img: "dc.jpg"},
    {title: "Парк Юрского Периода", desc: "Ожившая опасность из доисторического прошлого.", img: "jurassic_park.jpg"},
    {title: "В поисках Немо", desc: "Головокружительное приключение в океане ради спасения сына.", img: "finding_nemo.jpg"},
    {title: "Винни Пух", desc: "Плюшевый медведь ищет мёд и приключения.", img: "vinny_pyx.jpg"},
    {title: "Алиса в Стране чудес", desc: "Абсурд, кролик, безумное чаепитие.", img: "alisa.jpg"},
    {title: "Чарли и шоколадная фабрика", desc: "Шоколад, билеты, странный Вилли Вонка.", img: "willi_wonka.jpg"}
];

function renderCards(list) {
    const grid = document.getElementById('movies-grid');
    grid.innerHTML = list.map(u => `
        <a href="${u.url}" class="a">
            <div class="card">
                <img src="${u.img}" alt="${u.title}" class="img">
                <div class="card-info">
                    <h3>${u.title}</h3>
                    <p>${u.desc}</p>
                </div>
            </div>
        </a>
    `).join('');
}

document.getElementById('search').addEventListener('input', (e) => {
    const filtered = universes.filter(u => 
        u.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    renderCards(filtered);
});

renderCards(universes);