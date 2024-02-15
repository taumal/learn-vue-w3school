<template>
  <div>
    <p>SlotComp.vue</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SlotComp"
}
</script>

<style scoped>
div {
  margin: 10px;
  padding: 10px;
  background-color: #6900ff;
  color: #8cd3ff;
  font-weight: bold;
}
</style>