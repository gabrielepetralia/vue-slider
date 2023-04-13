const { createApp } = Vue;
const root = document.querySelector(':root');

createApp({
  data() {
    return {
      images: [
        "01.webp",
        "02.webp",
        "03.webp",
        "04.webp",
        "05.webp",
      ],
      numThumbs : 0,
      counter : 0,
    }
  },

  methods: {
    setThumbsHeight(){
      this.numThumbs = this.images.length;
      root.style.setProperty("--numThumbs", this.numThumbs);
    },

    nextPrev(isNext){
      isNext ? this.counter++ : this.counter--;
      if(this.counter === this.images.length) this.counter = 0;
      if(this.counter < 0) this.counter = this.images.length - 1;
    }
  },

  mounted(){
    this.setThumbsHeight();
  }
}).mount("#app");


