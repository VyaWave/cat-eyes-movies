<template>
  <div id="app">
    <router-view></router-view>
    <div class="navigator">
      <router-link tag="div" to="/movies" >
        <a @click="toRouter('Movies')"
        :class="{active: currentRouter == 'Movies' }">电影</a>
      </router-link>
      <router-link tag="div" to="/cinemas" @click="toRouter('cinemas')">
        <a>影院</a>
      </router-link>
      <router-link tag="div" to="/hello" @click="toRouter('hello')">
        <a>我的</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    currentRouter: 'Movies'
  }),
  methods: {
    toRouter (routerName) {
      console.log(routerName)
      this.currentRouter = routerName
    }
  }
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
  background: white;
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
  font-size: 16px;
  }
  a {
    color: #808080;
    font-size: 20px;
    line-height: 40px;
    text-decoration: none;
    cursor: pointer;
  }
  .router-link-active a {
    color:#df2d2d !important
  }
</style>
