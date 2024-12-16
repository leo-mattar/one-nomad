// --- GSAP
gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin);

gsap.config({
  nullTargetWarn: false,
  trialWarn: false,
});

let mm = gsap.matchMedia();

// --- GLOBAL - RELOAD AT THE TOP
window.addEventListener("beforeunload", function () {
  history.scrollRestoration = "manual";
});

// --- LENIS
window.lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// --- PAPER TIGET SIGNATURE
const pprtgr = [
  'color: #F2F3F3',
  'background: #080808',
  'font-size: 12px',
  'padding-left: 10px',
  'line-height: 2',
  'border-left: 5px solid #ff3c31',
].join(';');
console.info(`

%cWebsite by Paper Tiger${' '}
www.papertiger.com${'     '}

`, pprtgr);

// --- CURRENT YEAR
const currentYear = document.querySelector('[current-year]');
if (currentYear) {
  currentYear.innerHTML = new Date().getFullYear();
}

// --- SPLIT TEXT
let splitText;

function runSplit() {
  splitText = new SplitType("[split-txt]", {
    types: "words, chars",
  });
}

// --- GLOBAL - FADE
// function fade() {
//   const fadeElements = document.querySelectorAll("[fade]");

//   gsap.set(fadeElements, { opacity: 0 });

//   ScrollTrigger.batch(fadeElements, {
//     once: true,
//     start: "top 95%",
//     onEnter: (batch) =>
//       gsap.to(batch, {
//         opacity: 1,
//         duration: 2,
//         ease: "power3.out",
//         stagger: 0.2,
//       }),
//   });
// }

function fade() {
  const fadeElements = document.querySelectorAll("[fade]");

  gsap.set(fadeElements, { opacity: 0 });

  ScrollTrigger.batch(fadeElements, {
    once: true,
    start: (self) => self.trigger.getAttribute("data-start") || "top 95%",
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        stagger: 0.2,
      }),
  });
}

// --- EYEBROW ANIMATION
function eyebrowTypeAnimation() {
  const eyebrowElements = document.querySelectorAll("[eyebrow] .char");

  gsap.set(eyebrowElements, {
    autoAlpha: 0,
  });

  ScrollTrigger.batch(eyebrowElements, {
    once: true,
    start: "top 95%",
    onEnter: (batch) =>
      gsap.to(batch, {
        autoAlpha: 1,
        stagger: 0.02,
        duration: 1.6,
        ease: "power4.out",
        delay: 0.3,
      }),
  });
}

// --- THE BUILDING SLIDER
function sliderTheBuilding() {
  let eventsSlider = new Swiper(".swiper.the-building", {
    speed: 600,
    pagination: {
      el: ".swiper-pagination.reviews",
      clickable: true
    },
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-next.the-building',
      prevEl: '.swiper-prev.the-building',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      992: {
        slidesPerView: 1.38,
        spaceBetween: 32
      }
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
  });
}

// --- AMENITIES SLIDER
function sliderAmenities() {
  let eventsSlider = new Swiper(".swiper.amenities", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 600,
    loop: true,
    pagination: {
      el: ".swiper-pagination.reviews",
      clickable: true
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.swiper-next.amenities',
      prevEl: '.swiper-prev.amenities',
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
  });
}

// --- OFFICE SUITES SLIDER
function officesSlider() {
  let eventsSlider = new Swiper(".swiper.offices", {
    speed: 600,
    pagination: {
      el: ".swiper-pagination.reviews",
      clickable: true
    },
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-next.offices',
      prevEl: '.swiper-prev.offices',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      992: {
        slidesPerView: 1.38,
        spaceBetween: 32
      }
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
  });
}

// --- NEIGHBORHOOD SLIDER
function neighborhoodSlider() {
  let eventsSlider = new Swiper(".swiper.neighborhood", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 600,
    loop: true,
    pagination: {
      el: ".swiper-pagination.reviews",
      clickable: true
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.swiper-next.neighborhood',
      prevEl: '.swiper-prev.neighborhood',
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
  });
}

