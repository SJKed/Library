<template>
  <div class="home">
    <h1>8 Classic Childrens book</h1>

    <div class="library">
      <router-link
        :to="'/book/' + book.id"
        class="book"
        v-for="book in library"
        :key="book.id"
        :style="{ backgroundColor: book.BookColor }"
        :library="book"
        @click="logMe()"
        @addToRead="addToReadHandler"
      >
        <div class="booktext">
          <p class="title">{{ book.Title }}</p>
          <p class="author">{{ book.Author }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
    };
  },
  computed: {
    library() {
      return this.$store.state.library
    },
  },
  methods: {
    logMe() {
      console.log("clicked");
    },
    addToReadHandler(book) {
      console.log(book);
      this.readingList.push(book)
      console.log(this.readingList);
    },
  },
};
</script>

<style lang="scss">
.home {
  margin-left: auto;
  margin-right: auto;
  width: 60vw;

  h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    color: black;
  }
}
.library {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.book {
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  padding-left: 1rem;
  height: 300px;
  width: 215px;
  margin: 10px;
  border-left: 10px solid black;
  justify-content: flex-end;
}
.booktext {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: flex-end;
  width: 100%;
  height: 100px;
}
.title {
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
}
.author {
  margin-top: -15px;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: white;
  font-style: italic;
  font-family: Arial;
}
.un {
  color: red;
  font-family: Arial;
  font-size: 16px;
}
.av {
  color: green;
}
</style>
