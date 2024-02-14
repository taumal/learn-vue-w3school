<template>
  <li v-bind="$attrs" class="todo-item">
    <label><input type="checkbox"> {{ itemName }}</label>
  </li>
</template>

<script>
export default {
  props: ['itemName']
}
</script>

<style>

</style>