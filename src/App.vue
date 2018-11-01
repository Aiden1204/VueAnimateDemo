<template>
  <div id="app">
    <div id="nav">
      <router-link to="/A">A</router-link> |
      <router-link to="/B">B</router-link> |
      <router-link to="/C">C</router-link> |
      <router-link to="/D">D</router-link> |
    </div>
    <transition :name="$store.state.states">
      <router-view/>
    </transition>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 30px;*/
  }

  #nav{
    height: 50px;
    line-height: 50px;
  }

  .turn-left-enter {
    transform: translate3d(100%, 0, 0);
  }
  .turn-left-leave-to {
    /* transform: translate3d(-20%, 0, 0); */
  }
  .turn-left-enter-active,
  .turn-left-leave-active {
    transition: transform 2s ease;
  }
  .turn-right-enter {
    /* transform: translate3d(-20%, 0, 0); */
  }
  .turn-right-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  .turn-right-enter-active,
  .turn-right-leave-active {
    transition: transform 2s ease;
  }
  .turn-right-leave-active {
    z-index: 2;
  }
</style>
