<template>
  <h2>Component</h2>
  <div>
    <slot></slot>
  </div>
  <div>
    <slot name="bottomSlot"></slot>
  </div>
</template>

<script>
export default {
  name: "VSlot"
}
</script>

<style scoped>
div {
  width: 50%;
  border: dotted black 1px;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
  font-weight: bold;
}
</style>