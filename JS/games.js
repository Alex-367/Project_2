const universes = [
    {title: "Minecraft", desc: "Кубы, стройка, выживание.", img: "minecraft.webp", url: "minecraft.html"},
    {title: "Grand Theft Auto V", desc: "Ограбления, тачки, открытый мир.", img: "gta_v.webp"},
    {title: "The Last of Us", desc: "Грибок, зомби, суровое выживание.", img: "the_last_of_us.jpg"},
    {title: "Red Dead Redemption 2", desc: "Дикий Запад, бандиты, конец эпохи.", img: "rdr2.jpeg", url: "rdr2.html"},
    {title: "Ведьмак", desc: "Ведьмак, монстры, приключения.", img: "witcher.jpg"},
    {title: "Cyberpunk 2077", desc: "Высокие технологии, низкая жизнь.", img: "cyberpank.jpg", url: "cyberpank.html"},
    {title: "Dota 2", desc: "MOBA, герои, командная стратегия.", img: "dota2.webp"},
    {title: "Brawl Stars", desc: "3 на 3, кубки, бравлеры.", img: "bs.jpg"},
    {title: "Fortnite", desc: "Королевская битва, стройка, скины.", img: "fort.jpeg"},
    {title: "Counter-Strike", desc: "Спецназ против террористов.", img: "cs.webp"}
];

function renderCards(list) {
    const grid = document.getElementById('universe-grid');
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