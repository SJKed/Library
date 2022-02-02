<template>
  <div>
    <li v-for="book in books" :key="book.id">
      {{ book.Title }}
    </li>
  </div>
</template>

<script>
import library from "../assets/library.json";
export default {
  props: ["readingList"],
  data() {
    return {
      library: [...library],
    };
  },
  computed: {
    list() {
      let bookIds = JSON.parse(localStorage.getItem("bookIds"));
      if (bookIds == null) {
        bookIds = [];
      }
      return bookIds;
    },
    books() {
      return this.library.filter((book) => this.list.includes(book.id));
    },
  }
};
</script>

<style></style>
