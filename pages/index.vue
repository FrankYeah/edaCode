<template>
  <div class="index">
    <div class="index-main">
      <div class="index-main-row">
        <div class="index-main-left">
          <div class="index-main-box">
            <!-- vif -->
            <img v-if="currentRotate == 1" class="index-main-img" src="~assets/img/banner/b01.png" alt="">
            <img v-if="currentRotate == 2" class="index-main-img" src="~assets/img/banner/b02.png" alt="">
            <img v-if="currentRotate == 3" class="index-main-img" src="~assets/img/banner/b03.png" alt="">
            <img v-if="currentRotate == 4" class="index-main-img" src="~assets/img/banner/b04.png" alt="">
            <img v-if="currentRotate == 5" class="index-main-img" src="~assets/img/banner/b05.png" alt="">
          </div>
        </div>
        <div class="index-main-right">
          <div v-if="currentRotate == 1" class="index-main-text">2023年本中心獲頒「國家生技醫療品質獎」殊榮1</div>
          <div v-if="currentRotate == 2" class="index-main-text">2023年本中心獲頒「國家生技醫療品質獎」殊榮2</div>
          <div v-if="currentRotate == 3" class="index-main-text">2023年本中心獲頒「國家生技醫療品質獎」殊榮3</div>
          <div v-if="currentRotate == 4" class="index-main-text">2023年本中心獲頒「國家生技醫療品質獎」殊榮4</div>
          <div v-if="currentRotate == 5" class="index-main-text">2023年本中心獲頒「國家生技醫療品質獎」殊榮5</div>
          <div class="index-main-dot-row">
            <!-- class if -->
            <div :class="['index-main-dot',
              {'index-main-dot-dark': currentRotate == 1}]"
            ></div>
            <div :class="['index-main-dot',
              {'index-main-dot-dark': currentRotate == 2}]"
            ></div>
            <div :class="['index-main-dot',
              {'index-main-dot-dark': currentRotate == 3}]"
            ></div>
            <div :class="['index-main-dot',
              {'index-main-dot-dark': currentRotate == 4}]"
            ></div>
            <div :class="['index-main-dot',
              {'index-main-dot-dark': currentRotate == 5}]"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div id="team" class="index-team">
      <div class="index-team-head">專業醫療團隊</div>
      <div class="index-team-sub">最專業的醫療團隊</div>
      <div class="index-team-row index-team-desktop">
        <!-- 1 -->
        <div class="index-team-box">
          <div class="index-team-row2">
            <div class="index-team-name">建翰 醫師</div>
            <div class="index-team-word">「你若有決心，我就有方法」</div>
            <div @click="popup1('建翰')" class="index-team-more">瞭解更多</div>
          </div>
          <img class="index-team-photo" src="~assets/img/doctor/01.png" alt="">
        </div>
        <!-- 2 -->
        <div class="index-team-box">
          <div class="index-team-row2">
            <div class="index-team-name">忠延 醫師</div>
            <div class="index-team-word">「給自己一次機會改變！」</div>
            <div @click="popup1('忠延')" class="index-team-more">瞭解更多</div>
          </div>
          <img class="index-team-photo" src="~assets/img/doctor/02.png" alt="">
        </div>
      </div>
      <div class="index-team-row index-team-desktop">
        <!-- 3 -->
        <div class="index-team-box">
          <div class="index-team-row2">
            <div class="index-team-name">昱彰 醫師</div>
            <div class="index-team-word">「選擇不一樣的人生與人『身』」</div>
            <div @click="popup1('昱彰')" class="index-team-more">瞭解更多</div>
          </div>
          <img class="index-team-photo" src="~assets/img/doctor/03.png" alt="">
        </div>
        <!-- 4 -->
        <div class="index-team-box">
          <div class="index-team-row2">
            <div class="index-team-name">暐霖 醫師</div>
            <div class="index-team-word">「真心想，就會事成」</div>
            <div @click="popup1('暐霖')" class="index-team-more">瞭解更多</div>
          </div>
          <img class="index-team-photo" src="~assets/img/doctor/04.png" alt="">
        </div>
      </div>

      <div class="index-team-row index-team-rwd">
        <!-- 1 -->
        <div class="index-team-box">
          <div class="index-team-row2">
            <img class="index-team-photo" src="~assets/img/doctor/001.png" alt="">
            <div>
              <div class="index-team-name">建翰 醫師</div>
              <div class="index-team-word">「你若有決心，我就有方法」</div>
            </div>
          </div>
          <div @click="popup1('建翰')" class="index-team-more">瞭解更多</div>
        </div>
        <!-- 2 -->
        <div class="index-team-box">
          <div class="index-team-row2">
            <img class="index-team-photo" src="~assets/img/doctor/002.png" alt="">
            <div>
              <div class="index-team-name">忠延 醫師</div>
              <div class="index-team-word">「你若有決心，我就有方法」</div>
            </div>
          </div>
          <div @click="popup1('忠延')" class="index-team-more">瞭解更多</div>
        </div>
      </div>
      <div class="index-team-row index-team-rwd">
        <!-- 3 -->
        <div class="index-team-box">
          <div class="index-team-row2">
            <img class="index-team-photo" src="~assets/img/doctor/003.png" alt="">
            <div>
              <div class="index-team-name">昱彰 醫師</div>
              <div class="index-team-word">「你若有決心，我就有方法」</div>
            </div>
          </div>
          <div @click="popup1('昱彰')" class="index-team-more">瞭解更多</div>
        </div>
        <!-- 4 -->
        <div class="index-team-box">
          <div class="index-team-row2">
            <img class="index-team-photo" src="~assets/img/doctor/004.png" alt="">
            <div>
              <div class="index-team-name">暐霖 醫師</div>
              <div class="index-team-word">「你若有決心，我就有方法」</div>
            </div>
          </div>
          <div @click="popup1('暐霖')" class="index-team-more">瞭解更多</div>
        </div>
      </div>

    </div>

    <div id="case" class="index-case">
      <div class="index-case-outer">
        <div class="index-case-row">
          <div class="index-case-head">成功個案</div>
          <div class="index-case-sub">瘦下來還能改善這些</div>
        </div>
        <div class="index-case-row2">
          <div @click="ill('三高')" :class="['index-case-btn',
            {'index-case-btn-select': currentCase.name == '三高'}]"
          >三高</div>
          <div @click="ill('不孕症')" :class="['index-case-btn',
            {'index-case-btn-select': currentCase.name == '不孕症'}]">不孕症</div>
          <div @click="ill('心肌梗塞')" :class="['index-case-btn',
            {'index-case-btn-select': currentCase.name == '心肌梗塞'}]">心肌梗塞</div>
          <div @click="ill('衣服選擇障礙')" :class="['index-case-btn',
            {'index-case-btn-select': currentCase.name == '衣服選擇障礙'}]">衣服選擇障礙</div>
          <div @click="ill('改變身形')" :class="['index-case-btn',
            {'index-case-btn-select': currentCase.name == '改變身形'}]">改變身形</div>

          <div @click="ill('肝指數異常')" :class="['index-case-btn index-case-rwd',
            {'index-case-btn-select': currentCase.name == '肝指數異常'}]">肝指數異常</div>
          <div @click="ill('容貌焦慮')" :class="['index-case-btn index-case-rwd',
            {'index-case-btn-select': currentCase.name == '容貌焦慮'}]">容貌焦慮</div>
          <div @click="ill('缺乏自信')" :class="['index-case-btn index-case-rwd',
            {'index-case-btn-select': currentCase.name == '缺乏自信'}]">缺乏自信</div>
          <div @click="ill('高血壓＆呼吸中止')" :class="['index-case-btn index-case-rwd',
            {'index-case-btn-select': currentCase.name == '高血壓＆呼吸中止'}]">高血壓＆呼吸中止</div>
          <div @click="ill('高血壓、自體免疫系統疾病、睡覺打鼾')"
           :class="['index-case-btn index-case-btn3 index-case-rwd',
            {'index-case-btn-select': currentCase.name == '高血壓、自體免疫系統疾病、睡覺打鼾'}]"
           >高血壓、自體免疫系統疾病、睡覺打鼾</div>
          <div @click="ill('關節疼痛與壓迫')" :class="['index-case-btn index-case-rwd',
            {'index-case-btn-select': currentCase.name == '關節疼痛與壓迫'}]">關節疼痛與壓迫</div>
          <div @click="popup2('close')" class="index-case-btn2">更多</div>
        </div>
        <div class="index-case-row3">
          <div>
            <div class="index-case-title">{{ currentCase.title }}</div>
            <div class="index-case-text" v-html="currentCase.text"></div>
          </div>
          <img v-if="currentCase.name == '三高'" class="index-case-photo" src="~assets/img/doctor/01.png" alt="">
          <img v-else class="index-case-photo" src="~assets/img/doctor/02.png" alt="">
        </div>
      </div>
    </div>

    <div id="service" class="index-service">
      <div class="index-service-row">
        <div class="index-service-left">
          <div class="index-service-head">減種服務</div>
          <div class="index-service-sub">根據需求提供各式減重服務</div>
        </div>
        <div class="index-service-right">
          <div class="index-service-box">
            <img class="index-service-img" src="~assets/img/ui/knife.png" alt="">
            <div class="index-service-title">減重手術</div>
            <div class="index-service-text">減重手術介紹</div>
            <div @click="popup3('減重手術')" class="index-service-more">瞭解更多</div>
          </div>
          <div class="index-service-box">
            <img class="index-service-img" src="~assets/img/ui/heart.png" alt="">
            <div class="index-service-title">不開刀</div>
            <div class="index-service-text">不開刀的瘦身選擇</div>
            <div @click="popup3('不開刀')" class="index-service-more">瞭解更多</div>
          </div>
          <div class="index-service-box index-service-box-last">
            <img class="index-service-img" src="~assets/img/ui/pin.png" alt="">
            <div class="index-service-title">內科治療</div>
            <div class="index-service-text">營養與藥物</div>
            <div @click="popup3('內科治療')" class="index-service-more">瞭解更多</div>
          </div>
        </div>
      </div>
    </div>

    <div id="contact" class="index-contact">
      <div class="index-contact-head">聯繫我們</div>
      <div class="index-contact-sub">請透過一下聯繫方式聯繫我們</div>
      <a href="tel:+886-75596126" target="_blank" class="index-contact-box">
        <div class="index-contact-inner">
          <img class="index-contact-img" src="~assets/img/ui/phone2.png" alt="">
          <div class="index-contact-num">07-559-6126</div>
        </div>
        <img class="index-contact-img2" src="~assets/img/ui/copy.png" alt="">
      </a>
      <a href="http://line.me/ti/p/~frank810729" target="_blank" class="index-contact-box">
        <div class="index-contact-inner">
          <img class="index-contact-img" src="~assets/img/ui/line.png" alt="">
          <div class="index-contact-num">LineID</div>
        </div>
        <img class="index-contact-img2" src="~assets/img/ui/leave.png" alt="">
      </a>
    </div>

    <div id="location" class="index-location">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6196.054121725691!2d121.73334682234385!3d25.129367810177587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d4e14d8d05e2b%3A0x3eaa4af0aa5e0850!2z5Z-66ZqG6LuK56uZ5Y2X56uZ!5e0!3m2!1szh-TW!2stw!4v1688563634912!5m2!1szh-TW!2stw" width="100%" height="692" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <!-- <div class="index-location-"></div> -->
    </div>

    <!-- popup -->
    <div v-if="isPopup1" class="index-popup">
      <div class="index-popup-outer">
        <img @click="isPopup1 = false" class="index-popup-close" src="~assets/img/ui/close2.png" alt="">
        <div class="index-popup-row">
          <img class="index-popup-img" src="~assets/img/des/D01.png" alt="">
          <div class="index-popup-right">
            <div class="index-popup-head">你有決心，我們有方法，賀我們一起，迎向健康自信的未來！</div>
            <div class="index-popup-title">學經歷</div>
            <div class="index-popup-text">
              大林慈濟醫院減重暨代謝手術中心主治醫師<br>
              大林慈濟醫院一般外科主治醫師<br>
              消化外科專科醫師<br>
              日本京都大學附設醫院肝膽胰移植外科短期受訓醫師<br>
              慈濟大學醫學系畢業
            </div>
            <div class="index-popup-title">醫療專長</div>
            <div class="index-popup-text">
              腹腔鏡代謝及減重手術<br>
              如袖狀胃切除<br>
              胃繞道手術<br>
              營養及飲食控制減重<br>
              藥物減重<br>
              腹腔鏡疝氣修補術<br>
              腹腔鏡胃癌手術及肝膽胰手術
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isPopup2" class="index-popup2">
      <div class="index-popup2-outer">
        <img @click="isPopup2 = false" class="index-popup2-close" src="~assets/img/ui/close2.png" alt="">
        <div class="index-popup2-row">
          <div class="index-popup2-left">
            <div @click="ill2('三高')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '三高'}]"
            >三高</div>
            <div @click="ill2('不孕症')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '不孕症'}]"
            >不孕症</div>
            <div @click="ill2('心肌梗塞')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '心肌梗塞'}]"
            >心肌梗塞</div>
            <div @click="ill2('衣服選擇障礙')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '衣服選擇障礙'}]"
            >衣服選擇障礙</div>
            <div @click="ill2('改變身形')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '改變身形'}]"
            >改變身形</div>
            <div @click="ill2('肝指數異常')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '肝指數異常'}]"
            >肝指數異常</div>
            <div @click="ill2('容貌焦慮')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '容貌焦慮'}]"
            >容貌焦慮</div>
            <div @click="ill2('缺乏自信')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '缺乏自信'}]"
            >缺乏自信</div>
            <div @click="ill2('高血壓＆呼吸中止')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '高血壓＆呼吸中止'}]"
            >高血壓＆呼吸中止</div>
            <div @click="ill2('高血壓、自體免疫系統疾病、睡覺打鼾')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '高血壓、自體免疫系統疾病、睡覺打鼾'}]"
            >高血壓、自體免疫系統疾病、睡覺打鼾</div>
            <div @click="ill2('關節疼痛與壓迫')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '關節疼痛與壓迫'}]"
            >關節疼痛與壓迫</div>
          </div>
          <div class="index-popup2-center">
            <div class="index-popup2-head">{{ currentCase2.title }}</div>
            <div class="index-popup2-text" v-html="currentCase2.text"></div>
          </div>
          <img class="index-popup2-photo" src="~assets/img/doctor/01.png" alt="">
        </div>
      </div>
    </div>

    <div v-if="isPopup3" class="index-popup3">
      <div class="index-popup3-outer">
        <img @click="isPopup3 = false" class="index-popup3-close" src="~assets/img/ui/close2.png" alt="">
        <div class="index-popup3-row">
          <img class="index-popup3-icon" src="~assets/img/ui/knife.png" alt="">
          <div>
            <div class="index-popup3-head">減重手術</div>
            <div class="index-popup3-sub">減重手術介紹</div>
          </div>
        </div>

        <!-- 桌面版 -->
        <div class="index-popup3-row2 index-popup3-desktop">
          <div class="index-popup3-left">
            <div class="index-popup3-title">袖狀胃切除手術</div>
            <div class="index-popup3-hint">術後第一年，病人將可以減去他們多餘體重的40-70%。</div>
            <div class="index-popup3-text1">效果</div>
            <div class="index-popup3-text2">移除約75%-80%的胃，留下一個窄胃〝管〞(袖狀胃)。 利用減少胃容積及減少促食慾賀爾蒙(Ghrelin)的原理限制食量，達到減重效果。 袖狀胃切除術也是利用腹腔鏡進行，透過腹部五個或六個小的切口， 本中心的醫師將會使用高階攝像機（腹腔鏡）和多種專門的手術器械，來進行手術，一般術後約2-3天即可出院回家。</div>
            <div class="index-popup3-text1">效果</div>
            <div class="index-popup3-text2">移除約75%-80%的胃，留下一個窄胃〝管〞(袖狀胃)。</div>
            <div class="index-popup3-text1">效果</div>
            <div class="index-popup3-text2">移除約75%-80%的胃，留下一個窄胃〝管〞(袖狀胃)。</div>
          </div>
          <div class="index-popup3-right">
            <div class="index-popup3-title">胃繞道手術</div>
            <div class="index-popup3-hint">一年手術後，平均減去多餘體重的77％。 50％到60％的病人仍可以維持良好的減重效果。</div>
            <div class="index-popup3-text1">效果</div>
            <div class="index-popup3-text2">移除約75%-80%的胃，留下一個窄胃〝管〞(袖狀胃)。 利用減少胃容積及減少促食慾賀爾蒙(Ghrelin)的原理限制食量，達到減重效果。 袖狀胃切除術也是利用腹腔鏡進行，透過腹部五個或六個小的切口， 本中心的醫師將會使用高階攝像機（腹腔鏡）和多種專門的手術器械，來進行手術，一般術後約2-3天即可出院回家。</div>
            <div class="index-popup3-text1">效果</div>
            <div class="index-popup3-text2">移除約75%-80%的胃，留下一個窄胃〝管〞(袖狀胃)。</div>
            <div class="index-popup3-text1">效果</div>
            <div class="index-popup3-text2">移除約75%-80%的胃，留下一個窄胃〝管〞(袖狀胃)。</div>
          </div>
        </div>

        <!-- 手機版 -->
        <div class="index-popup3-left index-popup3-rwd">
          <div class="index-popup3-box">
            <div @click="surgery(surgery1)" 
              :class="['index-popup3-box-text',
              {'index-popup3-box-select': currentSurgery != surgery1}]"
            >{{ surgery1 }}</div>
            <div @click="surgery(surgery2)" 
              :class="['index-popup3-box-text',
              {'index-popup3-box-select': currentSurgery != surgery2}]"
            >{{ surgery2 }}</div>
          </div>
          <div class="index-popup3-title">胃繞道手術</div>
            <div class="index-popup3-hint">一年手術後，平均減去多餘體重的77％。 50％到60％的病人仍可以維持良好的減重效果。</div>
            <div class="index-popup3-text1">效果</div>
            <div class="index-popup3-text2">移除約75%-80%的胃，留下一個窄胃〝管〞(袖狀胃)。 利用減少胃容積及減少促食慾賀爾蒙(Ghrelin)的原理限制食量，達到減重效果。 袖狀胃切除術也是利用腹腔鏡進行，透過腹部五個或六個小的切口， 本中心的醫師將會使用高階攝像機（腹腔鏡）和多種專門的手術器械，來進行手術，一般術後約2-3天即可出院回家。</div>
            <div class="index-popup3-text1">效果</div>
            <div class="index-popup3-text2">移除約75%-80%的胃，留下一個窄胃〝管〞(袖狀胃)。</div>
            <div class="index-popup3-text1">效果</div>
            <div class="index-popup3-text2">移除約75%-80%的胃，留下一個窄胃〝管〞(袖狀胃)。</div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>

