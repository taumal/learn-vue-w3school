<template>
  <div class="compTwoDiv">
    <p>GlobalComponentThree.vue</p>
    <local-component />
  </div>
</template>

<script>
import LocalComponent from "@/component/LocalComponent.vue";
export default {
  name: "GlobalComponentThree",
  components: {
    'local-component': LocalComponent
  },
}
</script>

<style>

</style>