<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <!-- <a href="/about">about</a> -->
    <router-link :to="{name: 'MyAnimeView'}">Anime</router-link>
    <router-link :to="{name: 'ContactView'}">Contact</router-link>
    <router-link :to="{name: 'PersonalInfo'}">Personal</router-link>
  </nav>

  this is where the component is injected
  <router-view/>
  this is where the component is injected
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
