<template>
  <div class="fader">
    <div class="inspect">
      <router-link to="/home">
        <img src="../assets/arrow_back_ios_black_24dp.svg">
      </router-link>
      <div class="bookCover" :style="{ backgroundColor: book.BookColor }">
        <div class="booktext">
          <p class="title">{{ book.Title }}</p>
          <p class="author">{{ book.Author }}</p>
        </div>
      </div>
      <div class="bookInfo">
        <p class="title">{{ book.Title }}</p>
        <p class="author">{{ book.Author }}</p>
        <p>{{ book.Plot }}</p>
        <div class="bookFacts">
          <div>
            <p>Audciance: {{ book.Audciance }}</p>
            <p>Pages: {{ book.Pages }}</p>
          </div>
          <div>
            <p>First Published: {{ book.Year }}</p>
            <p>Publisher: {{ book.Publisher }}</p>
          </div>
        </div>
        <button @click="$emit('addToRead', book)">Oh, I want to read it</button>
      </div>
    </div>
  </div>
</template>

<script>
import library from "../assets/library.json";
export default {
  computed: {
    book() {
      return library.find((library) => library.id == this.$route.params.id);
    },
  },
  data() {
    return {
      myJson: library,
    };
  },
};
</script>

<style scoped lang="scss">
.fader {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: darkslategray;
}
.inspect {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-evenly;
  width: 70vw;
  height: 80vh;
  background-color: darkslategray;
}
.bookCover {
  width: 30%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .booktext {
    margin-left: 1rem;
    width: 100%;
  }
  .title {
    font-size: 2.5rem;
    font-weight: bold;
    color: black;
  }
  .author {
    margin-top: -2rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: black;
  }
}
.bookInfo {
  width: 30%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  color: white;

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
    margin-top: 0;
  }
}
.bookFacts {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15%;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  color: white;
  background-color: gray;
  justify-content: space-between;
}

.bookFacts div {
  display: flex;
  flex-direction: column;
}

button {
  width: 170px;
  height: 3rem;
  border-radius: 8px;
}
</style>
