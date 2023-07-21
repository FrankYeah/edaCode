<template>
  <div class="index">
    <div class="index-main">
      <div class="index-main-row">
        <div class="index-main-left">
          <div class="index-main-box">
            <!-- vif -->
            <img v-show="currentRotate == 1" class="index-main-img" src="~assets/img/banner/b01.png" alt="">
            <img v-show="currentRotate == 2" class="index-main-img" src="~assets/img/banner/b02.png" alt="">
            <img v-show="currentRotate == 3" class="index-main-img" src="~assets/img/banner/b03.png" alt="">
            <img v-show="currentRotate == 4" class="index-main-img" src="~assets/img/banner/b04.png" alt="">
            <img v-show="currentRotate == 5" class="index-main-img" src="~assets/img/banner/b05.png" alt="">
            <img v-if="currentRotate != 1" @click="leftGo()" class="index-main-btn-left" src="~assets/img/ui/left.png" alt="">
            <img v-if="currentRotate != 5" @click="rightGo()"  class="index-main-btn-right" src="~assets/img/ui/right.png" alt="">
          </div>
        </div>
        <div class="index-main-right">
          <div v-show="currentRotate == 1" class="index-main-text">2023年本中心獲頒「國家生技醫療品質獎」殊榮</div>
          <div v-show="currentRotate == 2" class="index-main-text">您有任何問題，親切的醫師都在診所為您服務</div>
          <div v-show="currentRotate == 3" class="index-main-text">四位醫師＋個管師＋營養師的全方位照護</div>
          <div v-show="currentRotate == 4" class="index-main-text">全心投入於外科手術減重，帶來更好的效果、降低風險與副作用</div>
          <div v-show="currentRotate == 5" class="index-main-text">我們給您最舒適的住房體驗</div>
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
            <div class="index-team-surgery">
              <div>腹腔鏡減重手術</div>
              <img class="index-team-surgery-photo" src="~assets/img/ui/surgery1.png" alt="">
            </div>
            <div class="index-team-surgery">
              <div>內視鏡胃袖狀縫合術</div>
              <img class="index-team-surgery-photo" src="~assets/img/ui/surgery1.png" alt="">
            </div>
            <div @click="popup1('建翰')" class="index-team-more">瞭解更多</div>
          </div>
          <img class="index-team-photo" src="~assets/img/doctor/01.png" alt="">
        </div>
        <!-- 2 -->
        <div class="index-team-box">
          <div class="index-team-row2">
            <div class="index-team-name">忠延 醫師</div>
            <div class="index-team-word">「給自己一次機會改變！」</div>
            <div class="index-team-surgery">
              <div>腹腔鏡胃繞道手術</div>
              <img class="index-team-surgery-photo" src="~assets/img/ui/surgery1.png" alt="">
            </div>
            <div class="index-team-surgery">
              <div>微創胃腸肝膽手術</div>
              <img class="index-team-surgery-photo" src="~assets/img/ui/surgery1.png" alt="">
            </div>
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
            <div class="index-team-surgery">
              <div>運動處方</div>
              <img class="index-team-surgery-photo" src="~assets/img/ui/surgery1.png" alt="">
            </div>
            <div class="index-team-surgery">
              <div>藥物暨營養內科減重</div>
              <img class="index-team-surgery-photo" src="~assets/img/ui/surgery1.png" alt="">
            </div>
            <div @click="popup1('昱彰')" class="index-team-more">瞭解更多</div>
          </div>
          <img class="index-team-photo" src="~assets/img/doctor/03.png" alt="">
        </div>
        <!-- 4 -->
        <div class="index-team-box">
          <div class="index-team-row2">
            <div class="index-team-name">暐霖 醫師</div>
            <div class="index-team-word">「真心想，就會事成」</div>
            <div class="index-team-surgery">
              <div>無傷口胃鏡水球術</div>
              <img class="index-team-surgery-photo" src="~assets/img/ui/surgery1.png" alt="">
            </div>
            <div class="index-team-surgery">
              <div>腹腔鏡微創縮胃術</div>
              <img class="index-team-surgery-photo" src="~assets/img/ui/surgery1.png" alt="">
            </div>
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
              <div class="index-team-surgery">
                <div>腹腔鏡減重手術</div>
                <img class="index-team-surgery-photo" src="~assets/img/ui/surgery1.png" alt="">
              </div>
              <div class="index-team-surgery">
                <div>內視鏡胃袖狀縫合術</div>
                <img class="index-team-surgery-photo" src="~assets/img/ui/surgery1.png" alt="">
              </div>
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
              <div class="index-team-surgery">
                <div>腹腔鏡胃繞道手術</div>
                <img class="index-team-surgery-photo" src="~assets/img/ui/surgery1.png" alt="">
              </div>
              <div class="index-team-surgery">
                <div>微創胃腸肝膽手術</div>
                <img class="index-team-surgery-photo" src="~assets/img/ui/surgery1.png" alt="">
              </div>
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
              <div class="index-team-surgery">
                <div>運動處方</div>
                <img class="index-team-surgery-photo" src="~assets/img/ui/surgery1.png" alt="">
              </div>
              <div class="index-team-surgery">
                <div>藥物暨營養內科減重</div>
                <img class="index-team-surgery-photo" src="~assets/img/ui/surgery1.png" alt="">
              </div>
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
              <div class="index-team-surgery">
                <div>無傷口胃鏡水球術</div>
                <img class="index-team-surgery-photo" src="~assets/img/ui/surgery1.png" alt="">
              </div>
              <div class="index-team-surgery">
                <div>腹腔鏡微創縮胃術</div>
                <img class="index-team-surgery-photo" src="~assets/img/ui/surgery1.png" alt="">
              </div>
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
          <img v-if="currentCase.name == '三高'" class="index-case-photo" src="~assets/img/case/1threehight.png" alt="">
          <img v-if="currentCase.name == '不孕症'" class="index-case-photo" src="~assets/img/case/2pregnant.jpg" alt="">
          <img v-if="currentCase.name == '心肌梗塞'" class="index-case-photo" src="~assets/img/case/3heart.jpg" alt="">
          <img v-if="currentCase.name == '衣服選擇障礙'" class="index-case-photo" src="~assets/img/case/4clothe.jpg" alt="">
          <img v-if="currentCase.name == '改變身形'" class="index-case-photo" src="~assets/img/case/5body.jpg" alt="">
          <img v-if="currentCase.name == '肝指數異常'" class="index-case-photo" src="~assets/img/case/6liver.png" alt="">
          <img v-if="currentCase.name == '容貌焦慮'" class="index-case-photo" src="~assets/img/case/7face.jpg" alt="">
          <img v-if="currentCase.name == '缺乏自信'" class="index-case-photo" src="~assets/img/case/8confident.jpg" alt="">
          <img v-if="currentCase.name == '高血壓＆呼吸中止'" class="index-case-photo" src="~assets/img/case/9press.jpg" alt="">
          <img v-if="currentCase.name == '高血壓、自體免疫系統疾病、睡覺打鼾'" class="index-case-photo" src="~assets/img/case/10sleep.png" alt="">
          <img v-if="currentCase.name == '關節疼痛與壓迫'" class="index-case-photo" src="~assets/img/case/11press.jpg" alt="">
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
      <a href="tel:+886-76150933" target="_blank" class="index-contact-box">
        <div class="index-contact-inner">
          <img class="index-contact-img" src="~assets/img/ui/phone2.png" alt="">
          <div class="index-contact-num">來電預約 07-6150933</div>
        </div>
        <img class="index-contact-img2" src="~assets/img/ui/copy.png" alt="">
      </a>
      <!-- http://line.me/ti/p/~frank810729 -->
      <a href="https://lin.ee/vRXCyNF" target="_blank" class="index-contact-box">
        <div class="index-contact-inner">
          <img class="index-contact-img" src="~assets/img/ui/line.png" alt="">
          <div class="index-contact-num">加入 LINE@ 官方帳號</div>
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
          <img class="index-popup-img"  :src="`${useAsset(popup1Value.img)}`" alt="">
          <div class="index-popup-right">
            <div class="index-popup-head">{{ popup1Value.head }}</div>
            <div class="index-popup-title">學經歷</div>
            <div class="index-popup-text" v-html="popup1Value.text1">
            </div>
            <div class="index-popup-title">醫療專長</div>
            <div class="index-popup-text" v-html="popup1Value.text2"></div>
            <a :href="popup1Value.link" target="_blannk" class="index-popup-reserve">
              <div class="index-popup-reserve-text">預約門診</div>
            </a>
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
          <img v-if="currentCase2.name == '三高'" class="index-popup2-photo" src="~assets/img/case/1threehight.png" alt="">
          <img v-if="currentCase2.name == '不孕症'" class="index-popup2-photo" src="~assets/img/case/2pregnant.jpg" alt="">
          <img v-if="currentCase2.name == '心肌梗塞'" class="index-popup2-photo" src="~assets/img/case/3heart.jpg" alt="">
          <img v-if="currentCase2.name == '衣服選擇障礙'" class="index-popup2-photo" src="~assets/img/case/4clothe.jpg" alt="">
          <img v-if="currentCase2.name == '改變身形'" class="index-popup2-photo" src="~assets/img/case/5body.jpg" alt="">
          <img v-if="currentCase2.name == '肝指數異常'" class="index-popup2-photo" src="~assets/img/case/6liver.png" alt="">
          <img v-if="currentCase2.name == '容貌焦慮'" class="index-popup2-photo" src="~assets/img/case/7face.jpg" alt="">
          <img v-if="currentCase2.name == '缺乏自信'" class="index-popup2-photo" src="~assets/img/case/8confident.jpg" alt="">
          <img v-if="currentCase2.name == '高血壓＆呼吸中止'" class="index-popup2-photo" src="~assets/img/case/9press.jpg" alt="">
          <img v-if="currentCase2.name == '高血壓、自體免疫系統疾病、睡覺打鼾'" class="index-popup2-photo" src="~assets/img/case/10sleep.png" alt="">
          <img v-if="currentCase2.name == '關節疼痛與壓迫'" class="index-popup2-photo" src="~assets/img/case/11press.jpg" alt="">

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

