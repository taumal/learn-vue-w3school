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
    <button class="btn" @click="addItem">Add</button>
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

  <div class="div-border-dash">
    <h3>Slots in Vue</h3>
    <p>We send 'Hello Aliens!' as content to the slot tag inside the SlotComp.vue component from App.vue.</p>
    <slot-comp>Hello Aliens!</slot-comp>
  </div>

  <h3>Slots in Vue</h3>
  <p>We create card-like div boxes from the foods array.</p>
  <div id="slot-wrapper">
    <slot-comp-two v-for="x in foods">
      <img :src="x.url" :alt="x.name">
      <h4>{{ x.name }}</h4>
      <p>{{ x.desc }}</p>
    </slot-comp-two>
    <slot-comp-two/>
  </div>
  <footer>
    <slot-comp-two>
      <h3>Footer</h3>
    </slot-comp-two>
  </footer>

  <div class="wrapper">
    <h1>App.vue</h1>
    <p>The component has two div tags with one slot in each.</p>
    <named-slot>
      <h4>Default Slot!</h4>
      <template #bottomSlot>
        <h4>Bottom Slot!</h4>
        <p>This p tag and the h4 tag above are directed to the bottom slot with the v-slot directive used on the template tag.</p>
      </template>
      <p>This goes into the default slot</p>
    </named-slot>
  </div>

  <div class="div-border-dash">
    <h1>Scoped Slots</h1>
    <p>App.vue controls how local data from the scoped slot is rendered.</p>
    <scoped-slot v-slot="food">
      <hr>
      <h2>{{ food.foodName }} <img class="scoped-slot-img" :src=food.foodUrl></h2>
      <p class="greenP">{{ food.foodDesc }}</p>
      <p>{{ food.staticText }}</p>
      <p>{{ food.dynamicText }}</p>
    </scoped-slot>
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
          url: 'img_apple.svg',
          favorite: true },
        { name: 'Pizza',
          desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.',
          url: 'img_pizza.svg',
          favorite: false },
        { name: 'Rice',
          desc: 'Rice is a type of grain that people like to eat.',
          url: 'img_rice.svg',
          favorite: false },
        { name: 'Fish',
          desc: 'Fish is an animal that lives in water.',
          url: 'img_fish.svg',
          favorite: true },
        { name: 'Cake',
          desc: 'Cake is something sweet that tastes good but is not considered healthy.',
          url: 'img_cake.svg',
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
      if (this.newItem) {
        this.items.push(this.newItem)
        this.newItem = ''
      }
    }
  }
};
</script>

<style>
h3, h4 {
  text-align: center;
}
#wrapper, #slot-wrapper {
  display: flex;
  flex-wrap: wrap;
}
#wrapper > div {
  border: dashed black 1px;
  color: white;
  display: inline-block;
  //width: 120px;
  margin: 10px;
  padding: 20px 10px 15px 10px;
  background-color: #40b3fa;
  flex-basis: 150px;
}
#wrapper > div:hover {
  cursor: pointer;
}
#slot-wrapper img {
  display: block;
  margin: auto;
  width: 60%;
}
#slot-wrapper > div {
  background-color: lightgreen;
}
footer > div {
  background-color: #6900ff;
  color: #40b3fa;
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
.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  border: none;
  border-radius: 25px; /* Rounded corners */
  cursor: pointer;
  background: linear-gradient(45deg, #fd3ab7, #930ffc, #006cfc); /* Gradient background */
  //background-image: linear-gradient(45deg, #3d0d8f 24.89%, #4e24c3 41.03%, #6542ff 55.67%, #ac42ff 76.24%, #f74792 85.67%, #fec723 102.51%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Shadow */
  -webkit-transition:  transform 0.2s, box-shadow 1s, background 1s;
  transition: transform 1s, box-shadow 1s, background 1s;
}
.btn:hover {
  background: linear-gradient(45deg, #006cfc, #930ffc, #fd3ab7); /* Darker gradient background */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2); /* Larger shadow */
  transform: translateY(-2px); /* Move button up slightly */
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
.scoped-slot-img {
  float: right;
  height: 70px;
  margin-left: 10px;
}
</style>
