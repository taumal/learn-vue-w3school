<template>
  <div>
    <h2>
      {{ foodName }}
      <img src="/img_quality.svg" v-show="isFavorite">
    </h2>
    <p>{{ foodDesc }}</p>
    <button class="btn-jetbrains" @:click="toggleFavorite">Favorite</button>
  </div>
</template>

<script>
export default {
  props: [
      'foodName',
      'foodDesc',
      'isFavorite'
  ],
  // props: {
  //   foodName: {
  //     type: String,
  //     required: true
  //   },
  //   foodDesc: {
  //     type: String,
  //     required: false,
  //     default: 'This is the default description.',
  //     /*validator: function(value) {
  //       return 20 < value.length && value.length < 50;
  //     }*/
  //   },
  //   isFavorite: {
  //     type: Boolean,
  //     required: false,
  //     default: false
  //   }
  // },
  emits: ['toggle-favorite'],
  data() {
    return {
      // foodIsFavorite: this.isFavorite
    }
  },
  methods: {
    toggleFavorite() {
      // this.foodIsFavorite = !this.foodIsFavorite;
      this.$emit('toggle-favorite', this.foodName);
    }
  }
};
</script>

<style scoped>
.btn-jetbrains {
  padding: 10px 20px;
  background-color: #3e0d90;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  //border: 1px solid #3e0d90;
  border: none;
  background-image: linear-gradient(91deg, #3d0d8f 24.89%, #4e24c3 41.03%, #6542ff 55.67%, #ac42ff 76.24%, #f74792 85.67%, #fec723 102.51%);
  background-repeat: no-repeat;
  background-size: 400%;
  background-position-x: 0;
  //margin: 1px;
  //min-width: 150px;
  -webkit-transition: background-position 2000ms ease-in-out;
  transition: background-position 2000ms ease-in-out;
}
.btn-jetbrains:hover {
  border: none;
  background-position-x: 100%;
  -webkit-transition: background-position 10ms ease-in-out;
  transition: background-position 10ms ease-in-out;
}
img {
  height: 1.5em;
  float: right;
}
</style>