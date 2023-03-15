const { createApp } = Vue

  createApp({
    data() {
      return {
        slides: [
            {
              image: 'img/01.webp',
              title: 'Spiderman',
              text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
            },
            {
              image: 'img/02.webp',
              title: 'Ratchet & Clank',
              text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
            },
            {
              image: 'img/03.webp',
              title: 'Fortnite',
              text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.'
            },
            {
              image: 'img/04.webp',
              title: 'Stray',
              text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
            },
            {
              image: 'img/05.webp',
              title: 'Avengers',
              text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay..'
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
    selectSlide(index) {
        this.active = index
    }
 }

}).mount('#app')



console.log(slides);