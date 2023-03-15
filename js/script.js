const { createApp } = Vue

  createApp({
    data() {
      return {
        slides: [
            {
              image: 'img/01.webp',
              title: 'Spiderman',
              text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
              image: 'img/02.webp',
              title: 'Ratchet & Clank',
              text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
              image: 'img/03.webp',
              title: 'Fortnite',
              text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
              image: 'img/04.webp',
              title: 'Stray',
              text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
              image: 'img/05.webp',
              title: 'Avengers',
              text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            }
          ],
          active: 0
        }
      },

    methods: {

    prev() {
        if (this.active === 0) {
            this.active = this.slides.length - 1
        } else {
            this.active--
        }
    },
        next() {
        if (this.active === this.slides.length - 1) {
            this.active = 0
        } else {
            this.active++
        }
    },
}

}).mount('#app')



console.log(slides);