// 定時三秒，切換 current 數字換圖換字

setInterval(()=> {

  if(currentRotate.value == 5) {
  currentRotate.value = 1
  } else {
    currentRotate.value = currentRotate.value + 1
  }

}, 4000)

const currentRotate = ref(1)


const isPopup1 = ref(false)
const isPopup2 = ref(false)
const isPopup3 = ref(false)

function popup1(item) {
  isPopup1.value = true
}

const currentCase = ref({ name: '', title: '', text: '' })

const caseAll = ref([
  { name: '三高', title: '手術一年，從127到84公斤', text: `
  我的姪女都成功減50公斤，對我產生相當大的影響也想去嘗試<br>
  腰圍從46變36（瘦了一大圈）<br>
  走路輕盈地像要飛起來一樣<br><br>

  很慶幸自己做了這個決定，是我人生重大的一個轉捩點：這個決定我思考了三年。我本身有著三高問題加上年紀50，因為疫情的關係讓我更感覺健康的重要，也告訴自己：「啥美食我都吃過了，是時候為自己身體控制嘴、控制食慾了。」<br><br>

  手術後三個月內是身體的#恢復期有身體和胃都不太舒服的時候，不過義大的主治醫師團隊從生理、心理、營養各方面的細心指導，讓整個過程很舒坦，體重也如預期的漸漸降下來，很感謝自己當初最的決定！<br><br>

  重獲自信心，但別再問我這些問題「我是怎麼瘦下來的，」每每解釋又是好長的故事，現在我會說「管住嘴，邁開腿，找個好團隊」，就這麼簡單！我有個員工43公斤也說要減肥，可見每個人都想瘦，我知道，所以很感謝義大的醫療團隊，就像是給我一個新的人生，有你們真好，超愛你們
  ` },
  { name: '不孕症', title: '不孕症不孕症', text: `
  不孕症不孕症<br>
  不孕症不孕症<br><br>
  ` },
  { name: '心肌梗塞', title: '心肌梗塞心肌梗塞', text: `
  心肌梗塞心肌梗塞<br>
  心肌梗塞心肌梗塞<br><br>
  ` },
  { name: '衣服選擇障礙', title: '衣服選擇障礙衣服選擇障礙', text: `
  衣服選擇障礙衣服選擇障礙<br>
  衣服選擇障礙衣服選擇障礙<br><br>
  ` },
  { name: '改變身形', title: '改變身形改變身形', text: `
  改變身形改變身形<br>
  改變身形改變身形<br><br>
  ` },
  { name: '肝指數異常', title: '肝指數異常肝指數異常', text: `
  肝指數異常<br>
  肝指數異常肝指數異常<br><br>
  ` },
  { name: '容貌焦慮', title: '容貌焦慮', text: `
  容貌焦慮<br>
  容貌焦慮容貌焦慮<br><br>
  ` },
  { name: '缺乏自信', title: '缺乏自信', text: `
  缺乏自信缺乏自信<br>
  缺乏自信<br><br>
  ` },
  { name: '高血壓＆呼吸中止', title: '高血壓＆呼吸中止', text: `
  高血壓＆呼吸中止<br>
  高血壓＆呼吸中止高血壓＆呼吸中止<br><br>
  ` },
  { name: '高血壓、自體免疫系統疾病、睡覺打鼾', title: '高血壓、自體免疫系統疾病、睡覺打鼾', text: `
  高血壓、自體免疫系統疾病、睡覺打鼾<br>
  高血壓、自體免疫系統疾病、睡覺打鼾高血壓、自體免疫系統疾病、睡覺打鼾<br><br>
  ` },
  { name: '關節疼痛與壓迫', title: '關節疼痛與壓迫', text: `
  關節疼痛與壓迫<br>
  關節疼痛與壓迫關節疼痛與壓迫<br><br>
  ` },
]) 