// --- HEADER/BACK TOP SCROLL VISIBILITY
function headerScrollVisibility() {
  let lastScrollTop = 0;

  window.addEventListener('scroll', function () {
    const header = document.querySelector(".c-header");
    const backTopLinks = document.querySelectorAll(".c-back-top");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      if (!header.classList.contains('not-visible')) {
        // Header
        header.classList.add('not-visible');
        gsap.to(header, { autoAlpha: 0, duration: 0.4, ease: "power2.inOut" });

        // Back top link
        backTopLinks.forEach(link => {
          gsap.to(link, { autoAlpha: 0, duration: 0.4, ease: "power2.inOut" });
        });
      }
    } else {
      if (header.classList.contains('not-visible')) {
        // Header
        header.classList.remove('not-visible');
        gsap.to(header, { autoAlpha: 1, duration: 0.4, ease: "power2.inOut" });

        // Back top link
        backTopLinks.forEach(link => {
          gsap.to(link, { autoAlpha: 1, duration: 0.4, ease: "power2.inOut" });
        });
      }
    }

    lastScrollTop = scrollTop;
  });
}

// --- PARALLAX
function parallax() {
  let parallaxEl = document.querySelectorAll("[parallax]");

  parallaxEl.forEach(item => {
    let parallaxY = parseFloat(item.getAttribute("data-parallax-y")) || 0;
    let screenWidth = window.innerWidth;

    if (item.getAttribute("parallax") !== "mobile-false" || screenWidth > 991) {
      let tl = gsap.timeline({
        defaults: { ease: "none" }
      });

      tl.to(item, {
        yPercent: parallaxY,
        scrollTrigger: {
          trigger: item,
          start: "clamp(top bottom)",
          end: "clamp(bottom top)",
          scrub: 1,
        }
      });
    }
  });
}

// --- RETURN TO TOP
function returnToTop() {
  const links = document.querySelectorAll(".c-back-top-item");
  const backTopLinks = document.querySelectorAll(".c-back-top");

  links.forEach(link => {
    link.addEventListener("click", function () {
      gsap.to("body", { opacity: 0, duration: 0.2 });

      setTimeout(() => {
        lenis.scrollTo("body", {
          top: 0,
          duration: 0.1,
          lock: true,
          onComplete: () => {
            gsap.to("body", { opacity: 1, duration: 0.2 });

            backTopLinks.forEach(link => {
              gsap.set(link, { opacity: 0 });
            });
          }
        });
      }, 300);
    });
  });

  // Nav logo
  const navLogo = document.querySelector(".c-logo-link");

  navLogo.addEventListener("click", function () {
    links[0].click();
  });
}

// --- RETURN TO TOP MOBILE
function returnToTopMobile() {
  const link = document.querySelector(".c-back-top-item");

  link.addEventListener("click", function () {
    if (window.scrollY === 0) {
      return;
    }

    gsap.to("body", { opacity: 0, duration: 0.2 });

    setTimeout(() => {
      lenis.scrollTo("body", {
        top: 0,
        duration: 0.1,
        lock: true,
        onComplete: () => {
          gsap.to("body", { opacity: 1, duration: 0.2 });
        }
      });
    }, 300);
  });

  // Load
  gsap.to(link, { opacity: 1, duration: 0.6, ease: "power3.out", delay: 2 });

  // Nav logo
  const navLogo = document.querySelector(".c-logo-link.mobile");

  navLogo.addEventListener("click", function () {
    link.click();
  });
}

// --- NAV SECTION LINKS
function navSectionLinks() {
  const links = document.querySelectorAll("[data-link]");
  const sections = document.querySelectorAll(".c-section");
  const header = document.querySelector(".c-header");
  const headerHeight = parseFloat(window.getComputedStyle(header).height);

  links.forEach(link => {
    const linkInfo = link.getAttribute("data-link");

    link.addEventListener("click", function () {
      setTimeout(() => {
        lenis.scrollTo(`.c-section[id=${linkInfo}]`, {
          duration: 1.2,
          offset: window.innerWidth <= 991 ? -headerHeight : 0
        });
      }, 10);
    });

  });
}