useHead({
  title: '義大專業的醫療團隊',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: '2023年本中心獲頒「國家生技醫療品質獎」的殊榮，您有任何問題，親切的醫師都在診所為您服務，四位醫師＋個管師＋營養師的全方位照護，全心投入於外科手術減重，帶來更好的效果、降低風險與副作用，我們給您最舒適的住房體驗' },
    { name: 'og:img', content: useAsset('img/logo/logo.png')},
  ],
  bodyAttrs: {
    
  }
})


// 定時三秒，切換 current 數字換圖換字

const intervalId = setInterval(()=> {
  if(currentRotate.value == 5) {
  currentRotate.value = 1
  } else {
    currentRotate.value = currentRotate.value + 1
  }
}, 5000)

function leftGo() {
  currentRotate.value = currentRotate.value - 1
}

function rightGo() {
  currentRotate.value = currentRotate.value + 1
}


const currentRotate = ref(1)


const isPopup1 = ref(false)
const isPopup2 = ref(false)
const isPopup3 = ref(false)

const popup1Data = ref([
  {
    img: 'img/des/D01.png',
    name: '建翰',
    head: '「你若有決心，我就有方法」',
    text1: `
義大醫院一般外科主治醫師<br>
台灣代謝及減重外科專科醫師<br>
台灣乳房醫學會專科醫師<br>
台灣消化系外科專科醫師<br>
大林慈濟醫院一般外科總醫師<br>
大林慈濟醫院一般外科主治醫師<br>
大林慈濟醫院減重與代謝手術治療中心主治醫師<br>
日本京都大學附設醫院肝膽胰移植外科短期受訓醫師<br>
慈濟大學醫學系學士
    `,
    text2: `
腹腔鏡減重與代謝手術<br>
腹腔鏡消化道與肝膽胰微創手術<br>
腹腔鏡及傳統疝氣修補手術<br>
腹部外科急症手術、外傷急救與重症醫學<br>
乳癌篩檢及診斷、乳房超音波檢查及乳房手術
    `,
    link: 'https://bit.ly/JiHaCh'
  },
  {
    img: 'img/des/D02.png',
    name: '忠延',
    head: '「給自己一次機會改變！」',
    text1: `
義大醫院一般外科主治醫師<br>
義大癌治療醫院亞洲肥胖醫學研究中心副科主任<br>
台灣代謝及減重外科醫學會專科醫師<br>
台灣外科醫學會外科專科醫師<br>
台灣消化系外科醫學會專科醫師<br>
台灣內分泌外科醫學會專科醫師<br>
台灣乳房專科醫師<br>
台灣乳房外科專科醫師
    `,
    text2: `
腹腔鏡減重手術及糖尿病手術<br>
頸部無疤痕內視鏡甲狀腺手術、傳統甲狀腺手術、副甲狀腺手術<br>
乳癌篩檢、乳癌手術、乳房超音波檢查、微創乳房手術<br>
腹腔鏡微創胃腸肝膽手術<br>
腹腔鏡微創疝氣手術、傳統疝氣手術
    `,
    link: 'https://bit.ly/CuYaC'
  },
  {
    img: 'img/des/D03.png',
    name: '昱彰',
    head: '「選擇不一樣的人生與人『身』」',
    text1: `
義大醫院家庭暨社區醫學部家庭醫學科主治醫師<br>
義大減重中心主治醫師<br>
義大醫院職業醫學科訓練醫師<br>
全國醫師醫療產業工會常務理事<br>
台灣大學公共衛生碩士學位學程社會及行為科學組就讀<br>
義大醫院PGY、住院醫師（模範住院醫師)、總醫師、主治醫師<br>
私立高雄醫學大學醫學系、實習醫師
    `,
    text2: `
慢性病（高血壓、糖尿病、高血脂、骨質疏鬆症）之治療與追蹤<br>
門診常見疾病的診斷及治療<br>
健康飲食衛教<br>
運動處方箋開立<br>
戒菸治療與衛教<br>
成人預防保健<br>
兒童預防保健
    `,
    link: 'https://bit.ly/CWeLi'
  },
  {
    img: 'img/des/D04.png',
    name: '暐霖',
    head: '「真心想，就會事成」',
    text1: `
義大醫院家庭暨社區醫學部主治醫師<br>
義大大昌醫院纖體健康中心副主任<br>
中華民國家庭醫學科專科醫師<br>
中華民國骨質疏鬆症專科醫師<br>
台灣肥胖醫學會會員<br>
糖尿病共同照護網收案醫師<br>
戒菸治療服務醫師<br>
義大醫院家醫科住院醫師、總醫師、研究醫師<br>
高雄醫學大學醫學系學士
    `,
    text2: `
門診常見急慢性疾病的診斷及治療<br>
骨質疏鬆症<br>
內科減重（飲食調整及藥物輔助療法）<br>
青少年肥胖<br>
整合式健康照護、預防保健諮詢
    `,
    link: 'https://bit.ly/CYuC'
  },
])

