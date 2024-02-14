import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './component/FoodItem.vue';
import ToDo from "./component/ToDo.vue";

const app = createApp(App)
app.component('food-item', FoodItem)
app.component('to-do', ToDo)
app.mount('#app')