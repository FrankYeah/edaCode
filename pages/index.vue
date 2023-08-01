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
              <img class="index-team-surgery-photo" src="~assets/img/icon/cut.png" alt="">
            </div>
            <div class="index-team-surgery">
              <div>內視鏡胃袖狀縫合術</div>
              <img class="index-team-surgery-photo" src="~assets/img/icon/shrink-stomach.png" alt="">
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
              <img class="index-team-surgery-photo" src="~assets/img/icon/surround.png" alt="">
            </div>
            <div class="index-team-surgery">
              <div>微創胃腸肝膽手術</div>
              <img class="index-team-surgery-photo" src="~assets/img/icon/cut.png" alt="">
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
              <img class="index-team-surgery-photo" src="~assets/img/icon/pill.png" alt="">
            </div>
            <div class="index-team-surgery">
              <div>藥物暨營養內科減重</div>
              <img class="index-team-surgery-photo" src="~assets/img/icon/food-control.png" alt="">
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
              <img class="index-team-surgery-photo" src="~assets/img/icon/water-ball.png" alt="">
            </div>
            <div class="index-team-surgery">
              <div>腹腔鏡微創縮胃術</div>
              <img class="index-team-surgery-photo" src="~assets/img/icon/cut.png" alt="">
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
                <img class="index-team-surgery-photo" src="~assets/img/icon/cut.png" alt="">
              </div>
              <div class="index-team-surgery">
                <div>內視鏡胃袖狀縫合術</div>
                <img class="index-team-surgery-photo" src="~assets/img/icon/cut.png" alt="">
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
                <img class="index-team-surgery-photo" src="~assets/img/icon/surround.png" alt="">
              </div>
              <div class="index-team-surgery">
                <div>微創胃腸肝膽手術</div>
                <img class="index-team-surgery-photo" src="~assets/img/icon/cut.png" alt="">
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
                <img class="index-team-surgery-photo" src="~assets/img/icon/pill.png" alt="">
              </div>
              <div class="index-team-surgery">
                <div>藥物暨營養內科減重</div>
                <img class="index-team-surgery-photo" src="~assets/img/icon/food-control.png" alt="">
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
                <img class="index-team-surgery-photo" src="~assets/img/icon/water-ball.png" alt="">
              </div>
              <div class="index-team-surgery">
                <div>腹腔鏡微創縮胃術</div>
                <img class="index-team-surgery-photo" src="~assets/img/icon/shrink-stomach.png" alt="">
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
            <div @click="ill('容貌焦慮')" :class="['index-case-btn',
            {'index-case-btn-select': currentCase.name == '容貌焦慮'}]">容貌焦慮</div>
          <div @click="ill('心肌梗塞')" :class="['index-case-btn',
            {'index-case-btn-select': currentCase.name == '心肌梗塞'}]">心肌梗塞</div>
          <div @click="ill('衣服選擇障礙')" :class="['index-case-btn',
            {'index-case-btn-select': currentCase.name == '衣服選擇障礙'}]">衣服選擇障礙</div>
          <div @click="ill('身形改變')" :class="['index-case-btn index-case-rwd',
            {'index-case-btn-select': currentCase.name == '身形改變'}]">身形改變</div>
          <div @click="ill('肝指數異常')" :class="['index-case-btn index-case-rwd',
            {'index-case-btn-select': currentCase.name == '肝指數異常'}]">肝指數異常</div>
          <div @click="ill('缺乏自信')" :class="['index-case-btn index-case-rwd',
            {'index-case-btn-select': currentCase.name == '缺乏自信'}]">缺乏自信</div>
          <div @click="ill('呼吸中止')" :class="['index-case-btn index-case-rwd',
            {'index-case-btn-select': currentCase.name == '呼吸中止'}]">呼吸中止</div>
          <div @click="ill('高血壓、自體免疫系統')"
           :class="['index-case-btn index-case-btn3 index-case-rwd',
            {'index-case-btn-select': currentCase.name == '高血壓、自體免疫系統'}]"
           >高血壓、自體免疫系統</div>
          <div @click="ill('關節疼痛與壓迫')" :class="['index-case-btn index-case-rwd',
            {'index-case-btn-select': currentCase.name == '關節疼痛與壓迫'}]">關節疼痛與壓迫</div>
          <div @click="popup2('close')" class="index-case-btn2">更多</div>
        </div>
        <div class="index-case-row3">
          <div>
            <div class="index-case-way">
              <div class="index-case-way-row">
                <div class="index-case-way-head">減重方式</div>
                <img v-if="currentCase.surgery" class="index-case-way-img" src="~assets/img/icon/shrink-stomach.png" alt="img">
                <img v-if="currentCase.nosurgery" class="index-case-way-img" src="~assets/img/icon/food-control.png" alt="img">
                <img v-if="currentCase.pill" class="index-case-way-img" src="~assets/img/icon/pill.png" alt="img">
              </div>
              <div @click="popup1('建翰')" class="index-case-doctor">
                <div>
                  <div class="index-case-doctor-text">醫師</div>
                  <div class="index-case-doctor-name">陳建翰</div>
                </div>
                <img class="index-case-doctor-img" src="~assets/img/doctor/001.png" alt="img">
              </div>
            </div>
            <div class="index-case-title">{{ currentCase.title }}</div>
            <div class="index-case-text" v-html="currentCase.text"></div>
          </div>
          <img v-if="currentCase.name == '三高'" class="index-case-photo" src="~assets/img/case/1threehight.png" alt="">
          <img v-if="currentCase.name == '不孕症'" class="index-case-photo" src="~assets/img/case/2pregnant.jpg" alt="">
          <img v-if="currentCase.name == '心肌梗塞'" class="index-case-photo" src="~assets/img/case/3heart.jpg" alt="">
          <img v-if="currentCase.name == '衣服選擇障礙'" class="index-case-photo" src="~assets/img/case/4clothe.jpg" alt="">
          <img v-if="currentCase.name == '身形改變'" class="index-case-photo" src="~assets/img/case/5body.jpg" alt="">
          <img v-if="currentCase.name == '肝指數異常'" class="index-case-photo" src="~assets/img/case/6liver.png" alt="">
          <img v-if="currentCase.name == '容貌焦慮'" class="index-case-photo" src="~assets/img/case/7face.jpg" alt="">
          <img v-if="currentCase.name == '缺乏自信'" class="index-case-photo" src="~assets/img/case/8confident.jpg" alt="">
          <img v-if="currentCase.name == '呼吸中止'" class="index-case-photo" src="~assets/img/case/9press.jpg" alt="">
          <img v-if="currentCase.name == '高血壓、自體免疫系統'" class="index-case-photo" src="~assets/img/case/10sleep.png" alt="">
          <img v-if="currentCase.name == '關節疼痛與壓迫'" class="index-case-photo" src="~assets/img/case/11press.jpg" alt="">
        </div>
      </div>
    </div>

    <div id="service" class="index-service">
      <div class="index-service-row">
        <div class="index-service-left">
          <div class="index-service-head">減重服務</div>
          <div class="index-service-sub">根據您的需要，為您客製化</div>
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

    <div class="index-survey">
      <iframe width="100%" height="600px" src="https://www.surveycake.com/s/q08m8"
      style="border:#ddd 1px solid;" allowTransparency="true" frameborder="0"></iframe>
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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.9857089703996!2d120.36178057532615!3d22.765911625857466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e117cfb532485%3A0x4f7179e49e3a5895!2z6auY6ZuE576p5aSn5rib6YeN5Lit5b-D77yN5rib6YeN6IKl6IOW6ZaA6Ki6L-awtOeQgy_lhafoppbpj6HnuK7og4PmiYvooZM!5e0!3m2!1szh-TW!2stw!4v1690773692264!5m2!1szh-TW!2stw" width="100%" height="692" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <!-- <div class="index-location-"></div> -->
    </div>

    <div class="index-all">
      <div class="index-all-head">關於我們</div>
      <div class="index-all-text">只要你願意，專業減重團隊就在高雄燕巢區為你服務</div>
      <img class="index-all-img" src="~assets/img/group/group.jpeg" alt="">
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
            <div @click="ill2('容貌焦慮')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '容貌焦慮'}]"
            >容貌焦慮</div>
            <div @click="ill2('心肌梗塞')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '心肌梗塞'}]"
            >心肌梗塞</div>
            <div @click="ill2('衣服選擇障礙')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '衣服選擇障礙'}]"
            >衣服選擇障礙</div>
            <div @click="ill2('身形改變')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '身形改變'}]"
            >身形改變</div>
            <div @click="ill2('肝指數異常')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '肝指數異常'}]"
            >肝指數異常</div>
            
            <div @click="ill2('缺乏自信')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '缺乏自信'}]"
            >缺乏自信</div>
            <div @click="ill2('呼吸中止')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '呼吸中止'}]"
            >呼吸中止</div>
            <div @click="ill2('高血壓、自體免疫系統')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '高血壓、自體免疫系統'}]"
            >高血壓、自體免疫系統</div>
            <div @click="ill2('關節疼痛與壓迫')" :class="['index-popup2-item',
            {'index-popup2-item-select': currentCase2.name == '關節疼痛與壓迫'}]"
            >關節疼痛與壓迫</div>
          </div>
          <div class="index-popup2-center">
            <div class="index-popup2-way">
              <div class="index-popup2-way-head">減重方式</div>
              <img v-if="currentCase2.surgery" class="index-case-way-img" src="~assets/img/icon/shrink-stomach.png" alt="img">
              <img v-if="currentCase2.nosurgery" class="index-case-way-img" src="~assets/img/icon/food-control.png" alt="img">
              <img v-if="currentCase2.pill" class="index-case-way-img" src="~assets/img/icon/pill.png" alt="img">
            </div>
            <div class="index-popup2-head">{{ currentCase2.title }}</div>
            <div class="index-popup2-text" v-html="currentCase2.text"></div>
          </div>
          <img v-if="currentCase2.name == '三高'" class="index-popup2-photo" src="~assets/img/case/1threehight.png" alt="">
          <img v-if="currentCase2.name == '不孕症'" class="index-popup2-photo" src="~assets/img/case/2pregnant.jpg" alt="">
          <img v-if="currentCase2.name == '心肌梗塞'" class="index-popup2-photo" src="~assets/img/case/3heart.jpg" alt="">
          <img v-if="currentCase2.name == '衣服選擇障礙'" class="index-popup2-photo" src="~assets/img/case/4clothe.jpg" alt="">
          <img v-if="currentCase2.name == '身形改變'" class="index-popup2-photo" src="~assets/img/case/5body.jpg" alt="">
          <img v-if="currentCase2.name == '肝指數異常'" class="index-popup2-photo" src="~assets/img/case/6liver.png" alt="">
          <img v-if="currentCase2.name == '容貌焦慮'" class="index-popup2-photo" src="~assets/img/case/7face.jpg" alt="">
          <img v-if="currentCase2.name == '缺乏自信'" class="index-popup2-photo" src="~assets/img/case/8confident.jpg" alt="">
          <img v-if="currentCase2.name == '呼吸中止'" class="index-popup2-photo" src="~assets/img/case/9press.jpg" alt="">
          <img v-if="currentCase2.name == '高血壓、自體免疫系統'" class="index-popup2-photo" src="~assets/img/case/10sleep.png" alt="">
          <img v-if="currentCase2.name == '關節疼痛與壓迫'" class="index-popup2-photo" src="~assets/img/case/11press.jpg" alt="">

        </div>
      </div>
    </div>

    <div v-if="isPopup3" class="index-popup3">
      <div class="index-popup3-outer">
        <img @click="isPopup3 = false" class="index-popup3-close" src="~assets/img/ui/close2.png" alt="">
        <div class="index-popup3-row">
          <img class="index-popup3-icon" :src="`${useAsset(serviceData.icon)}`" alt="">
          <div>
            <div class="index-popup3-head">{{ serviceData.head }}</div>
            <div class="index-popup3-sub">{{ serviceData.head }}介紹</div>
          </div>
        </div>

        <div class="index-popup3-select-box">
          <el-select class="index-popup3-select" v-model="serviceSelect" placeholder="">
            <el-option
              v-for="item in serviceData.select"
              :key="item.name"
              :label="item.text"
              :value="item.name">
            </el-option>
          </el-select>
        </div>

        <div class="index-popup3-inner">
          <div class="index-popup3-surgery">
            <img class="index-popup3-surgery-icon" :src="`${useAsset(serviceData.content[serviceSelectNum].icon)}`" alt="">
            <div>
              <div class="index-popup3-surgery-head">{{ serviceData.content[serviceSelectNum].title }}</div>
              <div class="index-popup3-surgery-text">{{ serviceData.content[serviceSelectNum].sub }}</div>
            </div>
          </div>

          <div class="index-popup3-desc">
            <div class="index-popup3-head2">效果</div>
            <div class="index-popup3-text2" v-html="serviceData.content[serviceSelectNum].effect"></div>
            <div class="index-popup3-head2">優點</div>
            <div class="index-popup3-text2" v-html="serviceData.content[serviceSelectNum].trait"></div>
            <div class="index-popup3-head2">缺點</div>
            <div class="index-popup3-text2" v-html="serviceData.content[serviceSelectNum].weakness"></div>
          </div>

          <div v-if="serviceData.content[serviceSelectNum].doctor"
             @click="popup1(serviceData.content[serviceSelectNum].link)"
            class="index-popup3-doctor"
          >
            <div>
              <div class="index-popup3-doctor-head">醫師</div>
              <div class="index-popup3-doctor-text">{{ serviceData.content[serviceSelectNum].doctor }}</div>
            </div>
            <img class="index-popup3-doctor-icon" :src="`${useAsset(serviceData.content[serviceSelectNum].doctorIcon)}`" alt="">
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>

