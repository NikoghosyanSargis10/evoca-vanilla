import './style.css'

document.querySelector('#app').innerHTML = `
    <div class="main">
    <header class="top-header">
      <div class="left-menu">
        <div class="active-tab">
          <div class="line"></div>
          <div class="textOther">Անհատ</div>
        </div>

        <div class="texterMejiDiv">
          <div class="text">Բիզնես</div>
          <div class="text">Ակնթարթային վճարումներ</div>
          <div class="text">Մեր մասին</div>
          <div class="text">Նորություններ</div>
          <div class="text">Բլոգ</div>
          <div class="text">Կարիերա</div>
        </div>
      </div>

      <div class="right-menu">
        <select class="header-select">
          <option value="online-apps" selected>Առցանց հայտեր</option>
          <option value="sme">ՓՄՁ վարկավորում</option>
          <option value="visa-infinite">Visa Infinite</option>
          <option value="mc-gold">MasterCard Gold</option>
          <option value="visa-gold">Visa Gold</option>
        </select>

        <select class="header-select">
          <option value="contact" selected>Հետադարձ կապ</option>
          <option value="phone1">+374 10 605555</option>
          <option value="phone2">+374 98 205555</option>
          <option value="phone3">+374 99 605555</option>
          <option value="short">8444</option>
          <option value="call">Պատվիրել զանգ</option>
        </select>

        <div class="icons">
          <img class="icon" src="https://img.magnific.com/premium-vector/location-pin-icon-vector-map-symbol-illustration_1297251-24694.jpg?semt=ais_hybrid&w=740&q=80" alt="Location">
          <img src="https://www.evoca.am/file_manager/Icons/faq.png" alt="" class="icon2">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/077/548/923/small/simple-flat-style-globe-earth-world-map-navigation-icon-element-vector.jpg" alt="" class="icon">
          <img src="https://www.iconpacks.net/icons/2/free-search-icon-2907-thumb.png" alt="" class="icon2">
          <img src="./icon.png" alt="" class="icon3">
        </div>
      </div>
    </header>

    <div class="down-header">
      <img class="logo-for-evoca" src="https://newmag.am/public/front/assets//images/pages/fest_summer/evoca.png" alt="Evocabank Logo">
      <a href="./varker.html">Վարկեր</a>  
      <a href="#">Քարտեր</a>  
      <a href="#">Ավանդներ</a>
      <a href="#">Հաշիվներ</a>
      <a href="#">Փոխանցումներ</a>
      <a href="#">Արժեթղթեր</a>
      <a href="#">EvocaSALARY</a>
      <a href="#">EvocaTOUCH</a>
      <div class="button-click">
        <button class="online-bank-btn">EvocaONLINE</button>
      </div>
    </div>


    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">Evoca պարտատոմսեր</h1>
          <p class="hero-text">
            Evocabank-ը կթողարկի դրամով, դոլարով ու եվրոյով պարտատոմսեր՝ մինչև 10․5% եկամտաբերությամբ
          </p>
          <a href="#" class="hero-btn">Իմանալ ավելին</a>
        </div>
        
        <div class="hero-image-box">
          <img src="https://www.evoca.am/images-cache/sliders/1/17942879801466/bbd0610200f229a4280f530a5a6de1dc-576x486.png" alt="Evoca Bonds" class="hero-img">
        </div>
      </div>
<div class="slider-controls">
  <button class="slider-arrow hero-arrow">←</button>
  <div class="slider-dots">
    <span class="dot active"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
  <button class="slider-arrow hero-arrow">→</button>
</div>

    </section>
       
    <section class="biometric-section">
      <div class="biometric-container">
        <div class="biometric-visual">
          <div class="triangle-container">
            <div class="curved-triangle"></div>
            <img id="biometric-face" src="https://www.evoca.am/img/temp/biometric/face3.png" alt="Face">
          </div>
        </div>
        
        <div class="biometric-content">
          <h2 class="bio-title">Դարձիր Evocabank-ի հաճախորդ բիոմետրիկ նույնականացմամբ</h2>
          <p class="bio-text">Սկանավորի՛ր QR կոդը, ներբեռնի՛ր EvocaTOUCH հարմարավետ հավելվածը, ստեղծի՛ր քո հաշիվը և ստացիր քարտ</p>
          
          <div class="biometric-footer">
            <div class="qr-wrapper">
              <img src="https://www.evoca.am/img/biometric-section-QR-Code.png" alt="QR" class="qr-img">
            </div>
            <button class="download-app-btn">Բեռնել հավելվածը</button>
          </div>
        </div>
      </div>
    </section>
    <section class="best-eco">
  <div class="best-eco-container">
    
    <div class="best-eco-visual">
      <img src="https://www.evoca.am/images-cache/histories/1/16448252170155/450x330.png" alt="Best Eco Statue" class="best-eco-statue-img"> 
    </div>
    
    <div class="best-eco-content">
      <h1 class="best-eco-title">Լավագույնը Evocabank-ից</h1>
      
      <div class="cards-grid">
        <div class="eco-card">
          <span class="card-badge bg-purple">Թվային քարտեր</span>
          <h3 class="card-title">Evoca Digital քարտ</h3>
          <p class="card-desc">Evoca Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածում։ Ակտիվացրու այն հիմա և ընտրիր քո սիրելի դիզայնը։</p>
        </div>
        
        <div class="eco-card">
          <span class="card-badge bg-purple">Նվեր քարտեր</span>
          <h3 class="card-title">Evoca Gift Card</h3>
          <p class="card-desc">Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը։ Քարտը հարմար է բոլոր առիթների համար։</p>
        </div>
        
        <div class="eco-card">
          <span class="card-badge bg-purple">Նոր հավելված</span>
          <h3 class="card-title">EvocaTOUCH 2</h3>
          <p class="card-desc">EvocaTOUCH-ը պարզապես բանկային հավելված չէ, վստահ ենք՝ այն քեզ համար դառնալու է ապրելակերպ։</p>
        </div>
        
        <div class="eco-card">
          <span class="card-badge bg-purple">Օնլայն վճարումներ</span>
          <h3 class="card-title">Արագ online վճարումներ</h3>
          <p class="card-desc">Կատարիր քո ընթացիկ վճարումները Evocabank-ի online տերմինալի միջոցով՝ պարզ և արագ։ Այն հասանելի է 24/7։</p>
        </div>
      </div>

    </div>
  </div>
</section>
     <section class="cards-slider-section">
  <div class="cards-slider-container">
    
    <div class="cards-thumbs-column">
      <div class="thumb-card">
        <img src="https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png" alt="Mastercard World Digital">
      </div>
      <div class="thumb-card">
        <img src="https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png" alt="Digital Gift Card">
      </div>
      <div class="thumb-card">
        <img src="https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png" alt="Mastercard Gold">
      </div>
    </div>

    <div class="main-card-display">
      <div class="active-card-wrapper">
        <img src="https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png" alt="ArCa Classic" class="main-card-img">
        
      </div>
    </div>

    <div class="card-info-content">
      <h2 class="card-info-title">Arca Classic</h2>
      <p class="card-info-text">
        Ձեռք բեր <span class="highlight-text">ArCa Classic</span> քարտը և կատարիր քո գործարքները մեր նորաոճ քարտի օգնությամբ:
      </p>
      <p class="card-info-text sub-text">
        Ընդամենը մեկ հպում <span class="highlight-text">EvocaTOUCH</span> հավելվածում և վերջ: Քարտը կարող ես ստանալ նույնիսկ առանց Բանկ այցելելու՝ հավելվածում նշելով առաքման տարբերակը: <span class="highlight-text">Evocabank</span>-ը մշտապես հոգում է քո հարմարավետության մասին:
      </p>
      <a href="#" class="card-detail-btn">Մանրամասն</a>
    </div>
      
  </div>
</section>
<section class="calculator-section">
  <div class="calc-main-container">
    <h1 class="calc-main-title">Հաշվիչներ</h1>
    
    <div class="calc-wrapper-box">
      <div class="calc-tabs-container">
        <button class="calc-tab-link active">Վարկ</button>
        <button class="calc-tab-link">Ավանդ</button>
      </div>
      
      <div class="calc-form-grid">
        
        <div class="calc-item-group">
          <label class="calc-item-label">Վարկի գումար</label>
          <div class="calc-input-row">
            <input type="text" value="0" class="calc-numeric-display">
            <span class="calc-currency-label">֏</span>
          </div>
          <div class="slider-wrapper">
            <input type="range" min="0" max="50000000" value="0" class="calc-range-input">
            <div class="slider-bounds">
              <span>0</span>
              <span>50 000 000</span>
            </div>
          </div>
        </div>

        
        <div class="calc-item-group">
          <label class="calc-item-label">ժամկետ</label>
          <div class="calc-input-row">
            <input type="text" value="1" class="calc-numeric-display">
            <span class="calc-currency-label">ամիս</span>
          </div>
          <div class="slider-wrapper">
            <input type="range" min="1" max="1200" value="1" class="calc-range-input">
            <div class="slider-bounds">
              <span>1 ամիս</span>
              <span>1200 ամիս</span>
            </div>
          </div>
        </div>


        <div class="calc-item-group">
          <label class="calc-item-label">Տարեկան տոկոսադրույք</label>
          <div class="calc-input-row">
            <input type="text" value="1" class="calc-numeric-display">
            <span class="calc-currency-label">%</span>
          </div>
          <div class="slider-wrapper">
            <input type="range" min="1" max="36" value="1" class="calc-range-input">
            <div class="slider-bounds">
              <span>1 %</span>
              <span>36 %</span>
            </div>
          </div>
        </div>

        <div class="calc-item-group repayment-type-box">
          <label class="calc-item-label-static">Մարման ձև</label>
          <div class="calc-radio-row">
            <label class="calc-radio-container">
              <input type="radio" name="repayment" checked class="calc-real-radio">
              <span class="calc-custom-circle"></span>
              <span class="calc-radio-text">Զսպանակաձև</span>
            </label>
            <label class="calc-radio-container">
              <input type="radio" name="repayment" class="calc-real-radio">
              <span class="calc-custom-circle"></span>
              <span class="calc-radio-text">Անուիտետ</span>
            </label>
          </div>
        </div>

      </div>

      <div class="calc-bottom-bar">
        <p class="calc-info-note">Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ:</p>
        <button class="calc-execute-btn">Հաշվել</button>
      </div>

    </div>
  </div>
</section>
<section class="online-banking-section">
  <div class="banking-container">
    
    <div class="banking-visuals">
      <div class="laptop-box">
        <img src="./pc.png" alt="Evoca Online Laptop" class="laptop-img">
      </div>
      <div class="phone-box">
        <img src="./phone.png" alt="EvocaTOUCH Phone" class="phone-img">
      </div>
    </div>
    
    <div class="banking-content">
      <h2 class="banking-title">Օնլայն և մոբայլ բանկինգ</h2>
      <p class="banking-text">
        Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
      </p>
      
      <div class="banking-download-row">
        <div class="banking-qr-wrapper">
          <img src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" alt="QR Code" class="banking-qr-img">
        </div>
        
        <div class="app-stores-buttons">
          <span class="download-label">Ներբեռնել հավելվածները՝</span>
          <div class="buttons-flex">
            <a href="#" class="store-btn">
              <img src="https://www.logo.wine/a/logo/App_Store_(iOS)/App_Store_(iOS)-Badge-Logo.wine.svg" alt="App Store">
            </a>
            <a href="#" class="store-btn1">
              <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/google-play-badge-1-logo.png" alt="Google Play">
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
    <section class="partners-section">
  <div class="partners-container">
    
    <div class="partners-left-content">
      <h2 class="partners-main-title">Գործընկերներ</h2>
      <p class="partners-description-text">
        Դարձե՛ք Evocabank-ի Գործընկեր և եկե՛ք միասին գնանք դեպի գունեղ նոր իրականություն: Դառնալով Evoca ընտանիքի անդամ՝ Դուք մուտք կգործեք ժամանակակից և յուրահատուկ աշխարհ: Մենք մշտապես բաց ենք հետաքրքիր առաջարկների ու համագործակցությունների համար:
      </p>
      <a href="#" class="partners-all-btn">
        Բոլոր գործընկերները
        <span class="btn-arrow-icon">›</span>
      </a>
    </div>

    <div class="partners-right-slider">
      <div class="statue-hand-box">
        <img src="./hand.png" alt="Evoca Hand Statue" class="statue-hand-img">
      </div>     
    </div>
  </div>
</section>
<section class="news-section">
  <div class="news-main-container">
    
    <div class="news-section-header">
      <h2 class="news-section-title">Վերջին նորությունները</h2>
      <a href="#" class="news-all-link">
        Բոլոր նորությունները
        <span class="news-arrow-icon">›</span>
      </a>
    </div>

    <div class="news-cards-grid">
      
      <div class="news-single-card">
        <div class="news-image-wrapper">
          <img src="https://www.evoca.am/images-cache/news/1/17942090889803/439x320.png" alt="Evoca Bonds">
        </div>
        <div class="news-card-body">
          <span class="news-category tag-purple">Բանկային</span>
          <h3 class="news-card-title">Evocabank-ը թողարկել է պարտատոմսեր՝ դրամով, դոլարով ու...</h3>
          <span class="news-card-date">09.11.2026</span>
        </div>
      </div>

      <div class="news-single-card">
        <div class="news-image-wrapper">
          <img src="https://www.evoca.am/images-cache/news/1/17939507034916/439x320.png" alt="Toon Expo 2026">
        </div>
        <div class="news-card-body">
          <span class="news-category tag-yellow">Կենսակերպ</span>
          <h3 class="news-card-title">Evocabank-ը՝ TOON EXPO. INVEST 2026 Vol. 2-ին</h3>
          <span class="news-card-date">06.11.2026</span>
        </div>
      </div>

      <div class="news-single-card">
        <div class="news-image-wrapper">
          <img src="https://www.evoca.am/images-cache/news/1/17943953431384/439x320.png" alt="Evoca Conference 2026">
        </div>
        <div class="news-card-body">
          <span class="news-category tag-green">Կենսակերպ</span>
          <h3 class="news-card-title">Կայացավ Evoca Conference 2026-ը</h3>
          <span class="news-card-date">06.11.2026</span>
        </div>
      </div>

    </div>
  </div>
</section>
<section class="exchange-addresses-section">
  <div class="ex-addr-container">
    
    <div class="exchange-main-block">
      <p class="exchange-disclaimer">
        20,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արտարժույթի փոխարկման դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ և Բանկի կողմից որոշված փոխարժեքով: 100,000 դրամ կամ դրան համարժեք արտարժույթից ավելի փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ:
      </p>

      <div class="exchange-card-wrapper">
        <div class="exchange-tabs-row">
          <button class="ex-tab-btn active">Կանխիկ</button>
          <button class="ex-tab-btn">Անկանխիկ</button>
          <button class="ex-tab-btn">Ոսկու փոխարժեք</button>
          <button class="ex-tab-btn">Ռուբլու կանխիկ մուտք</button>
        </div>

        <div class="exchange-body-grid">
          <div class="rates-table-side">
            <div class="table-headers-row">
              <span class="th-col">Արժույթ</span>
              <span class="th-col text-center">Առք</span>
              <span class="th-col text-center">Վաճառք</span>
            </div>

            <div class="table-data-row">
              <div class="currency-cell">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/80/Flag_of_the_United_States_%281877%E2%80%931890%29.svg?utm_source=hy.wikipedia.org&utm_campaign=index&utm_content=original" alt="USD" class="flag-icon">
                <span>USD</span>
              </div>
              <span class="rate-cell down-trend">▼ 358</span>
              <span class="rate-cell up-trend">▲ 362</span>
            </div>

            <div class="table-data-row">
              <div class="currency-cell">
                <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/960px-Flag_of_Europe.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail" alt="EUR" class="flag-icon">
                <span>EUR</span>
              </div>
              <span class="rate-cell down-trend">▼ 393</span>
              <span class="rate-cell up-trend">▲ 404</span>
            </div>

            <div class="table-data-row">
              <div class="currency-cell">
                <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/960px-Flag_of_Russia.svg.png?utm_source=hy.wikipedia.org&utm_campaign=index&utm_content=thumbnail" alt="RUB" class="flag-icon">
                <span>RUB</span>
              </div>
              <span class="rate-cell down-trend">▼ 4.15</span>
              <span class="rate-cell up-trend">▲ 4.36</span>
            </div>

            <div class="table-sub-footer">
              <span class="time-stamp">Թարմացվել է՝ 14.11.26</span>
              <a href="#" class="all-currencies-link">Այլ արժույթներ</a>
            </div>
          </div>

          <div class="converter-box-side">
            <div class="converter-input-field">
              <span class="conv-label">Ունեմ</span>
              <div class="conv-select-row">
                <span class="conv-currency-selected">AMD</span>
                <span class="select-chevron">▼</span>
              </div>
            </div>

            <div class="converter-input-field">
              <span class="conv-label">Կստանամ</span>
              <div class="conv-select-row">
                <span class="conv-currency-selected">USD</span>
                <span class="select-chevron">▼</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="addresses-main-block">
      <h2 class="addr-section-title">Մեր հասցեները</h2>
      <p class="addr-section-subtitle">Բանկի հասցեները, աշխատաժամերը, բանկոմատները</p>

      <div class="map-artwork-box">
        <img src="https://www.evoca.am/img/addresses.png" alt="Yerevan Map" class="map-artwork-img">
      </div>

      <a href="#" class="view-map-btn">
        Դիտել քարտեզը
        <span class="btn-chevron">›</span>
      </a>
    </div>

  </div>
</section>
  
  <section class="last-last-section">
    <div class="img-container">
      <img src="./last-last.png" alt="IMG" class="last-last-img">
 
    </div>
  </section>
  <footer class="main-footer">
  <div class="footer-top-container">
    
    <div class="footer-brand-column">
      <img src="https://newmag.am/public/front/assets//images/pages/fest_summer/evoca.png" alt="Evocabank" class="footer-logo">
      <p class="footer-address">ք. Երևան, 0010,<br>Հանրապետության 44/2</p>
      <p class="footer-legal">
        Evocabank-ը վերահսկվում է<br><strong>Հայաստանի Հանրապետության<br>Կենտրոնական բանկի կողմից</strong>
      </p>
      <span class="footer-copyright">1990 - 2026 © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ</span>
    </div>

    <div class="footer-links-column">
      <h3>Բանկի մասին</h3>
      <a href="#">Մեր մասին</a>
      <a href="#">Ղեկավարություն</a>
      <a href="#">Բաժնետերեր</a>
      <a href="#">Հաշվետվություններ</a>
      <a href="#">Իրավական ակտեր</a>
      <a href="#">Սակագներ</a>
      <a href="#">Օտարվող գույք</a>
      <a href="#">Կառուցապատողներ</a>
      <a href="#">Գործընկեր ավտոսրահներ</a>
      <a href="#">Սակագների արխիվ</a>
    </div>

    <div class="footer-links-column">
      <h3>Օգտակար հղումներ</h3>
      <a href="#">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</a>
      <a href="#">Հաճախորդի ռեզիդենտության չափանիշներ</a>
      <a href="#">Կարգավորում</a>
      <a href="#">Գաղտնիության քաղաքականություն</a>
      <a href="#">Ֆին. հաշտարար</a>
      <a href="#">Ֆինանսական հանցագործությունների կանխարգելում</a>
      <a href="#">Հղումներ Բանկի պարտապանների համար</a>
    </div>

    <div class="footer-links-column">
      <h3>Այլ հղումներ</h3>
      <a href="#">EvocaONLINE</a>
      <a href="#">Պահատուփեր</a>
      <a href="#">Հաճախ տրվող հարցեր</a>
      <a href="#">Հայտարարություններ</a>
      <a href="#">Dibrary</a>
      <a href="#">Բուկլետներ</a>
      <a href="#">Հետադարձ կապ</a>
      <a href="#">Կայքի քարտեզ</a>
    </div>

    <div class="footer-contacts-column">
      <div class="footer-socials">
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/59/59439.png" alt="f"></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="i"></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/152/152810.png" alt="y"></a>
        <a href="#"><img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/585/small/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="in"></a>
      </div>
      
      <div class="footer-apps-flex">
        <img src="https://freepngimg.com/thumb/apple/58663-app-google-play-store-apple-download-hd-png.png" class="app-store-logo" alt="App Store">
      </div>

      <a href="#" class="footer-highlight-link">Բանկի հասցեները և աշխատաժամերը</a>
      
      <div class="footer-phone-block">
        <span class="phone-label">Կապ մեզ հետ</span>
        <a href="tel:+37410605555" class="phone-num">+374 10 605555</a>
        <a href="tel:8444" class="phone-short">8444</a>
      </div>
    </div>

  </div>

  <div class="footer-bottom-container">
    <div class="footer-disclaimer-text">
      Կայքում հայտերի, կապի ձևերի կամ տեղեկատվության ցանկացած մուտքագրում հանդիսանում է համաձայնություն, ինչպես նաև առանձին հարցումների կամ գրանցումների ոչ պարտադիր առաջարկ ստանալու վերաբերյալ: «Էվոկաբանկ» ՓԲԸ-ն պատասխանատվություն չի կրում իր կողմից չվերահսկվող կայքերում տեղադրված հղումների կամ այլ անձանց տեսակետների արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում մուտքագրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
    </div>
    <div class="footer-payment-logos">
      <img src="https://www.evoca.am/img/temp/partners/partner-1.png" alt="CBA">
      <img src="https://www.evoca.am/img/temp/partners/partner-2.png" alt="FSM">
      <img src="https://www.evoca.am/img/temp/partners/partner-6.png" alt="Visa">
      <img src="https://www.evoca.am/img/temp/partners/partner-3.png" alt="Mastercard">
      <img src="https://www.evoca.am/img/temp/partners/partner-5-new.png" alt="ArCa">
    </div>
  </div>
</footer>

  </div>
`



