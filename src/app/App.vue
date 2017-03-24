<template>
  <div id="app">
    <router-view></router-view>
    <div class="navigator">
      <router-link tag="div" to="/movies" >
        <p><img src="../../images/movie.png"/></p>
        <a @click="toRouter('Movies')"
        :class="{active: currentRouter == 'Movies' }">电影</a>
      </router-link>
      <router-link tag="div" to="/cinemas" @click="toRouter('cinemas')">
        <p><img src="../../images/cinema.png"/></p>
        <a>影院</a>
      </router-link>
      <router-link tag="div" to="/profile" @click="toRouter('profile')">
        <p><img src="../../images/mine.png"/></p>
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
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  font-size: 20px;
  font-weight:400;
  font-style: 微软雅黑;
  }
  .navigator p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    paddign: 0;
  }
  img {
    width: 20px;
    height: 20px;
    display: block;
  }
  a {
    color: #69686d;
    font-size: 16px;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
    line-height: 40px;
    font-size: 16px;
  }
  .router-link-active a {
    color:#df2d2d !important
  }
</style>
