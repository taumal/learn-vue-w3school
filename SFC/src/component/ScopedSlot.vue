<template>
  <slot
      staticText="This text is static"
      v-for="x in foods"
      :key="x.name"
      :foodName="x.name"
      :foodDesc="x.desc"
      :foodUrl="x.url"
      :dynamicText="data">
  </slot>
</template>

<script>
export default {
  name: "ScopedSlot",
  data() {
    return {
      data: 'This is local data for dynamic text',
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
      ]
    }
  }
}
</script>

<style scoped>

</style>