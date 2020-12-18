<template>
  <div class="ej-loading " :class="[fullscreen ? 'fixed' : 'absolute']">
    <img src="./assets/spinner.gif" alt="">
  </div>
</template>

<script>
  export default {
    name: 'CommonLoading',

    data () {
      return {
        fullscreen: false,
      }
    },
  }
</script>

<style lang="less">
  .ej-loading {
    background-color: rgba(255,255,255,.75);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    img {
      width: 40px;
      height: 40px;
    }
    &.fixed {
      position: fixed;
    }
    &.absolute {
      position: absolute;
    }
  }
</style>
