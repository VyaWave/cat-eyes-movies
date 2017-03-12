<template>
  <section class="movies-list-view">
    <img class="logo" src="../../assets/catmovieslogo.png">
    <h2 class="title font">hello 猫眼电影</h2>
    <span class="font">Loading...</span>
  </section>
</template>


<script>
export default {
  name: 'MoviesList'
}
</script>


<style scoped>
  .movies-list-view {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #ef1010;
    color: white;
    flex-direction: column
  }
  .logo {
    width: 200px;
    height: 200px;
    animation: topDown 1s infinite cubic-bezier(0.51, 0.47, 0.32, 0.59);
    position: relative
  }
  .font {
    font-size: 40px;
    line-height: 60px
  }

  @keyframes topDown {
    0 {
      transform: translateY(0px)
    }
    50% {
      transform: translateY(-70px)
    }
    100% {
      transform: translateY(0px)
    }
  }

</style>
