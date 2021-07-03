const CARDS = [
  {
    img: "https://source.unsplash.com/random/300x300",
    title: "Lorem Ipsum",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
  },
  {
    img: "https://source.unsplash.com/random/301x301",
    title: "Lorem Ipsum",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
  },
  {
    img: "https://source.unsplash.com/random/302x302",
    title: "Lorem Ipsum",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
  },
  {
    img: "https://source.unsplash.com/random/303x303",
    title: "Lorem Ipsum",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
  },
  {
    img: "https://source.unsplash.com/random/304x304",
    title: "Lorem Ipsum",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
  }
]

const CardItem = {
  props: ['card'],
  template: `
    <a class="card" :href="card.img">
      <img :src="card.img">
      <h2>{{card.title}}</h2>
      <p>{{card.description}}</p>
    </a>
  `
}

const CardsList = {
  props: ['cards'],
  components: {
    'card-item': CardItem
  },
  template: `
    <div class="cards_wrapper">
      <card-item v-for="card in cards" :card="card"></card-item>
    </div>
  `
}

var app = new Vue({
  el: "#app",
  components: {
    'cards-list': CardsList
  },
  data: function(){
    return {
      cards: CARDS
    }
  }
})