// --- SECTION DRAW PATH
function drawPath() {
  const paths = document.querySelectorAll(".c-draw-path path");

  if (paths.length === 0) return;

  const isDesktop = window.innerWidth >= 992;

  paths.forEach(path => {
    gsap.to(path, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: path,
        start: isDesktop ? "20% 80%" : "50% 80%",
        end: "bottom top",
        // scrub: true,
      },
      duration: 3,
      ease: "power3.out"
    });
  });
}

// --- HEADER MOBILE
function headerMobile() {
  let header = document.querySelector(".c-header");
  let headerBtn = document.querySelector(".c-nav-btn");
  let headerNav = document.querySelector(".c-header-nav");
  let menuLine1 = document.querySelectorAll(".c-nav-bar.is-1");
  let menuLine2 = document.querySelectorAll(".c-nav-bar.is-2");
  let menuLine3 = document.querySelectorAll(".c-nav-bar.is-3");

  let tl = gsap.timeline({ paused: true, defaults: { ease: "expo.inOut", duration: 1 } });

  gsap.set(menuLine1, { transformOrigin: "center center" });
  gsap.set(menuLine2, { transformOrigin: "center center" });
  gsap.set(menuLine3, { transformOrigin: "center center" });

  tl.to(headerNav, { clipPath: "inset(0% 0% 0% 0%)" });
  tl.to(menuLine1, { rotation: 45, y: 7 }, 0);
  tl.to(menuLine2, { width: 0 }, 0);
  tl.to(menuLine3, { rotation: -45, y: -7 }, 0);

  headerBtn.addEventListener("click", function () {
    header.classList.toggle("is-open");
    if (header.classList.contains("is-open")) {
      lenis.stop();
      tl.restart();
    } else {
      lenis.start();
      tl.reverse();
    }
  });

  // Links
  const links = document.querySelectorAll(".c-nav-link");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      lenis.start();
      headerBtn.click();
    });
  });
}

// --- LEGAL PAGES MODAL
function legalPagesModal() {
  const modals = document.querySelectorAll(".c-modal.legal");
  const links = document.querySelectorAll(".c-footer-link");
  const closeModalBtns = document.querySelectorAll(".c-modal-close-btn");

  links.forEach((link, index) => {
    link.addEventListener("click", () => {
      modals[index].classList.add("is-open");
    });
  });

  closeModalBtns.forEach(button => {
    button.addEventListener("click", function () {
      const modal = this.closest(".c-modal");
      modal.classList.remove("is-open");
    });
  });
}

// --- FLOOR PANELS
// function floorPanels() {
//   const items = document.querySelectorAll(".c-suite-item");
//   const panels = document.querySelectorAll(".c-panel");

//   // Append CMS list to panels and hide current floor item
//   const elementToAppend = document.querySelector(".c-panel-dd-list-cms");
//   panels.forEach(panel => {
//     const panelDD = panel.querySelector(".c-panel-dd");
//     if (panelDD) {
//       const clonedList = elementToAppend.cloneNode(true);
//       panelDD.appendChild(clonedList);

//       // Get the current floor number for this panel
//       const currentFloor = panel.querySelector(".c-panel-floor").textContent.trim();

//       // Find and hide the item corresponding to the current floor
//       const items = clonedList.querySelectorAll(".c-panel-dd-item");
//       items.forEach(item => {
//         const itemFloor = item.querySelector(".t-body-2").textContent.trim().split(" ")[1];
//         if (itemFloor === currentFloor) {
//           item.style.display = "none";
//         }
//       });
//     }
//   });

//   // Function to update the floor number display
//   function updateFloorDisplay(floorNum) {
//     document.querySelectorAll("[data-floor]").forEach(el => {
//       el.textContent = floorNum;
//     });
//   }

