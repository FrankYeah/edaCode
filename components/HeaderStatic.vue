<template>
  <div class="header">
    <!-- 桌面版 -->
    <div class="header-box header-desktop">
      <!-- <img class="" src="~assets/img" alt=""> -->
      <nuxt-link to="/">
        <img class="header-logo" src="~assets/img/logo/logo3.png" alt="">
      </nuxt-link>
      <div class="header-group">
        <div class="header-row">
          <nuxt-link to="/#team" class="header-item">
            <div class="header-text">醫療團隊</div>
            <div class="header-en">TEAM</div>
          </nuxt-link>
          <nuxt-link to="/#case" class="header-item">
            <div class="header-text">成功個案</div>
            <div class="header-en">EXAMPLE</div>
          </nuxt-link>
          <nuxt-link to="/#service" class="header-item">
            <div class="header-text">減重服務</div>
            <div class="header-en">SERVICE</div>
          </nuxt-link>
          <nuxt-link to="/#contact" class="header-item">
            <div class="header-text">聯繫我們</div>
            <div class="header-en">CONTACT</div>
          </nuxt-link>
          <nuxt-link to="/#location" class="header-item">
            <div class="header-text">診所位置</div>
            <div class="header-en">LOCATION</div>
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- 手機版 -->
    <div class="header-box header-rwd">
      <!-- <img class="" src="~assets/img" alt=""> -->
      <nuxt-link to="/">
        <img class="header-logo" src="~assets/img/logo/logo3.png" alt="">
      </nuxt-link>
      <img @click="isPopup = true" class="header-menu" src="~assets/img/ui/menu.png" alt="">
    </div>

    <div v-if="isPopup" class="header-outer">
      <div class="header-inner">
        <div class="header-box2">
          <nuxt-link @click="isPopup = false" to="/">
            <img class="header-logo" src="~assets/img/logo/logo3.png" alt="">
          </nuxt-link>
          <img @click="isPopup = false" class="header-menu" src="~assets/img/ui/close.png" alt="">
        </div>

        <div class="header-row">
          <nuxt-link @click="isPopup = false" to="/#team" class="header-item">
            <div class="header-text">醫療團隊</div>
            <div class="header-en">TEAM</div>
          </nuxt-link>
          <nuxt-link @click="isPopup = false" to="/#case" class="header-item">
            <div class="header-text">成功個案</div>
            <div class="header-en">EXAMPLE</div>
          </nuxt-link>
          <nuxt-link @click="isPopup = false" to="/#service" class="header-item">
            <div class="header-text">減重服務</div>
            <div class="header-en">SERVICE</div>
          </nuxt-link>
          <nuxt-link @click="isPopup = false" to="/#contact" class="header-item">
            <div class="header-text">聯繫我們</div>
            <div class="header-en">CONTACT</div>
          </nuxt-link>
          <nuxt-link @click="isPopup = false" to="/#location" class="header-item">
            <div class="header-text">診所位置</div>
            <div class="header-en">LOCATION</div>
          </nuxt-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isPopup: false,
    };
  },
  methods: {
  },
  watch: {
   
  }
};
</script>
<style lang="scss" scoped>

.header {
  position: fixed;
  left: 0px;
  top: 0px;
  height: 103px;
  width: 100vw;
  padding: 6px 74px;
  border-bottom: 1px solid #EFEFEF;
  background-color: white;
  z-index: 2;

  &-desktop {
    display: block;
  }

  &-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-rwd {
    display: none;
  }

  &-logo {
    height: 90px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  &-group {
    display: flex;
    align-items: center;

  }

  &-row {
    display: flex;
    margin-top: 10px;
  }

  &-item {
    margin-left: 40px;
    text-align: center;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  &-text {
    color: black;
  }

  &-en {
    margin-top: 2px;
    color: #CACACA;
    font-size: 10px;
  }

}

@media screen and (max-width: 1023px) {

.header {
  height: 80px;
  padding: 10px 28px;
  z-index: 2;

  &-desktop {
    display: none;
  }

  &-rwd {
    display: flex;
  }

  &-box {
    
  }

  &-logo {
    height: 60px;
  }

  &-menu {
    height: 25px;
  }

  &-outer {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    background: rgba(black, 0.7);
  }

  &-inner {
    background-color: white;
  }

  &-box2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 9px 28px;
    z-index: 2;
  }

  &-group {
    

  }

  &-row {
    flex-direction: column;
  }

  &-item {
    margin-left: 0px;
    padding: 24px;
    border-top: 1px solid #EFEFEF;
    text-align: left;
  }

  &-text {
    
  }

  &-en {

  }

}

}
</style>
