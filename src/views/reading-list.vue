<template>
  <div>
    <div class="readingList">
      <ul>
        <h1>Reading List</h1>
        <li v-for="book in books" :key="book.id">
          <p>
            {{ book.Title }} by {{ book.Author }}
            <button @click="removeTargetBook(book)">remove</button>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["readingList"],
  data() {
    return {};
  },
  computed: {
    library() {
      return this.$store.state.library;
    },
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
  },
  methods: {
    removeTargetBook(book) {
      let bookIds = JSON.parse(localStorage.getItem("bookIds"));
      let index = bookIds.indexOf(book.id);
      bookIds.splice(index, 1);
      localStorage.setItem("bookIds", JSON.stringify(bookIds));
      location.reload();
    },
  },
};
</script>

<style scoped lang="scss">
.readingList {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 100%;
  background-color: darkslategray;

  h1 {
    color: white;
  }

  p {
    color: white;
    border-bottom: 1px solid white;
    justify-content: space-evenly;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
  }
}
</style>
