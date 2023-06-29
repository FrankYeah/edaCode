<template>
  <div >
    <HeaderStatic />
    <NuxtPage />
    <FooterStatic />
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">


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
  line-height: 1.7;
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

.default-image {

}

.hover-image {
  display: none;
}

@media( max-width: 1023px ){

  body {
    
  }

}

</style>
