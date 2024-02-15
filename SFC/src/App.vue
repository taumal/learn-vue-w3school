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

  <div class="wrapper">
    <h3 class="todo-header">ToDo List</h3>
    <ul class="todo-list">
      <to-do
          v-for="i in items"
          :key = "i"
          :item-name = "i"
      />
    </ul>
    <input v-model="newItem" class="todo-input" @keydown.enter="addItem">
    <button class="btn-jetbrains" @click="addItem">Add</button>
  </div>

  <div class="div-border-dash">
    <h3>Global Styling</h3>
    <p>This p-tag belongs to 'App.vue'</p>
    <comp-one />
    <comp-two />
  </div>
  <div class="div-border-dash">
    <h3>Global Components</h3>
    <p>App.vue</p>
    <p>The CompOne.vue component is used inside both App.vue and CompTwo.vue.</p>
    <global-component-one/>
    <global-component-two/>
  </div>
  <div class="div-border-dash">
    <h3>Local Component</h3>
    <p>The LocalComponent.vue component is a local component and can only be used inside App.vue.</p>
    <global-component-one />
    <global-component-three />
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
      ],
      newItem: '',
      items: ['Buy Apples', 'Make Pizza', 'Go To Bazaar']
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
    },
    addItem() {
      this.items.push(this.newItem)
      this.newItem = ''
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
.wrapper {
  max-width: 600px;
  margin: 20px 10px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.todo-header {
  text-align: center;
  margin-bottom: 20px;
}
.todo-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.todo-list {
  list-style-type: none;
  padding: 0;
}
.todo-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.todo-item input[type="checkbox"] {
  margin-right: 10px;
}

.todo-item label {
  flex-grow: 1;
  font-size: 16px;
}

p {
  width: 200px;
}
.div-border-dash {
  border: dashed black 1px;
  max-width: 300px;
  margin: 20px 10px;
  padding: 20px;
  border-radius: 8px;
}
.compOneDiv{
  margin: 10px;
  padding: 10px;
  background-color: #ff604b;
}
.compTwoDiv {
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}
</style>
