const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    },
    {
        image: 'img/06.jpg',
        title: 'Norvegia',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    },
    {
        image: 'img/07.jpg',
        title: 'Italia',
        text: 'Benvenuti nel paese più bello del mondo.',
    },
    {
        image: 'img/08.jpg',
        title: 'Giappone',
        text: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
    
];

console.log(slides);

/*
Descrizione:
Far funzionare lo slider partendo dall’html ricevuto.
Al click su una freccia, l’immagine mostrata cambia.
la lista delle thumbs deve essere generata tramite un v-for
Bonus:
1- al click su una thumb, visualizzare in grande l’immagine corrispondente
2 - Al click sulle frecce, cambia l’immagine, ma si evidenzia anche la thumbnail corrispondente
3- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente (vi servirà l’evento mounted() di vue)
4- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
*/

//inserisco vue
const app = new Vue({
    el: '#app',

    data: {
        //prendo i dati dall'array slides
        slide: slides,
        //aggiungo un indice per la slide
        currentIndex: 0,
    },
    
    mounted: function() {
        this.nextSlide();;
    },

    methods: {
        //aggiungo le funzioni per i click
        downClick() {
            if(this.currentIndex >= 0 && this.currentIndex < this.slide.length - 1) {
                this.currentIndex++; 
            } else {
                this.currentIndex = 0;
            }
        },
        upClick() {
            if(this.currentIndex > 0 && this.currentIndex < this.slide.length) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.slide.length - 1;
            }   
        },
        //aggiungo la funzione per il focus sulla thumb
        thumbClick(index) {
            this.currentIndex = index;
        },
        next() {
            if(this.currentIndex < this.slide.length - 1) {
            this.currentIndex += 1;
            } else {
            this.currentIndex = 0;
            }
        },
        nextSlide() {
            this.timer = setInterval(this.next, 3000);             
        },
        //quando vado in hover mi fermo l'autoplay
        mouseEnter() {
            clearInterval(this.timer);
        },
        //quando esco dall'hover riprendo l'autoplay
        mouseLeave() {
            this.nextSlide();
        }
    },
});





