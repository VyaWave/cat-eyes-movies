<template>
  <div id="app">
    <router-view></router-view>
    <div class="navigator">
      <router-link tag="div" to="/movies">
        <a>Movies</a>
      </router-link>
      <router-link tag="div" to="/start">
        <a>start</a>
      </router-link>
      <router-link tag="div" to="/hello">
        <a>hello</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex: 1
}
.navigator {
  position: absolute;
  top: 0;
  right:0;
  left:0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  list-sytle:none;
  }
  a {
    color: #7effc6;
    font-size: 20px;
    line-height: 40px;
    text-decoration: none;
    cursor: pointer;
  }
</style>
