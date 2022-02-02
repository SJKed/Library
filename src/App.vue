<template>
  <div id="app">
      <div class="nav">
        <router-link to="/home">Library</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.banner {
  background-color: red;
  width: 100%;
  height: 20vh;
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
