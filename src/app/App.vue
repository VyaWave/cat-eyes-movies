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
  box-sizing: border-box;
  padding: 0 20px;
  width: 100%;
  position: absolute;
  height: 40px;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 40px;
  font-size: 20px;
  font-weight:800;
  font-style: oblique;
  }
  a {
    color: #7effc6;
    font-size: 20px;
    line-height: 40px;
    text-decoration: none;
    cursor: pointer;
  }
</style>
