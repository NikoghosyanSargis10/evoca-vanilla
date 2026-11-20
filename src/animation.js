import "./style.css";

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