const popup1Value = ref({
  img: '',
  name: '',
  head: '',
  text1: ``,
  text2: ``
})

function popup1(myName) {
  isPopup1.value = true
  const index3 = popup1Data.value.findIndex(item => item.name == myName)
  popup1Value.value = popup1Data.value[index3]
}

const currentCase = ref({ name: '', title: '', text: '' })

const caseAll = ref([
  { name: '三高', title: '手術一年，從127到84公斤', text: `
  我的姪女都成功減50公斤，對我產生相當大的影響也想去嘗試<br>
  腰圍從46變36（瘦了一大圈）<br>
  走路輕盈地像要飛起來一樣<br><br>

  很慶幸自己做了這個決定，是我人生重大的一個轉捩點：這個決定我思考了三年。<br>
  我本身有著三高問題加上年紀50，因為疫情的關係讓我更感覺健康的重要，也告訴自己：「啥美食我都吃過了，是時候為自己身體控制嘴、控制食慾了。」<br><br>

  手術後三個月內是身體的#恢復期<br>
  有身體和胃都不太舒服的時候，不過義大的主治醫師團隊從生理、心理、營養各方面的細心指導，讓整個過程很舒坦，體重也如預期的漸漸降下來，很感謝自己當初最的決定！<br><br>

  重獲自信心，但別再問我這些問題<br>
  「我是怎麼瘦下來的，」每每解釋又是好長的故事，現在我會說「管住嘴，邁開腿，找個好團隊」，就這麼簡單！<br>
  我有個員工43公斤也說要減肥，可見每個人都想瘦，我知道，所以很感謝義大的醫療團隊，就像是給我一個新的人生，有你們真好，超愛你們
  ` },
  { name: '不孕症', title: '老公我懷孕了！而且是#自然受孕', text: `
「你不要騙我。」老公說我們夫妻盼了11年多年不孕、就連試管做卵一直長不大而崩潰大哭的我來說，竟然自然受孕了？<br><br>

這是真的！<br><br>
要不是因為我脖子長了一顆11公分腫瘤而去看診，跟醫生聊到我不孕，現在回想起來，那時的我本來就在高血壓跟糖尿病邊緣（體重90公斤），陳醫生當時不但沒安慰我，還直接說「這麼胖怎麼可能懷孕！」真是好生氣<br><br>

我只想受孕，也得到健康<br><br>
卻也是他，讓我鏟肉－25公斤，而且後來有女長輩見到我，竟然當我跟老公的面前說：「妳前妻去那裡？」<br>

我聽了哭笑不得，長輩竟然以為我先生再娶！這些回想起來，或是回到門診時，看到不孕症的媽媽們還是覺得心酸酸的<br>
陳醫師說我是他當主任得第一個開刀縮胃的病人，有這樣的緣分真的感謝他，他讓我有一起成長的寶寶，謝謝強大的減重團隊。<br>
現在我的小孩9個月大了，每次看到直話直說的陳建翰醫生心都暖暖的。
  ` },
  { name: '心肌梗塞', title: '從鬼門關前救回來的人生', text: `
  你懂得，出社會之後工作繁忙，三餐隨便吃下班也要宵夜喝啤酒跟朋友聚會，一直都覺得自己有本錢，直到那一天⋯⋯<br><br>

兩年前的九月，體重三位數的我發生致命的#急性心肌梗塞<br><br>
那個痛感、痛苦、到讓我瞬間眼前一片漆黑，只能癱倒在床上直冒冷汗半個小時，或許是我的主耶穌聽到我的命危前夕的微弱禱告，讓我尚存的力氣能自己趕往醫院救命...<br>

#心肌梗塞 之後我的心臟機能大幅度衰弱，再拖著三位數的體重，只要走個路、爬個梯都會讓我覺得隨時快要斷氣，真的讓我覺得，原來我的人生已是窮途末路<br><br>

回想婚後的#幸福肥到BMI跌破眼鏡<br><br>
日常生活總是常會心想多吃喝，我覺得工作的繁忙可以消耗掉熱量，況且沒多吃一點工作沒體力...總之就是在飲食上沒在節制的<br>
雖然過往也有嘗試過斷食，運動，節食，甚至吃很貴的自費減肥藥，都是希望越大，失望更大...有次到義大心臟內科回診，批價收據上看到#義大減重中心，我心想：「再給自己一次機會！」<br><br>

陳醫師嚴謹的檢查流程，制定快狠準的治療方式<br><br>

連手術日期也是快速的敲定，「你不能再拖了，」陳醫師說；整個手術過程又快又無感，竟然隔一個晚上就能出院？<br>

即使手術返家了，減重中心對我的恢復狀況、配套飲食計畫都追蹤很仔細，營養師說術後的飲食非常重要，因為術後就是「身體擁有全新消化系統」，營養師規劃恢復飲食的計畫對我助益良多<br>

一年過去我減掉了３６公斤，隔了十年我再次回到學生時代的體重，體檢結果也不再滿江紅，健康體態跟精神又回來了真的很感謝陳醫師及減重服務團隊讓我的健康人生又回來了！「老婆，我回來了！」
  ` },
  { name: '衣服選擇障礙', title: '想到社會對肥胖者的目光，我更不後悔讓自己變美', text: `
  將近破百的重量，現在只有64！<br><br>
術前的我將近100公斤，要有合適好看的衣服真的很困難，街上看到好看的服飾店連踏進去的勇氣都沒有，出門也要擔心別人的目光，感覺自己是人群中的異類，更因為身材的關係遭到同儕嘲笑、霸凌<br><br>

術後八個月，我的體重下降到65公斤<br><br>

雖然還是肉肉的，但是能穿下更精緻更好看的衣服，身材的改變帶給我更多的自信，開始化妝和學習穿撘，變成享受別人驚訝的目光：「欸你是不是又變瘦了」、「變漂亮了認不出來餒」<br><br>

聽到這些話，就讓我更堅定想要變瘦變漂亮的心！<br><br>

最近看到那些身材豐腴的人，仍不免想到一年前的我也是這樣的，看到社會對待肥胖者的目光，讓我慶幸我選擇了開刀這條路，很感謝支持我的家人，還有我的主治醫師和營養師，讓我過上更自信的生活<br><br>

你也可以！
  ` },
  { name: '改變身形', title: '想要－60 kg一定得付出，長期做得到就是我不再胖的原因', text: `
  「手術後經過九個多月，一開始身形改變不少也比以前更健康，看前自己的照片跟現在，簡直是兩個不一樣的人！一開始會害怕做手術會不會很痛，但想改變一定得付出。」<br><br>

愛喝飲料 → 找到替代品<br><br>

減重就只能喝水嗎？不，這裡的營養師幫我找到解饞的替代品，或許不是多數人能接受的，但我卻很愛！我可以長期遵守的方法，就是好方法<br><br>

現在的我對美食也有了「克制能力」<br><br>

除了自制力，選擇食物很重要，我覺得最重要的還是了解自己的自制力底線吧，當自己身邊的人在吃＃鹹酥雞、＃泡麵這些很香的食物也要能克制自己不去吃，我竟然能做到了！<br><br>

選擇食物真的很重要，如果已經付出麼多的努力了，再回到過去吃錯誤的食物的話，一切就白費了吧！所以能讓自己維持飲食的方法，不妨多嘗試！
  ` },
  { name: '肝指數異常', title: '每次在診間外我都很懷疑，我真的可以成功嗎？', text: `
  結果我做到了！-32kg 我是Miss. K<br><br>

在生完小孩以後不碰體重計10多年，也不喜歡拍照，全家ㄧ起拍的照片是寥寥可數<br><br>

當然這期間我也嘗試了很多減重方式，很顯然的效果都不理想，直到我自己的肝指數破百、身體出現毛病後，我才在朋友的介紹下找到陳主任幫忙。<br><br>

每次坐在外面的沙發看著診間播放的影片，也曾懷疑「我真的能成功嗎？」逐漸看到自己的進步之後，現在又開始喜歡拍照了，希望可以留下美美的回憶，都要感謝陳主任所帶領的專業團隊！<br>

減重中心的團隊當然專業，卻也是非常親切好聊天和溝通的那種，加上#營養師適時的糾正我的飲食習慣，整體來說讓我除了能有好的體態外，更能獲得健康
  ` },
  { name: '容貌焦慮', title: '原來不後悔是真的，新的人生也是真的', text: `
  最應該要謝謝的是我決定從台南跑來高雄的那一刻，謝謝陳主任沒有給我退縮的機會<br><br>

手術前一天，我帶著同事們的祝福踏進病房<br><br>

晚上陳醫師來病房看我：不用緊張！明天手術後醒來，你要迎接的是你新的人生；然後，我正式踏上醫生所謂「新的人生」<br>

回想兩年前被朋友們說：妳真的太胖了，給我瘦哦！，只因為我出去玩什麼設施都不敢坐，還因為太胖了設施的安全桿竟壓不下去！只好「下車」當下真的好丟臉<br><br>

雖然我從來都不覺得自己胖的很糟，其實我更需要的是長期健康，134公斤的我，沒想過會想挨這麼一刀，現在發現網路上的那些「謠言」都是真的：<br><br>
「真後悔！太晚來做手術了」<br>
「衣服都能穿得下怎麼可能不開心」<br>
「瘦下來以後桃花常常來敲門」
  ` },
  { name: '缺乏自信', title: '謝謝自己一直努力，讓我重生', text: `
  手術後３天我就能上班了！不可思議<br><br>

最初諮詢時，拖著上百公斤的身體、一邊顫抖跟陳醫生確認，是不是一百分的努力，就會有一百分的成果呢？因為陳醫師充滿信心的眼神，我選擇手術，有勇氣，就行動！<br><br>

手術後２週<br><br>
每天先喝些湯湯水水就很有飽足感，我心想這樣也省下不少餐費；一邊慢慢練習進食量，不知不覺就一掃過去不好的習慣：向亂吃一通 say good-bye<br>
對了對了，中心團隊與醫生不斷的提醒與關心：「慢、慢、進、食」真的讓我#胃食道逆流再也沒有出現過，體重也降到９Ｘ→８Ｘ開頭，再加上開始運動，就來到７字頭，每次量體重都嚇一跳！<br><br>

以為這是一場夢<br><br>
還是常常照鏡子、深怕醒來之後肥肉再度回來，但現在路人甲乙丙根本認不出來我是誰的驚喜感，甚至開始誇獎、稱讚我的勇氣，想想當初怎麼考慮那麼久都不行動呢？辛苦我的身體多壓了那麼重的肥肉這麼久<br><br>

減重是一輩子的課題<br><br>

陳醫生曾跟我說過「不要因為瘦下來嘴巴就不控制，這樣真的只會是夢」，身材體態要維持不是醫生說了算，也不是用「説」的，而是努力實踐，好好的照顧身體；我不後悔自己選擇切胃，我對自己選擇感到驕傲！這是最適合我的減重方式了<br>
美美的人生，我、來、了
  ` },
  { name: '高血壓＆呼吸中止', title: '當體重156公斤會發生什麼事？', text: `
  
「我連坐著也呼吸不到空氣，根本不想起身走路」<br><br>

那段時間我最在意的，都是外人看不見的<br><br>

血壓180、200很長一段時間<br>
平均每晚暫停60次呼吸（必須吃安眠藥、鎮靜止痛藥）<br><br>

總是依賴侄子照顧<br>
呼吸器治療費用20萬元<br><br>

當我遇見#鄭瑋霖醫師，一切都不一樣了<br><br>

－12堂的飲食調整，除了學會知識，也對生活更加有感，不再厭世<br>
－每週一次重訓１小時＋有氧半小時<br>
－每逢過年、大家吃爆的假期，只有我瘦下來<br><br>
現在別說健步如飛了，連血壓、血糖（HbA1C）都好轉，我最得意的還有這些<br><br>

沒錯，我就是侄子心中的減重第一名聖羿<br>
侄子現在跟著我是一起運動、注意飲食和健康<br>
我不再吃安眠藥，也不會半夜醒來、輾轉難眠

  ` },
  { name: '高血壓、自體免疫系統疾病、睡覺打鼾', title: '90公斤媽媽瘦身歷險！半年後鄰居：妳是誰？', text: `
  
  從小我的志願就是當老師，可是自從結婚當了媽媽之後，我的志願卻變成「瘦身」<br><br>

生完二個baby後我的體重就不能再回到從前<br><br>

從60、70、80、90到了我人生的體重癲峰，然後什麼病通通都來了：高血壓、自體免疫系統疾病、睡覺打鼾（兒子說一樓就能聽到媽媽在三樓的打鼾聲），而且走路、爬樓梯上氣不接下氣，糖化血色素也接近臨界值<br><br>

掙扎一段時間終於鼓起勇氣去義大減重中心掛了門診，心裡難免忐忑不安，但在陳建翰主任的專業說明與分析每種手術的優缺點及風險，做了#胃袖狀切除手術<br><br>

經過半年我瘦了35公斤!!!!<br><br>

術後當然飲食、運動是最重要的２個瘦下來的因素，更要感謝每次回診時：<br>
１主任的勉勵<br>
２個管師的噓寒問暖<br>
３營養師的飲食指導<br><br>

不管是外表跟身體的健康整個不一樣，簡直蛻變成另外一個人，連附近的店家也認不出我是誰！即使我已經到了知天命的年齡，還能有這樣的身材真的是我夢寐以求現在連睡覺也會笑真的是太美好了

  ` },
  { name: '關節疼痛與壓迫', title: '我用2年的時間，找到成功的方法', text: `
  38歲前，我認為只要我愛動，就算胖一點又怎樣；38歲之後我仍愛運動，身體卻告訴我『我沒有辦法了』。膝蓋、腳裸、脊椎，明顯的讓我不時須停下腳步...<br><br>

「原來我該找對方法，一次瘦下來。」<br><br>

術後的我，在球場上變得更靈活<br><br>
慢跑的公里數增加，速度也加快；泳池裡就更別說了，跟個人魚公主一樣！那天我穿上L號的洋裝，看著鏡子驚訝「這真的是我嗎？」一輩子都沒看過那麼漂亮的我，原來我也可以這樣漂亮！<br><br>

雖然我是一名社工，不需靠門面爭取業績，但站上舞台的我仍需要自信與魅力！我的自信是否因為變瘦而來我不知道，但我很確定「我沒辦法將視線移開鏡子裡的我!!」真實的心情！！謝謝你們！！<br><br>

他是個特別的醫生，非常獨特的個人風格<br><br>

主任的「帥」就不用強調了，專業更是無可挑剔，針對個案的需求，給予「合理的」要求，無論是在營養品的選擇或術後無厘頭的嘴饞壓力，他都給出最好的建議；術前衛教跟術後追蹤都讓我覺得貼心，非常信任的把我的健康交給他
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
      position: relative;
    }

    &-img {

    }

    &-btn-left {
      position: absolute;
      left: 10px;
      top: calc(50% - 20px);
      width: 44px;
      cursor: pointer;
      
      &:hover {
        opacity: 0.8;
      }
    }

    &-btn-right {
      position: absolute;
      right: 10px;
      top: calc(50% - 20px);
      width: 44px;
      cursor: pointer;
      cursor: pointer;
      
      &:hover {
        opacity: 0.8;
      }
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
      margin-top: 14px;
      font-size: 24px;
    }

    &-word {
      margin: 10px 8px;
      color: #888;
      font-size: 12px;
    }

    &-surgery {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-top: 8px;
      padding: 2px 18px;
      border-radius: 100px;
      background: #F4AFB0;
      color: white;
    }

    &-surgery-photo {
      width: 32px;
      margin-left: 4px;
    }

    &-more {
      width: 228px;
      margin: 30px auto 0px;
      padding: 14px 0px;
      border: 1px solid #772685;
      border-radius: 8px;
      color: #772685;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    &-photo {
      width: 188px;
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
      width: 80px;
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
    padding-bottom: 80px;
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

    &-reserve {
      position: absolute;
      right: 40px;
      bottom: 40px;

      &-text {
        width: 130px;
        text-align: center;
        margin: 30px auto 0px;
        padding: 13px 0px;
        border: 1px solid #772685;
        border-radius: 4px;
        color: #772685;
        cursor: pointer;
      }
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
      margin-top: 22px;
      display: flex;
      justify-content: space-between;
    }

    &-left {
      width: 46%;
      padding: 16px;
      background-color: #FBFBFB;
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
      padding: 16px;
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

    &-btn-left {

    }

    &-btn-right {

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

    &-surgery {
      font-size: 12px;
    }

    &-surgery-photo {

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
      position: relative;
      max-height: 50vh;
      margin-top: 20px;
      overflow-y: scroll;
    }

    &-head {
      font-size: 16px;
    }

    &-title {
      
    }

    &-text {
      
    }

    &-reserve {
      position: initial;

      &-text {
        width: 100%;
        text-align: center;
        margin: 16px auto 0px;
        padding: 15px 0px;
        border: 1px solid #772685;
      }
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
      padding: 0px;
      background-color: transparent;
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
