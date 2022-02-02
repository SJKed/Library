<template>
  <div class="home">
    <h1>8 Classic Childrens book</h1>
    <div class="library">
      <router-link to="/about"
        class="book"
        v-for="book in myJson"
        v-bind:key="book.Title"
        v-bind:style="{ backgroundColor: book.BookColor }"
        :library="book"
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
import library from "../assets/library.json";

export default {
  name: "Home",
  data() {
    return {
      myJson: library,
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
.home {
  margin-left: auto;
  margin-right: auto;
  width: 60vw;;

  h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    color: #2c3e50;
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
