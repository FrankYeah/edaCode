<template>
  <div class="header">
    <!-- 桌面版 -->
    <div class="header-box header-desktop">
      <!-- <img class="" src="~assets/img" alt=""> -->
      <nuxt-link to="/">
        <img class="header-logo" src="~assets/img/logo/logo.png" alt="">
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
    <div class="header-box header-desktop">
      <!-- <img class="" src="~assets/img" alt=""> -->
      <nuxt-link to="/">
        <img class="header-logo" src="~assets/img/logo/logo.png" alt="">
      </nuxt-link>
      <img class="header-logo" src="~assets/img/logo/logo.png" alt="">
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
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
  padding: 32px 74px;
  border-bottom: 1px solid #EFEFEF;
  background-color: white;

  &-desktop {
    display: block;
  }

  &-rwd {
    display: none;
  }

  &-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-logo {
    height: 40px;
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
  height: 103px;
  padding: 32px 74px;

  &-desktop {
    display: none;
  }

  &-rwd {
    display: block;
  }

  &-box {
    
  }

  &-logo {
    height: 40px;
  }

  &-group {
    

  }

  &-row {
    
  }

  &-item {
    margin-left: 40px;
  }

  &-text {
    
  }

  &-en {
    margin-top: 2px;
    font-size: 10px;
  }

}

}
</style>
