<template>
  <div class="index">
    <div class="index-text">文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</div>
    <div class="index-img"></div>
  </div>
</template>

<script lang="ts" setup>
import { register } from 'swiper/element/bundle'



</script>

<style lang="scss" scoped>

.index {
  display: flex;

  &-text {
    width: 30%;
    background: red;
  }

  &-img {
width: 70%;
    background: gold;
  }

}

@media screen and (max-width: 1200px){
.index {

}

}

</style>
