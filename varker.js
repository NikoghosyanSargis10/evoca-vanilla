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
      <a href="/qarter.html">Քարտեր</a>  
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

    
        <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Անգրավ սպառողական վարկ</h2>
          <p class="loan-card-desc">
            Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ. Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>

    
    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Ավտոմեքենայի ձեռքբերման նպատակով վարկ</h2>
          <p class="loan-card-desc">
            Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>

    
    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Գույքի գրավով ապահովված վարկ</h2>
          <p class="loan-card-desc">
            Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>
    

    
    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Արևային կայանների ձեռք բերման վարկ EvocaPOWER</h2>
          <p class="loan-card-desc">
            Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ. Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>

      
    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Ոսկու գրավով (լոմբարդային) վարկ</h2>
          <p class="loan-card-desc">
            Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>


    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Տեղում Ապառիկ</h2>
          <p class="loan-card-desc">
            Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>


    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Evoca աշխատավարձային փաթեթի շրջականակում տրամադրվող վարկ</h2>
          <p class="loan-card-desc">
            Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ. Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>


    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով</h2>
          <p class="loan-card-desc">
            Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>


    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Action</h2>
          <p class="loan-card-desc">
            Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>
    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին</h2>
          <p class="loan-card-desc">
            Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ. Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>


    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Հողամասի ձեռքբերման վարկ</h2>
          <p class="loan-card-desc">
            Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>


    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Միկրովերանորոգման վարկ Բանկի ռեսուրսներով</h2>
          <p class="loan-card-desc">
            Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>
    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ</h2>
          <p class="loan-card-desc">
            Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ. Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>


    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Վճարային քարտով օվերդրաֆտ (վարկային քարտ)</h2>
          <p class="loan-card-desc">
            Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>


    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Անհատական վարկ «Ներդրումային»</h2>
          <p class="loan-card-desc">
            Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>
    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Ավտոկայանատեղիի ձեռքբերման վարկ</h2>
          <p class="loan-card-desc">
            Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ. Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>


    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Հեծանիվի ձեռքբերման վարկ</h2>
          <p class="loan-card-desc">
            Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>


    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ</h2>
          <p class="loan-card-desc">
            Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>
    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/17198124761415/415x261.png" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Վերանորոգման վարկ EvocaHOME</h2>
          <p class="loan-card-desc">
            Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ. Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>


    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/1782886301331/415x261.jpg" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Դրամական միջոցների գրավով ապահովված անհատական վարկ</h2>
          <p class="loan-card-desc">
            Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>


    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/16142450609707/415x261.jpg" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Առևտրային հիփոթեքային վարկեր</h2>
          <p class="loan-card-desc">
            Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>
    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/16142450957048/415x261.jpg" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր</h2>
          <p class="loan-card-desc">
            Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ. Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>


    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/17265524369781/415x261.png" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">ԱՀԸ-ի ծրագրով կառուցապատման վարկեր</h2>
          <p class="loan-card-desc">
            Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>


    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/16142533830767/415x261.jpg" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">ԱՀԸ-ի ծրագրով վերանորոգման վարկեր</h2>
          <p class="loan-card-desc">
            Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>
    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/16142451699164/415x261.jpg" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»</h2>
          <p class="loan-card-desc">
            Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ. Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>


    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/16142652333164/415x261.jpg" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ</h2>
          <p class="loan-card-desc">
            Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>


    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Անգրավ սպառողական վարկ</h2>
          <p class="loan-card-desc">
            Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>
    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/17133596531389/415x261.png" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին</h2>
          <p class="loan-card-desc">
            Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ. Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>


    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/16142452651138/415x261.jpg" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ</h2>
          <p class="loan-card-desc">
            Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>


    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր</h2>
          <p class="loan-card-desc">
            Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>
    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Evolution</h2>
          <p class="loan-card-desc">
            Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ. Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
      </div>
    </section>


    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png" alt="Անգրավ սպառողական վարկ" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">Հիփոթեքային վարկեր Զինծառայողներին</h2>
          <p class="loan-card-desc">
            Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը։
          </p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">10 մլն. ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">60 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">19%-ից</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն </a>
        </div>
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
`
