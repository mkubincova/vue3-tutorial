const app = Vue.createApp({
    data() {
        return {
            url: 'https://www.wikipedia.org/',
            showButtons: false,
            title: 'Dune Messiah',
            author: 'Frank Herbert',
            age: 65,
            x: 0,
            y: 0,
            books: [
                { title: 'Dune Messiah', author: 'Frank Herbert', isFav: true, coverUrl: 'https://www.slovart.cz/buxus/images/image_27862_19_v1.jpeg' },
                { title: 'The Lord of the Rings', author: 'J. R. R. Tolkien', isFav: false, coverUrl: 'https://www.syfy.com/sites/syfy/files/2021/03/lotr-illustrated.jpg' },
                { title: '1984', author: 'Goerge Orwell', isFav: true, coverUrl: 'https://www.slovart.cz/buxus/images/image_16865_19_v1.jpeg' }
            ]
        };
    },
    methods: {
        decreaseAge() {
            this.age--;
        },
        changeTitle(newTitle) {
            this.title = newTitle;
        },
        handleEvent(e, number) {
            console.log(e, e.type, number || 0);
        },
        handleMousemove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter(book => book.isFav);
        }
    }
});

app.mount('#app');