<template>
  <div id="app">
    <router-link :books="readingList"  to="/reading-list">Readig List</router-link>
    <router-link to="/home"> Home Page </router-link>
    <router-view />
  </div>
</template>

<script> 
export default {
  name: "App",
  data() {
    return {
      readingList: [],
    };
  },
  methods: {
    addToReadHandler(book) {
      this.readingList.push(book);
    },
  },
};

</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.nav {
  padding: 1rem;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
