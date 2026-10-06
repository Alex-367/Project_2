const books = [
    {title: "Война и мир", desc: "Жизнь аристократии на фоне войн.", img: "war_and_peace.jpg", url: "war_and_piece.html"},
    {title: "Унесённые ветром", desc: "Выживание в гражданской войне.", img: "унесённые_ветром.jpg"},
    {title: "Преступление и наказание", desc: "Убийство, совесть, раскаяние.", img: "nakazanie.png"},
    {title: "Мастер и Маргарита", desc: "Дьявол, Москва, любовь, рукописи.", img: "master.jpg"},
    {title: "Маленький принц", desc: "Планета, роза, дружба, мудрость.", img: "princ.webp"}
];

function renderCards(list) {
    const grid = document.getElementById('books-grid');
    grid.innerHTML = list.map(u => `
        <a href="${u.url}" class="a">
            <div class="card">
                <img src="${u.img}" class="img">
                <div class="card-info">
                    <h3>${u.title}</h3>
                    <p>${u.desc}</p>
                </div>
            </div>
        </a>
    `).join('');
}

document.getElementById('search').addEventListener('input', (e) => {
    const filtered = books.filter(u => 
        u.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    renderCards(filtered);
});

renderCards(books);