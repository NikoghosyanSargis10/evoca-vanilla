import './varker.css'

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
      <a href="/index.html">
        <img class="logo-for-evoca" src="https://newmag.am/public/front/assets//images/pages/fest_summer/evoca.png" alt="Evocabank Logo">
      </a>
      <a class="varker" href="/varker.html">Վարկեր</a>  
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
       <div class="sub-header">
      <a href="#" class="sub-link active">Վարկեր</a>
      <a href="#" class="sub-link">Վարկային պատմություն և սքոր</a>
      <a href="#" class="sub-link">Կարևոր տեղեկատվություն</a>
    </div>

    <div class="breadcrumb-container">
      <a class="breadcrumb-home">
        <img src="https://img.icons8.com/fluent-systems-regular/1200/home.jpg" alt="Home" class="home-icon">
      </a>
      <span class="breadcrumb-sep">></span>
      <a class="breadcrumb-item">Անհատ</a>
      <span class="breadcrumb-sep">></span>
      <a class="breadcrumb-item">Վարկեր</a>
      <span class="breadcrumb-sep">></span>
      <span class="breadcrumb-item">Վարկեր</span>
    </div>
  </div>
      <section class="varker-header-section">
      <h1 class="varker-page-title">Վարկեր</h1>
      
      <div class="varker-filters">
        <button class="filter-btn active">Բոլորը</button>
        <button class="filter-btn">Գրավով ապահովված սպառողական վարկեր</button>
        <button class="filter-btn">Անգրավ սպառողական վարկեր</button>
        <button class="filter-btn">Հիփոթեքային վարկեր</button>
        <button class="filter-btn">Ավտոմեքենաների ձեռքբերման ֆինանսավորում</button>
        <button class="filter-btn">Ապառիկ</button>
        <button class="filter-btn">Օնլայն վարկեր</button>
      </div>
    </section>

`
