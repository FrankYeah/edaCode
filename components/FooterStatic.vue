<template>
  <div class="footer">
    <div class="footer-row">
      <a href="https://www.facebook.com/EDABMICenter" target="_blank" class="footer-outer">
        <img class="footer-icon" src="~assets/img/footer/fb.png" alt="">
      </a>
      <a href="https://lin.ee/vRXCyNF" target="_blank" class="footer-outer">
        <img class="footer-icon" src="~assets/img/footer/line.png" alt="">
      </a>
      <!-- <a href="" target="_blank" class="footer-outer">
        <img class="footer-icon" src="~assets/img/footer/yt.png" alt="">
      </a> -->
      <a href="https://www.instagram.com/fitness.ours/" target="_blank" class="footer-outer">
        <img class="footer-icon" src="~assets/img/footer/ig.png" alt="">
      </a>
    </div>
    <div class="footer-copyright">Copyright © 2020 Adobe. All rights reserved.</div>
  </div>
</template>

<script setup>



</script>

<style lang="scss" scoped>

.footer {
  padding: 24px 0px;
  background-color: #772685;

  &-row {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-outer {
    width: 40px;
    margin: 0px 12px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  &-icon {
    
  }

  &-copyright {
    margin-top: 12px;
    color: white;
    text-align: center;
  }  
}

@media screen and (max-width: 1023px){

.footer {

  &-row {
    
  }

  &-outer {
  }

  &-icon {
    
  }

  &-copyright {
    line-height: 1.5;
  }  
}

}

</style>