//   // Function to activate a panel and update floor
//   function activatePanel(panel) {
//     panels.forEach(p => p.classList.remove("is-active"));
//     panel.classList.add("is-active");
//     const floorNum = panel.querySelector(".c-panel-floor").textContent.trim();
//     updateFloorDisplay(floorNum);
//   }

//   // Dropdown functionality
//   panels.forEach(panel => {
//     const dropdown = panel.querySelector(".c-panel-dd");
//     const toggle = dropdown.querySelector(".c-panel-dd-toggle");
//     const list = dropdown.querySelector(".c-panel-dd-list");
//     const listItems = list.querySelectorAll(".c-panel-dd-item");

//     toggle.addEventListener("click", () => {
//       list.classList.toggle("is-open");
//     });

//     listItems.forEach(item => {
//       item.addEventListener("click", () => {
//         const selectedFloor = item
//           .querySelector(".t-body-2")
//           .textContent.trim();
//         const targetPanel = Array.from(panels).find(
//           p =>
//           p.querySelector(".c-panel-floor").textContent.trim() ===
//           selectedFloor.split(" ")[1]
//         );

//         if (targetPanel) {
//           activatePanel(targetPanel);
//           list.classList.remove("is-open");
//           // toggle.querySelector(".t-body-2").textContent = selectedFloor;

//           // Directly update the [data-floor] element
//           const floorNum = selectedFloor.split(" ")[1];
//           document.querySelectorAll("[data-floor]").forEach(el => {
//             el.textContent = floorNum;
//           });
//         }
//       });
//     });
//   });

//   // Suite item click functionality
//   items.forEach(item => {
//     const floorNum = item.querySelector("[floor-num]").textContent.trim();

//     item.addEventListener("click", function () {
//       const matchingPanel = Array.from(panels).find(panel => {
//         const panelFloor = panel
//           .querySelector(".c-panel-floor")
//           .textContent.trim();
//         return panelFloor === floorNum;
//       });

//       if (matchingPanel) {
//         activatePanel(matchingPanel);
//         lenis.stop();
//       }
//     });
//   });

//   // Close Panel
//   const closePanelButtons = document.querySelectorAll(".c-panel-close");
//   closePanelButtons.forEach(button => {
//     button.addEventListener("click", function () {
//       const panel = button.closest(".c-panel");
//       if (panel) {
//         panel.classList.remove("is-active");
//         lenis.start();
//       }
//     });
//   });

//   // Add functionality for next/previous arrows
//   document.querySelectorAll(".c-panel-suite-nav-arrow").forEach(arrow => {
//     arrow.addEventListener("click", function () {
//       const currentPanel = arrow.closest(".c-panel");
//       const panelsArray = Array.from(panels);
//       let newPanel;

//       if (arrow.classList.contains("prev")) {
//         const currentIndex = panelsArray.indexOf(currentPanel);
//         newPanel =
//           panelsArray[
//             (currentIndex - 1 + panelsArray.length) % panelsArray.length
//           ];
//       } else if (arrow.classList.contains("next")) {
//         const currentIndex = panelsArray.indexOf(currentPanel);
//         newPanel = panelsArray[(currentIndex + 1) % panelsArray.length];
//       }

//       if (newPanel) {
//         activatePanel(newPanel);
//       }
//     });
//   });

//   // Initial update
//   const initialActivePanel = document.querySelector(".c-panel.is-active");
//   if (initialActivePanel) {
//     const initialFloor = initialActivePanel
//       .querySelector(".c-panel-floor")
//       .textContent.trim();
//     updateFloorDisplay(initialFloor);
//   }

//   // Schedule tour link
//   // const scheduleLinks = document.querySelectorAll(".c-panel-cta-link");

//   // scheduleLinks.forEach(link => {
//   //   link.addEventListener("click", function (event) {
//   //     event.preventDefault();
//   //     lenis.start();
//   //     panels.forEach(panel => {
//   //       panel.classList.remove("is-active");
//   //     });