currentCase.value = caseAll.value[0]

function ill(myName) {
  const index = caseAll.value.findIndex(item => item.name == myName)
  currentCase.value = caseAll.value[index]
}

// popup2

function popup2(item) {
  isPopup2.value = true
}

const currentCase2 = ref({ name: '', title: '', text: '' })

currentCase2.value = caseAll.value[0]

function ill2(myName) {
  const index2 = caseAll.value.findIndex(item => item.name == myName)
  currentCase2.value = caseAll.value[index2]
}

// popup3

function popup3(item) {
  isPopup3.value = true  
}

const surgery1 = ref('三高袖狀胃切除手術')
const surgery2 = ref('胃繞道手術')
const currentSurgery = ref('三高袖狀胃切除手術')

function surgery(item) {
  currentSurgery.value = item
}


</script>

<style lang="scss" scoped>

.index {

  &-main {
    padding: 30px 50px 0px;

    &-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-left {

    }

    &-box {

    }

    &-img {

    }

    &-right {
      margin-left: 54px;
    }

    &-text {
      position: relative;
      width: 363px;
      font-size: 32px;
      line-height: 1.6;

      &::before {
        content: '';
        position: absolute;
        left: -10px;
        top: -10px;
        width: 228px;
        height: 40px;
        background-color: #FFE782;
        z-index: -1;
      }
    }

    &-dot-row {
      display: flex;
      align-items: center;
      margin-top: 38px;
    }

    &-dot {
      width: 8px;
      height: 8px;
      margin-right: 6px;
      border-radius: 100%;
      background-color: rgb(220,220,220);
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    &-dot-dark {
      background-color: rgb(172,172,172);
    }

  }

  //team

  &-team {
    margin-top: 100px;

    &-desktop {
      display: flex !important;
    }

    &-rwd {
      display: none !important;
    }

    &-head {
      position: relative;
      font-size: 40px;
      text-align: center;

      &::before {
        content: '';
        position: absolute;
        left: calc(50% - 140px);
        top: -10px;
        width: 228px;
        height: 40px;
        background-color: #FFE782;
        z-index: -1;
      }

    }

    &-sub {
      margin: 10px 0px 32px;
      text-align: center;
      color: #888;
    }

    &-row {
      margin-top: 20px;
      display: flex;
      justify-content: center;
    }

    &-box {
      width: 478px;
      display: flex;
      justify-content: space-between;
      margin: 0px 10px;
      padding: 8px;
      border-radius: 8px;
      border: 1px solid #E8E8E8;
    }

    &-row2 {
      text-align: center;
      width: calc(100% - 168px);
    }

    &-name {
      margin-top: 42px;
      font-size: 24px;
    }

    &-word {
      margin-top: 14px;
      color: #888;
      font-size: 12px;
    }

    &-more {
      width: 228px;
      margin: 70px auto 0px;
      padding: 14px 0px;
      border: 1px solid #772685;
      color: #772685;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    &-photo {
      width: 168px;
    }
    
  }

  //case

  &-case {
    display: flex;
    justify-content: center;
    margin: 100px 50px 0px;
    padding: 64px 0px 107px;
    background-color: #FBF9FC;
    border-radius: 8px;

    &-outer {
      width: 80%
    }

    &-row {
      display: flex;
    }

    &-head {
      position: relative;
      font-size: 40px;
      font-weight: 700;
      line-height: 1.6;
      z-index: 1;

      &::before {
        content: '';
        position: absolute;
        left: -10px;
        top: -10px;
        width: 166px;
        height: 40px;
        background-color: #FFE782;
        z-index: -1;
      }

    }

    &-sub {
      margin: 16px 0px 0px 38px;
      color: #3F3F3F;
    }

    &-row2 {
      display: flex;
      align-items: center;
      margin-top: 24px;
    }

    &-btn {
      width: 150px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      margin-right: 27px;
      border-radius: 100px;
      border: 1px solid #772685;
      color: #772685;
      background: #FFF;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    &-btn-select {
      background-color: #772685;
      color: white;
    }

    &-btn2 {
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border: 1px solid #772685;
      border-radius: 100%;
      color: #772685;
      background: #FFF;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    &-rwd {
      display: none;
    }

    &-row3 {
      margin-top: 58px;
      display: flex;
      justify-content: space-between;
    }

    &-title {
      font-size: 18px;
    }

    &-text {
      margin-top: 24px;
      width: calc(100% - 70px);
      color: #5C5757;
      line-height: 1.4;
    }

    &-photo {
      width: 288px;
      height: 100%;
    }
    
  }

  //service

  &-service {
    margin: 128px 0px 0px;
    padding: 0px 100px;

    &-row {
      display: flex;
      justify-content: center;
    }

    &-left {
      margin: 80px 98px 0px 0px;
    }

    &-head {
      position: relative;
      font-size: 40px;
      line-height: 1.6;

      &::before {
        content: '';
        position: absolute;
        left: -10px;
        top: -10px;
        width: 166px;
        height: 40px;
        background-color: #FFE782;
        z-index: -1;
      }

    }

    &-sub {
      margin-top: 8px;
      color: #888;
    }

    &-right {
      display: flex;
      border-radius: 8px;
      border: 2px solid #E8E8E8;
    }

    &-box {
      padding: 21px 18px 27px;
      border-right: 2px solid #E8E8E8;
    }

    &-box-last {
      border-right: 0px;
    }

    &-img {
      width: 123px;
    }

    &-title {
      margin-top: 41px;
      font-weight: 700;
      font-size: 18px;
    }

    &-text {
      margin-top: 8px;
      color: #888;
      font-size: 12px;
    }

    &-more {
      margin-top: 90px;
      width: 14vw;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-radius: 8px;
      border: 1px solid #772685;
      color: #772685;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
    
  }

  //caontact

  &-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0px 0px;
    padding: 108px 0px 80px;
    background: #FBFBFB;


    &-head {
      position: relative;
      font-size: 40px;
      line-height: 1.6;
      z-index: 1;

      &::before {
        content: '';
        position: absolute;
        left: -10px;
        top: -10px;
        width: 166px;
        height: 40px;
        background-color: #FFE782;
        z-index: -1;
      }

    }

    &-sub {
      margin-top: 8px;
      color: #888;
    }

    &-box {
      display: flex;
      justify-content: space-between;
      width: 400px;
      margin-top: 18px;
      padding: 14px;
      border: 1px solid #E8E8E8;
      background: #FFF;
    }

    &-inner {
      display: flex;
      align-items: center;
    }

    &-img {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }

    &-num {

    }

    &-img2 {
      width: 24px;
      height: 24px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
    
  }

  //location

  &-location {
    width: 80%;
    margin: auto;
  }

  //popup

  &-popup {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    padding-top: 10vh;
    background-color: rgba(black, 0.5);
    z-index: 2;

    &-outer {
      position: relative;
      width: 90%;
      margin: auto;
      padding: 36px 20px 40px;
      background: white;
      border-radius: 8px;
    }

    &-close {
      position: absolute;
      right: -14px;
      top: -14px;
      width: 40px;
      height: 40px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    &-row {
      display: flex;
    }

    &-img {
      width: 50%;
      height: 100%;
      margin-right: 50px;
    }

    &-right {
      
    }

    &-head {
      line-height: 1.2;
      color: #772685;
      font-size: 24px;
      font-weight: 700;
    }

    &-title {
      margin: 24px 0px 8px;
      font-weight: 700;
    }

    &-text {
      line-height: 1.5;
      color: #5C5757;
    }
    
  }

  //popup2

  &-popup2 {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    padding-top: 10vh;
    background-color: rgba(black, 0.5);
    z-index: 2;

    &-outer {
      position: relative;
      width: 90%;
      margin: auto;
      padding: 36px 20px 40px;
      background: white;
      border-radius: 8px;
    }

    &-close {
      position: absolute;
      right: -14px;
      top: -14px;
      width: 40px;
      height: 40px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    &-row {
      display: flex;
      justify-content: space-between;
    }

    &-left {
      border: 1px solid #C8B4F1;
      border-bottom: 0px solid #C8B4F1;
    }

    &-item {
      width: 208px;
      padding: 11px 0px;
      border-bottom: 1px solid #C8B4F1;
      text-align: center;
      color: #9F7AA6;
      line-height: 1.5;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
    
    &-item-select {
      color: white;
      background-color: #772685;
    }

    &-center {
      margin: 0px 64px;
    }

    &-head {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 24px;
    }

    &-text {
      line-height: 1.5;
      color: #5C5757;
    }

    &-photo {
      width: 288px;
      height: 100%;
    }
    
  }

  //popup3

  &-popup3 {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    padding-top: 10vh;
    background-color: rgba(black, 0.5);
    z-index: 2;

    &-desktop {
      display: block;
    }

    &-rwd {
      display: none;
    }

    &-outer {
      position: relative;
      width: 90%;
      margin: auto;
      padding: 36px 80px 56px;
      background: white;
      border-radius: 8px;
    }

    &-close {
      position: absolute;
      right: -14px;
      top: -14px;
      width: 40px;
      height: 40px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    &-row {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-icon {
      width: 44px;
      margin-right: 16px;
    }

    &-head {
      font-size: 18px;
      font-weight: 700;
    }

    &-sub {
      margin-top: 4px;
      color: #888;
      font-size: 12px;
    }

    &-row2 {
      margin-top: 38px;
      display: flex;
      justify-content: space-between;
    }

    &-left {
      width: 46%;
    }

    &-title {
      font-size: 24px;
      font-weight: 700;
    }

    &-hint {
      margin-top: 8px;
      color: #772685;
    }

    &-text1 {
      margin-top: 24px;
      font-weight: 700;
    }

    &-text2 {
      margin-top: 8px;
      color: #5C5757;
      line-height: 1.5;
    }

    &-right {
      width: 46%;
      margin-top: 8px;
      color: #5C5757;
    }
    
  }

}

@media screen and (max-width: 1023px){

.index {

  &-main {
    padding: 0px 0px 0px;

    &-row {
      flex-direction: column;
    }

    &-left {

    }

    &-box {

    }

    &-img {

    }

    &-right {
      margin-left: 0px;
    }

    &-text {
      width: 258px;
      margin-top: 50px;
      font-size: 20px;
      text-align: center;

      &::before {
        left: 70px;
        top: -10px;
        width: 133px;
        height: 34px;
      }
    }

    &-dot-row {
      justify-content: center;
      margin-top: 16px;
    }

    &-dot {
      
    }

    &-dot-dark {
      
    }

  }

  //team

  &-team {
    margin-top: 110px;

    &-desktop {
      display: none !important;
    }

    &-rwd {
      display: block !important;
    }

    &-head {
      font-size: 20px;

      &::before {
        left: calc(50% - 66px);
        top: -10px;
        width: 133px;
        height: 27px;
      }

    }

    &-sub {
      margin: 8px 0px 30px;
    }

    &-row {
      flex-direction: column;
      align-items: center;
      margin-top: 0px;
    }

    &-box {
      flex-direction: column;
      width: calc(100% - 48px);
      margin: 24px 24px 0px;
      padding: 20px;
    }

    &-row2 {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-name {
      margin-top: 42px;
      font-size: 24px;
    }

    &-word {
      margin-top: 14px;
      font-size: 12px;
    }

    &-more {
      width: 100%;
      margin: 30px auto 0px;
      text-align: center;
    }

    &-photo {
      width: 80px;
    }
    
  }

  //case

  &-case {
    margin: 80px 0px 0px;
    padding: 64px 0px 88px;

    &-outer {
      width: 100%
    }

    &-row {
      flex-direction: column;
      align-items: center;
    }

    &-head {
      font-size: 20px;

      &::before {
        left: -20px;
        top: -10px;
        width: 133px;
        height: 27px;
      }

    }

    &-sub {
      margin: 8px 0px 0px 0px;
    }

    &-row2 {
      overflow-x: scroll;
      overflow-y: scroll;
      margin-top: 22px;
      scrollbar-width: thin;
      scrollbar-color: transparent transparent;

      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: transparent;
      }
    }

    &-btn {
      margin-right: 16px;
      flex: none;
    }

    &-btn-select {
      
    }

    &-btn2 {
      display: none;
      flex: none;

      &:hover {
        opacity: 0.8;
      }
    }

    &-btn3 {
      width: 300px;
      flex: none;
    }

    &-rwd {
      display: block;
    }

    &-row3 {
      flex-direction: column;
      margin: 40px 24px 0px;
    }

    &-title {
      font-size: 14px;
    }

    &-text {
      font-size: 12px;
      margin-top: 16px;
      width: calc(100%);
    }

    &-photo {
      width: 100%;
      height: auto;
      margin-top: 25px;
    }
    
  }

  //service

  &-service {
    margin: 64px 0px 0px;
    padding: 0px 24px;

    &-row {
      flex-direction: column;
      align-items: center;
    }

    &-left {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0px 0px 0px 0px;
    }

    &-head {
      font-size: 20px;

      &::before {
        left: -20px;
        top: -10px;
        width: 133px;
        height: 27px;
      }

    }

    &-sub {
      
    }

    &-right {
      flex-direction: column;
      align-items: center;
      margin-top: 16px;
      border: 0px;
    }

    &-box {
      width: 340px;
      margin-top: 24px;
      padding: 27px 21px;
      border: 2px solid #E8E8E8;
      text-align: center;
    }

    &-box-last {
      
    }

    &-img {
      margin: auto;
    }

    &-title {
      
    }

    &-text {
      
    }

    &-more {
      margin-top: 35px;
      width: 100%;
      border-radius: 0px;
    }
    
  }

  //caontact

  &-contact {
    margin: 64px 0px 0px;
    padding: 76px 0px 80px;


    &-head {
      font-size: 20px;

      &::before {
        left: -20px;
        top: -10px;
        width: 133px;
        height: 27px;
      }

    }

    &-sub {
      margin-top: 8px;
    }

    &-box {
      max-width: 400px;
      width: calc(100% - 36px);
    }

    &-inner {
      
    }

    &-img {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }

    &-num {

    }

    &-img2 {
      
    }
    
  }

  //location

  &-location {
    width: 100%;
    padding-bottom: 90px;
  }

  //popup

  &-popup {
    padding-top: 25px;

    &-outer {
      width: calc(100vw - 50px);
      padding: 40px 24px 33px;
    }

    &-close {
      
    }

    &-row {
      flex-direction: column;
    }

    &-img {
      width: 100%;
      margin-right: 0px;
    }

    &-right {
      margin-top: 20px;
    }

    &-head {
      font-size: 16px;
    }

    &-title {
      
    }

    &-text {
      
    }
    
  }

  //popup2 暫無需畫面

  &-popup2 {
    width: 100vw;
    height: 100vh;
    padding-top: 10vh;

    &-outer {
      width: 90%;
      padding: 36px 20px 40px;
      border-radius: 8px;
    }

    &-close {
      right: -14px;
      top: -14px;
      width: 40px;
      height: 40px;
    }

    &-row {
      
    }

    &-left {
      
    }

    &-item {
      width: 208px;
      padding: 11px 0px;
    }
    
    &-item-select {
      
    }

    &-center {
      margin: 0px 64px;
    }

    &-head {
      font-size: 18px;
      margin-bottom: 24px;
    }

    &-text {
      line-height: 1.5;
    }

    &-photo {
      width: 288px;
      height: 100%;
    }
    
  }

  //popup3

  &-popup3 {
    padding-top: 30px;

    &-desktop {
      display: none;
    }

    &-rwd {
      display: block;
    }

    &-outer {
      width: calc(100vw - 50px);
      padding: 32px 24px 64px;
    }

    &-close {
      
    }

    &-row {
      
    }

    &-icon {
      
    }

    &-head {
      
    }

    &-sub {
      margin-top: 8px;
    }

    &-row2 {
      
    }

    &-left {
      width: 100%;
    }

    &-box {
      display: flex;
      margin-top: 24px;
      border: 1px solid #C8B4F1;
      border-radius: 4px;
    }

    &-box-text {
      width: 50%;
      height: 67px;
      line-height: 67px;
      text-align: center;
      background-color: #772685;
      color: white;
    }

    &-box-select {
      color: #C8B4F1;
      background-color: white;
    }

    &-title {
      margin-top: 20px;
      font-size: 16px;
    }

    &-hint {
      margin-top: 8px;
    }

    &-text1 {
      margin-top: 29px;
    }

    &-text2 {
      
    }

    &-right {
      
      
    }
    
  }

}


}

</style>
