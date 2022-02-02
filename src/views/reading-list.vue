<template>
  <div>
    <li v-for="book in library" :key="book.id">
      {{ book }}
    </li>

    <h1>lelelele</h1>
  </div>
</template>

<script>
import library from "../assets/library.json";
export default {
  data() {
    return {
      library: [...library],
    };
  },
};
</script>

<style></style>