document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero-title");
  const heroText = document.querySelector(".hero-text");
  const heroImg = document.querySelector(".hero-img"); 
  const prevBtn = document.querySelector(".hero-arrow-prev");
  const nextBtn = document.querySelector(".hero-arrow-next");
  const heroDots = document.querySelectorAll(".hero-section .slider-dots .dot"); 

  const mainSlides = [
    {
      title: "Evoca պարտատոմսեր",
      text: "Evocabank-ը կթողարկի դրամով, դոլարով ու եվրոյով պարտատոմսեր՝ մինչև 10.5% եկամտաբերությամբ:",
      image: "https://www.evoca.am/images-cache/sliders/1/17942879801466/bbd0610200f229a4280f530a5a6de1dc-576x486.png"
    },
    {
      title: "Evoca Travel Card",
      text: "Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը",
      image: "https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png"
    },
    {
      title: "Հիփոթեքային վարկեր Evocabank-ում` ամենահարմար պայմաններով",
      text: "Ձե՛ռք բեր քո երազանքի բնակարանը` ցածր տոկոսադրույքով:",
      image: "https://www.evoca.am/images-cache/sliders/1/16178035964191/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg"
    }
  ];

  let currentMainSlide = 0;

  function showMainSlide(index) {
    if (!heroTitle || !heroText || !heroImg) return;
    heroTitle.textContent = mainSlides[index].title;
    heroText.textContent = mainSlides[index].text;
    heroImg.src = mainSlides[index].image;

    heroDots.forEach(dot => dot.classList.remove("active"));
    if (heroDots[index]) heroDots[index].classList.add("active");
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentMainSlide = (currentMainSlide - 1 + mainSlides.length) % mainSlides.length;
      showMainSlide(currentMainSlide);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentMainSlide = (currentMainSlide + 1) % mainSlides.length;
      showMainSlide(currentMainSlide);
    });
  }

  heroDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentMainSlide = i;
      showMainSlide(currentMainSlide);
    });
  });

  showMainSlide(currentMainSlide);

    const bioImages = [
    "https://www.evoca.am/img/temp/biometric/face1.png", // Աղջիկ
    "https://www.evoca.am/img/temp/biometric/face3.png",  // Տղա
    "https://www.evoca.am/img/temp/biometric/face2.png", // Աղջիկ
  ];
  let bioIdx = 0;
  const faceEl = document.getElementById("biometric-face");
  const meshEl = document.getElementById("biometric-mesh");

  if (faceEl) {
    setInterval(() => {
      if (meshEl) meshEl.style.opacity = "1";
      
      setTimeout(() => {
        faceEl.style.opacity = "0";
        
        setTimeout(() => {
          bioIdx = (bioIdx + 1) % bioImages.length;
          faceEl.src = bioImages[bioIdx];
          faceEl.style.opacity = "1";
          
          setTimeout(() => {
            if (meshEl) meshEl.style.opacity = "0";
          }, 300);
        }, 400);
      }, 1000);
    }, 2500);
  }
});

