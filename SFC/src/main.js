import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './component/FoodItem.vue';
import ToDo from "./component/ToDo.vue";
import CompOne from "./component/CompOne.vue";
import CompTwo from "./component/CompTwo.vue";
import GlobalComponentOne from "@/component/GlobalComponentOne.vue";
import GlobalComponentTwo from "@/component/GlobalComponentTwo.vue";
import GlobalComponentThree from "@/component/GlobalComponentThree.vue";
import SlotComp from "@/component/SlotComp.vue";
import SlotCompTwo from "@/component/SlotCompTwo.vue";
import NamedSlot from "@/component/NamedSlot.vue";

const app = createApp(App)
app.component('food-item', FoodItem)
app.component('to-do', ToDo)
app.component('comp-one', CompOne)
app.component('comp-two', CompTwo)
app.component('global-component-one', GlobalComponentOne)
app.component('global-component-two', GlobalComponentTwo)
app.component('global-component-three', GlobalComponentThree)
app.component('slot-comp', SlotComp)
app.component('slot-comp-two', SlotCompTwo)
app.component('named-slot', NamedSlot)
app.mount('#app')