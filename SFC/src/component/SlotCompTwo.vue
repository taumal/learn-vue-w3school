<template>
  <div> <!-- This div makes the card-like appearance -->
    <slot>
      <h4>This is fallback content</h4>
    </slot>
  </div>
</template>

<script>
export default {
  name: "SlotCompTwo"
}
</script>

<style scoped>
div {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  flex-basis: 150px;
  border-radius: 10px;
  border: solid black 2px;
  margin: 10px;
  padding: 20px 10px 0 10px;
}
div:hover {
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
img {
  display: block;
  margin: auto;
  width: 60%;
}
h4 {
  color: rgb(8, 108, 4);
  text-shadow: 0 0 1px rgba(29, 128, 0, 0.25), 0 0 1px rgba(29, 128, 0, 0.25), 0 0 1px rgba(29, 128, 0, 0.25);
}
</style>