//   //     setTimeout(() => {
//   //       lenis.scrollTo(`.c-section[id=get-in-touch]`, {
//   //         duration: 1.2,
//   //         offset: window.innerWidth <= 991 ? -headerHeight : 0,
//   //       });
//   //     }, 10);
//   //   });
//   // });

//   // Hover effect
//   const buildingHoverDiv = document.querySelectorAll(".c-plant-hover");
//   const buildingItems = document.querySelectorAll(".c-suite-item");

//   buildingItems.forEach(building => {

//     const num = Number(building.querySelector("[floor-num]").textContent) - 1;

//     building.addEventListener("mouseenter", function () {
//       buildingHoverDiv[num].classList.add("is-active");
//     });

//     building.addEventListener("mouseleave", function () {
//       buildingHoverDiv[num].classList.remove("is-active");
//     });
//   });
// }

const homePage = document.querySelector("[data-page='home']");

// --- PAGE LOAD
function pageLoad() {

  const chars = document.querySelectorAll("[split-txt] .char");
  const videoWrap = document.querySelector(".c-video-contain.hm-hero");
  const video = document.querySelector(".c-video-contain.hm-hero video");
  const header = document.querySelector(".c-header");
  const bottomRow = document.querySelector(".o-row.hm-hero_bt");

  const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2, delay: 0.5 } });

  gsap.set(
    ".c-video-contain.hm-hero, .o-row.hm-hero_top, .o-row.hm-hero_bt, .c-header", { autoAlpha: 1 }
  );
  gsap.set(".o-row.hm-hero_top .t-display-2 .char", {
    autoAlpha: 0,
  });

  gsap.set(".c-line.hm-hero", {
    opacity: 1,
    scaleX: 0,
    transformOrigin: "top left",
  });

  // tl.fromTo(video, { scale: 2 }, { scale: 1 });

  tl.fromTo(videoWrap, {
    // clipPath: "inset(40% 32% 40% 32%)",
    opacity: 0,
    // rotation: -5
  },
  {
    // clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    // rotation: 0
  }, "<");

  // tl.to(video, { scale: 1 }, "<");
  tl.to(".o-row.hm-hero_top .t-display-2 .char", {
    autoAlpha: 1,
    stagger: 0.02,
    duration: 1.6
  }, "<0.1");

  // tl.from(bottomRow, { y: "2em", autoAlpha: 0 }, "<0.6");

  tl.from(".c-btn-wrap.hm-hero", { autoAlpha: 0 }, "<0.2");

  tl.from(".o-row.hm-hero_bt .t-body-1 .char", {
    autoAlpha: 0,
    stagger: 0.01,
    duration: 0.6
  }, "<");

  tl.to(".c-line.hm-hero", {
    scaleX: 1,
    duration: 2
  }, "<");

  tl.from(".o-row.hm-hero_bt .t-display-5 .char", {
      autoAlpha: 0,
      stagger: 0.01,
      duration: 1.2
    },
    "<-0.2");

  tl.from(header, { y: "-10em", autoAlpha: 0 }, "<-0.4");
}

// --- VERTICAL LINES
function drawVerticalLine() {
  // Draw line
  gsap.set("[draw-vertical-line]", {
    opacity: 1,
    scaleY: 0,
    transformOrigin: "top top",
    width: 2
  });

  ScrollTrigger.batch("[draw-vertical-line]", {
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        scaleY: 1,
        delay: 0.2,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
      }),
  });
}

// --- GLOBAL - LINE ANIMATION
function drawLine() {
  // Draw line
  gsap.set("[draw-line]", {
    opacity: 1,
    scaleX: 0,
    transformOrigin: "top left",
  });

  ScrollTrigger.batch("[draw-line]", {
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        scaleX: 1,
        delay: 0.1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        markers: true,
      }),
  });
}