useHead({
  title: '高雄義大專業的外科減重團隊',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: '2023年本中心獲頒「國家生技醫療品質獎」的殊榮，您有任何問題，親切的醫師都在診所為您服務，四位醫師＋個管師＋營養師的全方位照護，全心投入於外科手術減重，帶來更好的效果、降低風險與副作用，我們給您最舒適的住房體驗' },
    { hid: 'og:image' , property: 'og:image' , content: useAsset('img/logo/logo3.png')},
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

const currentCase = ref({ name: '', title: '', text: '', surgery: false, nosurgery: false, pill: false })

const caseAll = ref([
  { name: '三高', title: '手術一年，從127到84公斤', text: `
   我的姪女都成功減50公斤，對我產生相當大的影響也想去嘗試<br>
 腰圍從46變36（瘦了一大圈）<br>
 走路輕盈地像要飛起來一樣<br><br>
▌很慶幸自己做了這個決定，是我人生重大的一個轉捩點：這個決定我思考了三年。<br>
我本身有著三高問題加上年紀50，因為疫情的關係讓我更感覺健康的重要，也告訴自己：「啥美食我都吃過了，是時候為自己身體控制嘴、控制食慾了。」<br><br>
▌手術後三個月內是身體的 #恢復期<br>
有身體和胃都不太舒服的時候，不過義大的主治醫師團隊從生理、心理、營養各方面的細心指導，讓整個過程很舒坦，體重也如預期的漸漸降下來，很感謝自己當初最的決定！<br><br>
▌重獲自信心，但別再問我這些問題<br>
「我是怎麼瘦下來的，」每每解釋又是好長的故事，現在我會說「管住嘴，邁開腿，找個好團隊」，就這麼簡單！<br>
我有個員工43公斤也說要減肥，可見每個人都想瘦，我知道，所以很感謝義大的醫療團隊，就像是給我一個新的人生，是給我一個新的人生，有你們真好，超愛你們。
  `, surgery: true, nosurgery: true, pill: false },
  { name: '不孕症', title: '老公我懷孕了！而且是#自然受孕', text: `

「你不要騙我。」老公說我們夫妻盼了11年多年不孕、就連試管做卵一直長不大而崩潰大哭的我來說，竟然自然受孕了？<br><br>

▌這是真的！<br>

要不是因為我脖子長了一顆11公分腫瘤而去看診，跟醫生聊到我不孕，現在回想起來，那時的我本來就在高血壓跟糖尿病邊緣（體重90公斤），陳醫生當時不但沒安慰我，還直接說「這麼胖怎麼可能懷孕！」真是好生氣<br><br>

▌我只想受孕，也得到健康<br>

卻也是他，讓我鏟肉 －25公斤，而且後來有女長輩見到我，竟然當我跟老公的面前說：「妳前妻去那裡？」 我聽了哭笑不得，長輩竟然以為我先生再娶！這些回想起來，或是回到門診時，看到不孕症的媽媽們還是覺得心酸酸的<br>

陳醫師說我是他當主任得第一個開刀縮胃的病人，有這樣的緣分真的感謝他，他讓我有一起成長的寶寶，謝謝強大的減重團隊。<br>

現在我的小孩9個月大了，每次看到直話直說的陳建翰醫生心都暖暖的。
  `, surgery: true, nosurgery: true, pill: false },
  { name: '容貌焦慮', title: '原來不後悔是真的，新的人生也是真的', text: `
  最應該要謝謝的是我決定從台南跑來高雄的那一刻，謝謝陳主任沒有給我退縮的機會<br><br>

▌手術前一天，我帶著同事們的祝福踏進病房<br><br>

晚上陳醫師來病房看我：不用緊張！明天手術後醒來，你要迎接的是你新的人生；然後，我正式踏上醫生所謂「新的人生」<br>

回想兩年前被朋友們說：妳真的太胖了，給我瘦哦！，只因為我出去玩什麼設施都不敢坐，還因為太胖了設施的安全桿竟壓不下去！只好「下車」當下真的好丟臉<br><br>

雖然我從來都不覺得自己胖的很糟，其實我更需要的是長期健康，134公斤的我，沒想過會想挨這麼一刀，現在發現網路上的那些「謠言」都是真的：<br><br>
「真後悔！太晚來做手術了」<br>
「衣服都能穿得下怎麼可能不開心」<br>
「瘦下來以後桃花常常來敲門」
  `, surgery: true, nosurgery: false, pill: true },
  { name: '心肌梗塞', title: '從鬼門關前救回來的人生', text: `
  你懂得，出社會之後工作繁忙，三餐隨便吃下班也要宵夜喝啤酒跟朋友聚會，一直都覺得自己有本錢，直到那一天⋯⋯<br><br>

▌兩年前的九月，體重三位數的我發生致命的#急性心肌梗塞<br><br>
那個痛感、痛苦、到讓我瞬間眼前一片漆黑，只能癱倒在床上直冒冷汗半個小時，或許是我的主耶穌聽到我的命危前夕的微弱禱告，讓我尚存的力氣能自己趕往醫院救命...<br>

#心肌梗塞 之後我的心臟機能大幅度衰弱，再拖著三位數的體重，只要走個路、爬個梯都會讓我覺得隨時快要斷氣，真的讓我覺得，原來我的人生已是窮途末路<br><br>

▌回想婚後的#幸福肥到BMI跌破眼鏡<br><br>
日常生活總是常會心想多吃喝，我覺得工作的繁忙可以消耗掉熱量，況且沒多吃一點工作沒體力...總之就是在飲食上沒在節制的<br>
雖然過往也有嘗試過斷食，運動，節食，甚至吃很貴的自費減肥藥，都是希望越大，失望更大...有次到義大心臟內科回診，批價收據上看到#義大減重中心，我心想：「再給自己一次機會！」<br><br>

▌陳醫師嚴謹的檢查流程，制定快狠準的治療方式<br><br>

連手術日期也是快速的敲定，「你不能再拖了，」陳醫師說；整個手術過程又快又無感，竟然隔一個晚上就能出院？<br>

即使手術返家了，減重中心對我的恢復狀況、配套飲食計畫都追蹤很仔細，營養師說術後的飲食非常重要，因為術後就是「身體擁有全新消化系統」，營養師規劃恢復飲食的計畫對我助益良多<br>

一年過去我減掉了３６公斤，隔了十年我再次回到學生時代的體重，體檢結果也不再滿江紅，健康體態跟精神又回來了真的很感謝陳醫師及減重服務團隊讓我的健康人生又回來了！「老婆，我回來了！」
  `, surgery: true, nosurgery: true, pill: false },
  { name: '身形改變', title: '想要－60 kg一定得付出，長期做得到就是我不再胖的原因', text: `
  「手術後經過九個多月，一開始身形改變不少也比以前更健康，看前自己的照片跟現在，簡直是兩個不一樣的人！一開始會害怕做手術會不會很痛，但想改變一定得付出。」<br><br>

▌愛喝飲料 → 找到替代品<br><br>

減重就只能喝水嗎？不，這裡的營養師幫我找到解饞的替代品，或許不是多數人能接受的，但我卻很愛！我可以長期遵守的方法，就是好方法<br><br>

▌現在的我對美食也有了「克制能力」<br><br>

除了自制力，選擇食物很重要，我覺得最重要的還是了解自己的自制力底線吧，當自己身邊的人在吃＃鹹酥雞、＃泡麵這些很香的食物也要能克制自己不去吃，我竟然能做到了！<br><br>

選擇食物真的很重要，如果已經付出麼多的努力了，再回到過去吃錯誤的食物的話，一切就白費了吧！所以能讓自己維持飲食的方法，不妨多嘗試！
  `, surgery: true, nosurgery: false, pill: false },
  { name: '肝指數異常', title: '每次在診間外我都很懷疑，我真的可以成功嗎？', text: `
  結果我做到了！-32kg 我是Miss. K<br><br>

▌在生完小孩以後不碰體重計10多年，也不喜歡拍照，全家ㄧ起拍的照片是寥寥可數<br><br>

當然這期間我也嘗試了很多減重方式，很顯然的效果都不理想，直到我自己的肝指數破百、身體出現毛病後，我才在朋友的介紹下找到陳主任幫忙。<br><br>

▌每次坐在外面的沙發看著診間播放的影片，也曾懷疑「我真的能成功嗎？」逐漸看到自己的進步之後，現在又開始喜歡拍照了，希望可以留下美美的回憶，都要感謝陳主任所帶領的專業團隊！<br>

減重中心的團隊當然專業，卻也是非常親切好聊天和溝通的那種，加上#營養師適時的糾正我的飲食習慣，整體來說讓我除了能有好的體態外，更能獲得健康
  `, surgery: true, nosurgery: true, pill: false },
  { name: '衣服選擇障礙', title: '想到社會對肥胖者的目光，我更不後悔讓自己變美', text: `
  將近破百的重量，現在只有64！<br><br>
術前的我將近100公斤，要有合適好看的衣服真的很困難，街上看到好看的服飾店連踏進去的勇氣都沒有，出門也要擔心別人的目光，感覺自己是人群中的異類，更因為身材的關係遭到同儕嘲笑、霸凌<br><br>

▌術後八個月，我的體重下降到65公斤<br><br>

雖然還是肉肉的，但是能穿下更精緻更好看的衣服，身材的改變帶給我更多的自信，開始化妝和學習穿撘，變成享受別人驚訝的目光：「欸你是不是又變瘦了」、「變漂亮了認不出來餒」<br><br>

聽到這些話，就讓我更堅定想要變瘦變漂亮的心！<br><br>

最近看到那些身材豐腴的人，仍不免想到一年前的我也是這樣的，看到社會對待肥胖者的目光，讓我慶幸我選擇了開刀這條路，很感謝支持我的家人，還有我的主治醫師和營養師，讓我過上更自信的生活<br><br>

你也可以！
  `, surgery: true, nosurgery: true, pill: false },
    { name: '關節疼痛與壓迫', title: '我用2年的時間，找到成功的方法', text: `
  38歲前，我認為只要我愛動，就算胖一點又怎樣；38歲之後我仍愛運動，身體卻告訴我『我沒有辦法了』。膝蓋、腳裸、脊椎，明顯的讓我不時須停下腳步...<br><br>

「原來我該找對方法，一次瘦下來。」<br><br>

▌術後的我，在球場上變得更靈活<br><br>
慢跑的公里數增加，速度也加快；泳池裡就更別說了，跟個人魚公主一樣！那天我穿上L號的洋裝，看著鏡子驚訝「這真的是我嗎？」一輩子都沒看過那麼漂亮的我，原來我也可以這樣漂亮！<br><br>

雖然我是一名社工，不需靠門面爭取業績，但站上舞台的我仍需要自信與魅力！我的自信是否因為變瘦而來我不知道，但我很確定「我沒辦法將視線移開鏡子裡的我!!」真實的心情！！謝謝你們！！<br><br>

▌他是個特別的醫生，非常獨特的個人風格<br><br>

主任的「帥」就不用強調了，專業更是無可挑剔，針對個案的需求，給予「合理的」要求，無論是在營養品的選擇或術後無厘頭的嘴饞壓力，他都給出最好的建議；術前衛教跟術後追蹤都讓我覺得貼心，非常信任的把我的健康交給他
  `, surgery: true, nosurgery: true, pill: false },
  { name: '呼吸中止', title: '當體重156公斤會發生什麼事？', text: `
  
「我連坐著也呼吸不到空氣，根本不想起身走路」<br><br>

▌那段時間我最在意的，都是外人看不見的<br><br>

血壓180、200很長一段時間<br>
平均每晚暫停60次呼吸（必須吃安眠藥、鎮靜止痛藥）<br><br>

總是依賴侄子照顧<br>
呼吸器治療費用20萬元<br><br>

▌當我遇見#鄭暐霖醫師，一切都不一樣了<br><br>

－12堂的飲食調整，除了學會知識，也對生活更加有感，不再厭世<br>
－每週一次重訓１小時＋有氧半小時<br>
－每逢過年、大家吃爆的假期，只有我瘦下來<br><br>
現在別說健步如飛了，連血壓、血糖（HbA1C）都好轉，我最得意的還有這些<br><br>

沒錯，我就是侄子心中的減重第一名聖羿<br>
侄子現在跟著我是一起運動、注意飲食和健康<br>
我不再吃安眠藥，也不會半夜醒來、輾轉難眠

  `, surgery: false, nosurgery: true, pill: false },
  { name: '高血壓、自體免疫系統', title: '90公斤媽媽瘦身歷險！半年後鄰居：妳是誰？', text: `
  
  從小我的志願就是當老師，可是自從結婚當了媽媽之後，我的志願卻變成「瘦身」<br><br>

▌生完二個baby後我的體重就不能再回到從前<br><br>

從60、70、80、90到了我人生的體重癲峰，然後什麼病通通都來了：高血壓、自體免疫系統疾病、睡覺打鼾（兒子說一樓就能聽到媽媽在三樓的打鼾聲），而且走路、爬樓梯上氣不接下氣，糖化血色素也接近臨界值<br><br>

▌掙扎一段時間終於鼓起勇氣去義大減重中心掛了門診，心裡難免忐忑不安，但在陳建翰主任的專業說明與分析每種手術的優缺點及風險，做了#胃袖狀切除手術<br><br>

▌經過半年我瘦了35公斤!!!!<br><br>

術後當然飲食、運動是最重要的２個瘦下來的因素，更要感謝每次回診時：<br>
１主任的勉勵<br>
２個管師的噓寒問暖<br>
３營養師的飲食指導<br><br>

不管是外表跟身體的健康整個不一樣，簡直蛻變成另外一個人，連附近的店家也認不出我是誰！即使我已經到了知天命的年齡，還能有這樣的身材真的是我夢寐以求現在連睡覺也會笑真的是太美好了

  `, surgery: true, nosurgery: false, pill: false },
  { name: '缺乏自信', title: '謝謝自己一直努力，讓我重生', text: `
  手術後３天我就能上班了！不可思議<br><br>

▌最初諮詢時，拖著上百公斤的身體、一邊顫抖跟陳醫生確認，是不是一百分的努力，就會有一百分的成果呢？因為陳醫師充滿信心的眼神，我選擇手術，有勇氣，就行動！<br><br>

▌手術後２週<br><br>
每天先喝些湯湯水水就很有飽足感，我心想這樣也省下不少餐費；一邊慢慢練習進食量，不知不覺就一掃過去不好的習慣：向亂吃一通 say good-bye<br>
對了對了，中心團隊與醫生不斷的提醒與關心：「慢、慢、進、食」真的讓我#胃食道逆流再也沒有出現過，體重也降到９Ｘ→８Ｘ開頭，再加上開始運動，就來到７字頭，每次量體重都嚇一跳！<br><br>

▌以為這是一場夢<br><br>
還是常常照鏡子、深怕醒來之後肥肉再度回來，但現在路人甲乙丙根本認不出來我是誰的驚喜感，甚至開始誇獎、稱讚我的勇氣，想想當初怎麼考慮那麼久都不行動呢？辛苦我的身體多壓了那麼重的肥肉這麼久<br><br>

▌減重是一輩子的課題<br><br>

陳醫生曾跟我說過「不要因為瘦下來嘴巴就不控制，這樣真的只會是夢」，身材體態要維持不是醫生說了算，也不是用「説」的，而是努力實踐，好好的照顧身體；我不後悔自己選擇切胃，我對自己選擇感到驕傲！這是最適合我的減重方式了<br>
美美的人生，我、來、了
  `, surgery: true, nosurgery: true, pill: false },
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

const currentCase2 = ref({ name: '', title: '', text: '', surgery: false, nosurgey: false, pill: false })

currentCase2.value = caseAll.value[0]

function ill2(myName) {
  const index2 = caseAll.value.findIndex(item => item.name == myName)
  currentCase2.value = caseAll.value[index2]
}

// popup3

function popup3(item) {
  isPopup3.value = true
  if(item == '減重手術'){
    serviceData.value = surgeryData.value
    serviceSelect.value = '袖狀胃切除手術'
  } else if(item == '不開刀') {
    serviceData.value = nifeData.value
    serviceSelect.value = '內視鏡縮胃手術'
  } else if(item == '內科治療') {
    serviceData.value = pillData.value
    serviceSelect.value = '羅氏纖｜羅鮮子'
  }
}

const serviceSelect = ref('')
const serviceSelectNum = ref(0)
const serviceData = ref({
  head: '',
  icon: '',
  select: [
    { name: '', text: '' },
    { name: '', text: '' },
  ],
  content: [
    {
      title: '',
      sub: '',
      link: '',
      icon: '',
      doctor: '',
      doctorIcon: '',
      effect: '',
      trait: '',
      weakness: ''
    },
  ]
})

watch(serviceSelect, (newValue, oldValue) => {
  const index4 = serviceData.value.content.findIndex(item => item.title == newValue)
  if(index4 == -1){
    serviceSelectNum.value = 0
  } else {
    serviceSelectNum.value = index4
  }
  console.log(index4)
  console.log(`count changed from ${oldValue} to ${newValue}`)
})

const surgeryData = ref({
  head: '減重手術',
  icon: 'img/ui/knife.png',
  select: [
    { name: '袖狀胃切除手術', text: '袖狀胃切除手術' },
    { name: '胃繞道手術', text: '胃繞道手術' },
  ],
  content: [
    {
      title: '袖狀胃切除手術',
      sub: '完成手術後的第一年，病人的體重可能會減少35-40%。',
      link: '建翰',
      icon: 'img/icon/cut.png',
      doctor: '陳建翰',
      doctorIcon: 'img/doctor/001.png',
      effect: `
      醫生會取走大約75%-80%的胃部，只留下一條細細的胃部，就像一個袖子一樣，所以我們稱它為袖狀胃切除術<br>

      這個手術的主要目的是減少胃的容量和限制食量，同時也減少了能增加食慾的賀爾蒙，叫做飢餓素(Ghrelin)，因此能達到減肥的效果。<br>

      這種手術是用腹腔鏡來進行的，醫生會在病人腹部切2-4個小傷口，然後使用高級的攝影鏡頭（腹腔鏡）和一些專門的手術工具來進行手術。<br>

      這個手術在我們的中心進行，一般來說，病人在手術後大約2-3天就能出院，回到家中休養。
      `,
      trait: `超過75%的人在接受袖狀胃切除手術後，他們的肥胖相關的病症會有所改善。這些病症包括像是糖尿病、高血壓、阻塞性睡眠呼吸中止症，以及膽固醇異常等問題。`,
      weakness: `
      袖狀胃切除手術的風險比胃繞道手術來得低一些，也較不會出現像是潰瘍、腸阻塞、或是營養不良這類的問題。<br>

      不過，它可能會增加胃食道逆流的風險, 因此仍然要定期追蹤。
      `
    },
    {
      title: '胃繞道手術',
      sub: '完成手術後的第一年，病人的體重可能會減少35-40%。',
      link: '忠延',
      icon: 'img/icon/surround.png',
      doctor: '陳忠延',
      doctorIcon: 'img/doctor/002.png',
      effect: `醫生會使用工具切割並縫合胃的上部，使其從下部分開，形成一個小胃囊。這個小袋子的功能就是限制食物的攝入量。接著，醫生會把這個小袋子連接到一段繞道的小腸上，這樣就能減少病人的卡路里和營養素的吸收。`,
      trait: `除長期糖尿病控制稍佳外, 與袖狀胃切除手術相近。`,
      weakness: `
      繞道手術可能會導致鐵質不足引起的貧血，和骨質疏鬆症。<br>

      有些人可能會因為維生素和礦物質不足，導致長期貧血、掉髮、頭暈、身體虛弱，或者是傷口無法正常癒合等問題。因此，手術後，病人需要長期服用綜合維他命，並且要定期追蹤。<br>

      還有可能會有「傾倒症候群」的情況，這是因為太多的糖類食物或大量的食物從胃部迅速進入小腸造成的。這種情況可以藉由調整飲食習慣來預防。<br>

      另外，有些人可能會出現「胃小腸吻合處潰瘍」，這可能會導致出血、胃部穿孔，甚至腹膜炎。為了減少潰瘍的發生，手術後患者需要完全避免抽煙，並且要小心使用消炎止痛藥。
      `
    },
  ]
})

const nifeData = ref({
  head: '不開刀',
  icon: 'img/ui/heart.png',
  select: [
    { name: '內視鏡縮胃手術', text: '內視鏡縮胃手術' },
    { name: '內視鏡胃內水球', text: '內視鏡胃內水球' },
  ],
  content: [
    {
      title: '內視鏡縮胃手術',
      sub: '第一年你可以期望減掉 15～20％的體重',
      link: '建翰',
      icon: 'img/icon/shrink-stomach.png',
      doctor: '陳建翰',
      doctorIcon: 'img/doctor/001.png',
      effect: `術後你可以在1-2天之內恢復正常生活。與其他更為侵入性的減重手術相比，風險較低`,
      trait: `
      １低飢餓感不易復胖<br>
      ２短期及長期減重效果與胃繞道相當，減重效果比束帶佳<br>
      ３傷口極小、疼痛度低、住院天數短<br>
      ４腹腔鏡手術單切口，幾乎看不到傷口<br>
      ５安全性較高、後遺症較低<br>
      ６日後仍可進行胃鏡檢查<br>
      ７不改變腸道吸收，較少營養吸收問題<br>
      ８無異物植入問題<br>
      ９無腸胃吻合，腸道接口潰瘍發生率更低
      `,
      weakness: `
      健保不給付, 需要評估商業保險是否給付

      須配合長期飲食控制方能達到最佳瘦身成果
      `
    },
    {
      title: '內視鏡胃內水球',
      sub: '胃水球置入六個月後，平均能減少10-15%體重',
      link: '暐霖',
      icon: 'img/icon/water-ball.png',
      doctor: '鄭暐霖',
      doctorIcon: 'img/doctor/004.png',
      effect: `
      在胃部放一個的水球，藉由水球填充胃部，產生飽食感，以降低食物攝取量的方式來達到減重的效果
      `,
      trait: `血壓，血糖，血脂肪，肝功能和代謝症候群皆有明顯改善`,
      weakness: `健保不給付, 需要評估商業保險是否給付`
    },
  ]
})

const pillData = ref({
  head: '內科治療',
  icon: 'img/ui/pin.png',
  select: [
    { name: '羅氏纖｜羅鮮子', text: '羅氏纖｜羅鮮子'},
    { name: '善纖達｜瘦瘦筆', text: '善纖達｜瘦瘦筆' },
    { name: '康纖芙', text: '康纖芙' },
    { name: '12週飲食控制', text: '12週飲食控制' },
  ],
  content: [
    {
      title: '羅氏纖｜羅鮮子',
      sub: '一年平均約 -2公斤（52週）',
      link: '昱彰',
      icon: 'img/icon/pill.png',
      doctor: '陳昱彰',
      doctorIcon: 'img/doctor/003.png',
      effect: `台灣食藥署目前核准上市，且已通過美國食品藥品監督管理局 (U.S. Food and Drug Administr a tion, FDA) 認可的減重藥物：<br>
Orlistat(XENICAL羅鮮子®),  Liraglutide(Saxenda善纖達®)以及Naltrexone hydrochloride /Bupropion hydrochloride (Contrave康纖芙®)。<br>

羅氏鮮可以阻斷一餐中約30%的油脂吸收。`,
      trait: `除了體重減輕，也有助於降低血壓、總膽固醇（TC) 及低密度脂蛋白(LDL)。`,
      weakness: `可能影響脂溶性維生素（維生素 A、D、E、K、β 胡 蘿蔔素）的吸收，建議長期使用者可在服用羅氏鮮後至少2小時或睡前補充綜合維生素`
    },
    {
      title: '善纖達｜瘦瘦筆',
      sub: '一年平均約 -6公斤（52週）',
      link: '昱彰',
      icon: 'img/icon/pill.png',
      doctor: '陳昱彰',
      doctorIcon: 'img/doctor/003.png',
      effect: `
      台灣食藥署目前核准上市，且已通過美國食品藥品監督管理局 (U.S. Food and Drug Administr a tion, FDA) 認可的減重藥物：<br>
Orlistat(XENICAL羅鮮子®),  Liraglutide(Saxenda善纖達®)以及Naltrexone hydrochloride /Bupropion hydrochloride (Contrave康纖芙®)。<br>

透過藥物, 可以降低腸胃道蠕動速度, 使得患者食量變小,同時可以抑制大腦食慾, 藉此減重 
      `,
      trait: `皮下注射，一天一次，可在餐前或餐後使用，不限白天或晚上`,
      weakness: `副作用包括噁心（39.3％）、腹瀉（20.9％）、便秘（19.4％）嘔吐（15.7％）、頭痛 （13.6％）等`
    },
    {
      title: '康纖芙',
      sub: '一年平均約 6~11%（52週）',
      link: '昱彰',
      icon: 'img/icon/pill.png',
      doctor: '陳昱彰',
      doctorIcon: 'img/doctor/003.png',
      effect: `
      台灣食藥署目前核准上市，且已通過美國食品藥品監督管理局 (U.S. Food and Drug Administr a tion, FDA) 認可的減重藥物：<br>
      Orlistat(XENICAL羅鮮子®),  Liraglutide(Saxenda善纖達®)以及Naltrexone hydrochloride /Bupropion hydrochloride (Contrave康纖芙®)。<br>

      透過藥物可以抑制大腦食慾, 藉此減重 
      `,
      trait: `口服, 一天1-2次`,
      weakness: `副作用包括噁心（34.1％）、頭痛（23.8％）、便秘（24.1％）、嘔吐（11.0％）、眩暈 （14.6％）等`
    },
    {
      title: '12週飲食控制',
      sub: '一年平均約 5~10%',
      link: '暐霖',
      icon: 'img/icon/food-control.png',
      doctor: '鄭暐霖',
      doctorIcon: 'img/doctor/004.png',
      effect: `
      透過調整飲食的內容、吃飯的次數以及進食的速度，我們可以減少攝取的熱量，進而降低體重。<br>

      飲食控制是減重的基礎，無論是藥物或手術，其主要的目的都是幫助我們更好地控制飲食。
      `,
      trait: `
      自然, 不飢餓, <br>

      只要飲食紀錄配合醫師及營養師指導調整飲食, 即可順利減重
      `,
      weakness: `無`
    },
  ]
})



</script>

<style>

.el-select .el-input__wrapper{
  background-color: #772685;
}


.el-select .el-input__inner {
  text-align: center;
  color: white;
  font-size: 16px;
}

.el-icon svg {
  color: white;
}

</style>

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

    &-way {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;

      &-row {
        display: flex;
        align-items: center;
      }

      &-head {
        margin-right: 12px;
        font-size: 18px;
        font-weight: 700;
      }

      &-img {
        width: 40px;
        height: 40px;
        margin-right: 4px;
      }
    }

    &-doctor {
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 700;
      margin-right: 80px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }

      &-text {
      
      }

      &-name {
        margin-top: 6px;
      }

      &-img {
        margin-left: 10px;
        width: 60px;
        height: 60px;
      }
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

  &-survey {
    margin: 100px 0px 0px;
  }

  //caontact

  &-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  // all

  &-all {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0px 0px;

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

    &-text {
      margin-top: 8px;
      color: #888;
    }

    &-img {
      width: 80vw;
      margin: 40px 0px 60px;
    }
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
    z-index: 3;

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

    &-way {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      &-head {
        margin-right: 12px;
        font-size: 18px;
        font-weight: 700;
      }

      &-img {
        width: 40px;
        height: 40px;
        margin-right: 4px;
      }
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

    &-select-box {
      margin: 16px auto 0px;
      text-align: center;
    }

    &-select {
      max-width: 200px;
      width: 100%;
      text-align: center;
    }

    &-inner {
      position: relative;
    }

    &-surgery {
      display: flex;
      align-items: center;
      margin-top: 20px;

      &-icon {
        width: 60px;
        height: 60px;
        margin-right: 20px;
      }

      &-head {
        font-size: 24px;
        font-weight: 700;
      }

      &-text {
        margin-top: 10px;
        color: #772685;
        font-size: 14px;
        font-weight: 700;
      }

    }

    &-desc {
      margin-top: 40px;
    }

    &-head2 {
      margin-top: 30px;
      font-weight: 700;
    }

    &-text2 {
      margin-top: 10px;
      line-height: 1.5;
      color: #5C5757;
    }

    &-doctor {
      position: absolute;
      top: 0px;
      right: 0px;
      display: flex;
      align-items: center;
      font-size: 18px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }

      &-head {
        
      }

      &-text {
        margin-top: 6px;
      }

      &-icon {
        margin-left: 20px;
        width: 80px;
        height: 80px;
      }
      
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

    &-way {

      &-row {

      }

      &-head {

      }

      &-img {

      }
    }

    &-doctor {
      margin-right: 0px;

      &-text {
      
      }

      &-name {
        
      }

      &-img {
        
      }
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

  // survey

  &-survey {
    margin: 64px 0px 0px;
  }

  //caontact

  &-contact {
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

  // all

  &-all {
    padding: 10px 0px 0px;

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

    &-img {
      width: 90vw;
      margin: 20px 0px 40px;
    }
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

    &-select-box {
      margin: 30px auto 0px;
    }

    &-select {
      max-width: 100%;
    }

    &-inner {
      overflow-y: scroll;
      max-height: 64vh;
    }

    &-surgery {
      margin-top: 30px;

      &-icon {
        width: 40px;
        height: 40px;
        margin-right: 14px;
      }

      &-head {
        font-size: 16px;
      }

      &-text {
        
      }

    }

    &-desc {
      margin-top: 80px;
    }

    &-head2 {
      margin-top: 24px;
    }

    &-text2 {
      margin-top: 8px;
    }

    &-doctor {
      right: auto;
      left: 0px;
      top: 60px;
      margin-top: 34px;
      justify-content: space-between;

      &-head {
        font-size: 10px;
      }

      &-text {
        font-size: 10px;
        margin-top: 4px;
      }

      &-icon {
        margin-left: 0px;
        width: 40px;
        height: 40px;
      }
      
    }
    
  }

}


}

</style>
