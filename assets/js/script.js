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
    }
  },

  methods: {
    setThumbsHeight(){
      this.numThumbs = this.images.length;
      root.style.setProperty("--numThumbs", this.numThumbs)
    }
  },

  mounted(){
    this.setThumbsHeight()
  }
}).mount("#app");