// --- GLOBAL - STATS COUNTER
function statsCounter() {
  document.querySelectorAll("[counter]").forEach((element, index) => {
    let thisId = "countup" + index;
    element.setAttribute("id", thisId);
    let startNumber = 0;
    let endNumber = +element.getAttribute("final-number");
    let decimals = +element.getAttribute("decimals");
    let duration = element.getAttribute("count-duration");

    let myCounter = new CountUp(
      thisId,
      startNumber,
      endNumber,
      decimals,
      duration
    );

    ScrollTrigger.create({
      trigger: element,
      start: "top bottom",
      onEnter: () => {
        myCounter.start();
      },
    });
  });
}

// function mapDesktop() {
//   const mapImage = document.querySelector(".c-img-contain.map .c-img");

//   if (!mapImage) return;

//   mapImage.removeAttribute("data-lenis-prevent");
// }

// function mapMobile() {
//   const mapImage = document.querySelector(".c-img-contain.map .c-img");
//   mapImage.setAttribute("data-lenis-prevent", "");

//   // Zoom in/out
//   const zoomBtn = document.querySelector(".c-icon.map-zoom");
//   const mapWrap = document.querySelector(".c-img-contain.map");
//   zoomBtn.addEventListener("click", function () {
//     this.classList.toggle("is-zommed-in");
//     mapWrap.classList.toggle("is-zommed-in");
//   });

//   // Accordions
//   const accordions = document.querySelectorAll(".c-map-list");
//   let active = null;

//   if (accordions.length === 0) return;

//   accordions.forEach(accordion => {
//     const question = accordion.querySelector(".c-map-toggle");
//     const response = accordion.querySelector(".c-map-list-group");
//     const arrow = accordion.querySelector(".c-icon.map-plus");

//     const tl = gsap.timeline({
//       paused: true,
//       defaults: {
//         ease: "power2.inOut",
//         duration: 0.5
//       }
//     });

//     gsap.set(response, { opacity: 0 });

//     tl.to(response, { height: "auto", opacity: 1 });
//     tl.to(arrow, { rotation: 135 }, 0);

//     accordion.tl = tl;

//     question.addEventListener("click", function () {
//       if (active === accordion) {
//         tl.reverse();
//         active = null;
//       } else {
//         if (active) active.tl.reverse();
//         tl.play();
//         active = accordion;
//       }
//     });
//   });

// }

function customMap() {
  const mapWrap = document.querySelector(".c-map-mobile-wrap");
  const mapImage = document.querySelector(".c-map-mobile .c-img");

  // // Draggable Map
  const draggable = Draggable.create(mapImage, {
    inertia: true,
    bounds: mapWrap,
    edgeResistance: 1,
    onDrag: function () {
      const x = Math.round(this.x);
      const y = Math.round(this.y);

      // onDragEnd: function () {
      // Disable draggable functionality to allow scrolling out of the map
      // this.disable();
      // }

      // console.log(`Drag Progress - X: ${x}, Y: ${y}`);
    }
  });

  // Add touch event to re-enable draggable on map touch
  // mapImage.addEventListener('touchstart', function () {
  //   draggable[0].enable();
  // });

  window.moveMapTo = function (targetX, targetY) {
    if (draggable && draggable[0]) {
      moveMap(draggable[0].target, targetX, targetY);
    }
  };

  // Page Load
  moveMapTo(-56, 56);

  // Zoom feature
  const map = document.querySelector(".c-map-mobile");
  const zoomBtn = document.querySelector(".c-icon.map-zoom");

  zoomBtn.addEventListener("click", function () {
    this.classList.toggle("is-zoomed-in");
    if (this.classList.contains("is-zoomed-in")) {
      gsap.to(map, { scale: 1.8 });
      moveMapTo(-54, 96);
    } else {
      gsap.to(map, { scale: 1 });
      moveMapTo(-56, 56);
    }
  });

  // Accordions
  const accordions = document.querySelectorAll(".c-map-list");
  let active = null;

  if (accordions.length === 0) return;

  accordions.forEach(accordion => {
    const question = accordion.querySelector(".c-map-toggle");
    const response = accordion.querySelector(".c-map-list-group");
    const arrow = accordion.querySelector(".c-icon.map-plus");

    const tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: "power2.inOut",
        duration: 0.5
      }
    });

    gsap.set(response, { opacity: 0 });

    tl.to(response, { height: "auto", opacity: 1 });
    tl.to(arrow, { rotation: 135 }, 0);

    accordion.tl = tl;

    question.addEventListener("click", function () {
      if (active === accordion) {
        tl.reverse();
        active = null;
      } else {
        if (active) active.tl.reverse();
        tl.play();
        active = accordion;
      }
    });
  });
}

