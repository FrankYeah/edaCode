<template>
  <div >
    <HeaderStatic />
    <NuxtPage class="default-main" />
    <FooterStatic />
    <a class="default-line-box" href="http://line.me/ti/p/~frank810729" target="_blank">
      <img class="default-line" src="~assets/img/ui/line.png" alt="">
    </a>
    <slot />
  </div>
</template>

<script setup>

const title = ref('義大專業醫療團隊')
const description = ref('2023年本中心獲頒「國家生技醫療品質獎」殊榮，您有任何問題，親切的醫師都在診所為您服務，四位醫師＋個管師＋營養師的全方位照護，全心投入於外科手術減重，帶來更好的效果、降低風險與副作用，我們給您最舒適的住房體驗')

// This will be reactive even you change title/description above
useHead({
  title,
  meta: [
    { name: 'description', content: description},
    { name: 'og:description', content: description},
    { name: 'og:title', content: title},
    { name: 'og:img', content: useAsset('img/doctor/01.png')},
  ]
})

</script>

<style lang="scss">

.default {

  &-main {
    margin-top: 103px;
  }

  &-line-box {
    position: fixed;
    bottom: 20%;
    right: 50px;
    z-index: 1;
  }

  &-line {
    width: 45px;
    cursor: pointer;
  }

}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  letter-spacing: 1px;
	vertical-align: baseline;
  letter-spacing: 1.7px;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
  line-height: 1;
  margin: 0px;
  padding: 0px;
  font-family: 'Noto Sans TC', 'Noto Sans SC', 'Lato' ,sans-serif;
  background-color: white;
  font-size: 14px;
  // font-family: 'GoudyOldStyle,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,PingFang TC,Hiragino Sans GB,Microsoft JhengHei,sans-serif!important';
}

a {
  // color: #fff;
  text-decoration: none;
}

input {
  padding: 0px;
  margin: 0px;
  outline: none;
 -webkit-appearance: none;
 -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
}

textarea {

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }
}



@media( max-width: 1023px ){

.default {

  &-main {
    margin-top: 80px;
  }

  &-line-box {
    right: 36px;
  }

  &-line {
    width: 36px;
  }

}

}

</style>
