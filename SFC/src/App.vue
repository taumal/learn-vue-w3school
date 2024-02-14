<template>
  <h1>Food</h1>
  <p>The user can now change the favorite status of the food items with the use of
    a new data property initialized by the 'is-favorite' prop value.</p>
  <button class="btn" @click="removeFood">Remove</button>
  <div id="wrapper">
    <food-item
        v-for="x in foods"
        :key = "x.name"
        :food-name="x.name"
        :food-desc="x.desc"
        :is-favorite="x.favorite"
        @toggle-favorite="markAsFavourite"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Aliens..',
      foods: [
        { name: 'Apples',
          desc: 'Apples are a type of fruit that grow on trees.',
          favorite: true },
        { name: 'Pizza',
          desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.',
          favorite: false },
        { name: 'Rice',
          desc: 'Rice is a type of grain that people like to eat.',
          favorite: false },
        { name: 'Fish',
          desc: 'Fish is an animal that lives in water.',
          favorite: true },
        { name: 'Cake',
          desc: 'Cake is something sweet that tastes good.',
          favorite: false }
      ]
    };
  },
  methods: {
    removeFood() {
      this.foods.splice(1, 1)
    },
    markAsFavourite(itemName) {
      const getFood = this.foods.find(
          food => food.name === itemName
      )
      getFood.favorite = !getFood.favorite
    }
  }
};
</script>

<style>
#wrapper {
  display: flex;
  flex-wrap: wrap;
}
#wrapper > div {
  border: dashed black 1px;
  color: white;
  display: inline-block;
  width: 120px;
  margin: 10px;
  padding: 10px;
  background-color: #40b3fa;
}
#wrapper > div:hover {
  cursor: pointer;
}
</style>