function moveMap(target, x, y) {
  gsap.to(target, {
    x: x,
    y: y,
    duration: 0.5
  });
}

window.customMap = customMap;

// --- MATTERPORT SECTION
function matterport() {
  const trigger = document.querySelector(".c-mp-dd-trigger");
  const ddList = document.querySelector(".c-mp-dd-list");
  const ddItems = document.querySelectorAll(".c-mp-dd-list-item");
  const mpItems = document.querySelectorAll(".c-mp-item");
  const sectionWrap = document.querySelector(".c-section.matterport");
  const ddArrow = document.querySelector(".c-icon.mp-dd-arrow");

  const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.inOut", duration: 0.6 } });

  tl.fromTo(ddList, { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)" });
  tl.to(ddArrow, { rotation: 180 }, 0);

  trigger.addEventListener("click", function () {
    ddList.classList.toggle("is-open");
    if (ddList.classList.contains("is-open")) {
      tl.restart();
    } else {
      tl.reverse();
    }
  });

  ddItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      trigger.click();

      mpItems.forEach(otherItems => otherItems.classList.remove("is-active"));
      mpItems[index].classList.add("is-active");

      // Scroll to section
      lenis.scrollTo(sectionWrap, {
        top: 0,
        duration: 0.4,
        lock: true,
      });
    });
  });

  // Close dropdown when clicked outside
  document.addEventListener("click", function (event) {
    if (!trigger.contains(event.target) && !ddList.contains(event.target)) {
      ddList.classList.remove("is-open");
      tl.reverse();
    }
  });

  // Page Load
  mpItems[0].classList.add("is-active");
}

// --- PLAY VIDEO IN LOW POWER MODE
function videoLowPowerMode() {
  document.body.addEventListener("click", handleVideoEvent);
  document.body.addEventListener("touchstart", handleVideoEvent);

  function handleVideoEvent() {
    const videoElement = document.querySelector(".video-hero");

    // Check if the video element exists and has a valid source
    if (videoElement && videoElement.src) {
      if (videoElement.paused) {
        videoElement.play().catch(function (error) {
          console.error("Error attempting to play video: ", error);
        });
      }
    } else {
      console.error("Video element is missing or has no valid source.");
    }
  }

  document.body.click();

}

// --- INIT
function init() {
  sliderAmenities();
  sliderTheBuilding();
  neighborhoodSlider();
  officesSlider();
  drawPath();
  navSectionLinks();
  legalPagesModal();
  matterport();
  runSplit();
  videoLowPowerMode();
  statsCounter();
  if (homePage) {
    pageLoad();
  }
}

init();

// --- MATCHMEDIA - DESKTOP
mm.add("(min-width: 992px)", () => {
  parallax();
  headerScrollVisibility();
  fade();
  eyebrowTypeAnimation();
  returnToTop();
  drawVerticalLine();
  drawLine();
  return () => {
    gsap.set(".c-header", { clearProps: "transform" });
  };
});

// --- MATCHMEDIA - TABLET AND MOBILE
mm.add("(max-width: 991px)", () => {
  headerMobile();
  returnToTopMobile();
  customMap();
  return () => {
    gsap.set(".c-header", { clearProps: "transform" });
  };
});

mm.add("(max-width: 767px)", () => {
  //
  return () => {
    //
  };
});
