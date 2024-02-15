import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './component/FoodItem.vue';
import ToDo from "./component/ToDo.vue";
import CompOne from "./component/CompOne.vue";
import CompTwo from "./component/CompTwo.vue";

const app = createApp(App)
app.component('food-item', FoodItem)
app.component('to-do', ToDo)
app.component('comp-one', CompOne)
app.component('comp-two', CompTwo)
app.mount('#app')