const cardWrapper = document.querySelector(".active-card-wrapper");

  if (cardWrapper) {
    cardWrapper.parentElement.style.perspective = "1000px";
    cardWrapper.style.transition = "transform 0.1s ease, filter 0.3s ease";
    cardWrapper.style.transformStyle = "preserve-3d";

    cardWrapper.addEventListener("mousemove", (e) => {
      const rect = cardWrapper.getBoundingClientRect();
      
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      
      const rotateX = (yc - y) / 10; 
      const rotateY = (x - xc) / 10;

      cardWrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    cardWrapper.addEventListener("mouseleave", () => {
      cardWrapper.style.transition = "transform 0.5s ease";
      cardWrapper.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });

    cardWrapper.addEventListener("mouseenter", () => {
      cardWrapper.style.transition = "transform 0.1s ease";
    });
  };

const calcGroups = document.querySelectorAll(".calc-item-group");
  const tabLinks = document.querySelectorAll(".calc-tab-link");
  const calcBtn = document.querySelector(".calc-execute-btn");

  calcGroups.forEach((group) => {
    const numInput = group.querySelector(".calc-numeric-display");
    const rangeInput = group.querySelector(".calc-range-input");

    if (numInput && rangeInput) {
      rangeInput.addEventListener("input", (e) => {
        let val = Number(e.target.value);
        numInput.value = val.toLocaleString();
      });

      numInput.addEventListener("input", (e) => {
        let val = Number(e.target.value.replace(/\s|,/g, ""));
        if (!isNaN(val)) {
          rangeInput.value = val;
        }
      });
    }
  });

  tabLinks.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabLinks.forEach((t) => tab.classList.remove("active"));
      tab.classList.add("active");
      
      const labelAmount = document.querySelectorAll(".calc-item-label")[0];
      if (labelAmount) {
        labelAmount.textContent = tab.textContent === "Վարկ" ? "Վարկի գումար" : "Ներդրվող գումար";
      }
    });
  });


  if (calcBtn) {
    calcBtn.addEventListener("click", () => {
      const inputs = document.querySelectorAll(".calc-numeric-display");
      if (inputs.length < 3) return;

      const amount = Number(inputs[0].value.replace(/\s|,/g, ""));
      const months = Number(inputs[1].value.replace(/\s|,/g, ""));
      const interest = Number(inputs[2].value.replace(/\s|,/g, ""));

      if (amount > 0 && months > 0 && interest > 0) {
        const monthlyRate = (interest / 100) / 12;
        const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
        
        alert(`Ամսական վճարի մոտավոր չափը՝ ${Math.round(monthlyPayment).toLocaleString()} ֏`);
      } else {
        alert("Խնդրում ենք մուտքագրել ճիշտ տվյալներ:");
      }
    });
  }
