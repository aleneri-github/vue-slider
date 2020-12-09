var app = new Vue({
  el: '#root',
  data: {
    imgIndex: 0,
    images: [
      "https://www.giornaledellavela.com/news/wp-content/uploads/2018/01/borghi.jpg",
      "https://gabrielecaramellino.nova100.ilsole24ore.com/wp-content/uploads/sites/64/2017/06/borghi-italiani.jpg",
      "https://www.stile.it/wp-content/uploads/2019/06/borghi-italiani.jpg",
      "https://www.paultaylor.it/wp-content/uploads/2019/03/centro-2.jpg",
      "https://www.radiomontecarlo.net/resizer/1200/720/true/2020-05-22_16_29_00_panorama-1590157587354-jpg-1590157766454.jpg--i_meravigliosi_borghi_italiani_sul_mare_da_riscoprire_quest_estate.jpg?1590157766000",
      "https://www.turituri.com/wp-content/uploads/amalfi-1.jpg"
    ]
  },
  created: function() {
    setInterval(
      () => {
        this.nextImg();
      }, 2000
    )
  },
  methods: {
    nextImg: function() {
      this.imgIndex++;
      if(this.imgIndex == this.images.length) {
        this.imgIndex = 0;
      }
    },
    prevImg: function() {
      this.imgIndex--;
      if(this.imgIndex == -1) {
        this.imgIndex = this.images.length -1;
      }
    }


  }
});
