<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  body {
    background-image: url("https://texturex.com/wp-content/uploads/2018/03/dark-brushed-metal-texture-steel-black-stock-photo-scratch-wallpaper-5.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>