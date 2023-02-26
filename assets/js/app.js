const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const playlist = $('.playlist');

const app = {
    songs: [
        {
            name: 'Nevada',
            singer: 'Vicetone',
            path: './assets/music/song1.mp3',
            image: './assets/img/song1.png'
        },
        {
            name: 'Nevada',
            singer: 'Vicetone',
            path: './assets/music/song1.mp3',
            image: './assets/img/song2.png'
        },
        {
            name: 'Nevada',
            singer: 'Vicetone',
            path: './assets/music/song3.mp3',
            image: './assets/img/song3.png'
        },
        {
            name: 'Nevada',
            singer: 'Vicetone',
            path: './assets/music/song4.mp3',
            image: './assets/img/song4.png'
        },
        {
            name: 'Nevada',
            singer: 'Vicetone',
            path: './assets/music/song5.mp3',
            image: './assets/img/song5.png'
        }
    ],
    render: function () {
        const htmls = this.songs.map(song => {
            return `
            <div class="song">
                <div class="thumb"
                    style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        $('.playlist').innerHTML = htmls.join("");
    },
    start: function () {
        this.render();
    }
}

app.start();