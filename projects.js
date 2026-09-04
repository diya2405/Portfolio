document.addEventListener("DOMContentLoaded", function () {

  const track = document.getElementById("carouselTrack");
  const cards = document.querySelectorAll(".card");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (!track || cards.length === 0) return;

  let angle = 0;
  let autoRotate;
  const radius = 450;
  const total = cards.length;
  const theta = 360 / total;

  /* ===============================
     POSITION CARDS IN 3D CIRCLE
  =================================*/
  function positionCards() {
    cards.forEach((card, i) => {
      const cardAngle = theta * i;

      card.style.transform =
        `rotateY(${cardAngle}deg) translateZ(${radius}px)`;

      card.style.transition = "transform 0.8s ease";
    });
  }

  /* ===============================
     ROTATE CAROUSEL
  =================================*/
  function rotateCarousel(direction) {
    angle += direction * theta;
    track.style.transform = `rotateY(${angle}deg)`;
    updateActiveCard();
  }

  /* ===============================
     CENTER HIGHLIGHT
  =================================*/
  function updateActiveCard() {
    cards.forEach(card => card.classList.remove("active"));

    let activeIndex =
      Math.round((-angle % 360) / theta);

    activeIndex = (activeIndex + total) % total;

    cards[activeIndex].classList.add("active");
  }

  /* ===============================
     AUTO ROTATE
  =================================*/
  function startAutoRotate() {
    autoRotate = setInterval(() => {
      rotateCarousel(-1);
    }, 4000);
  }

  function stopAutoRotate() {
    clearInterval(autoRotate);
  }

  /* ===============================
     DRAG ROTATION
  =================================*/
  let isDragging = false;
  let startX;

  track.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    stopAutoRotate();
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
    startAutoRotate();
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const diff = e.clientX - startX;
    angle += diff * 0.3;
    track.style.transform = `rotateY(${angle}deg)`;
    startX = e.clientX;
    updateActiveCard();
  });

  /* ===============================
     BUTTON CONTROLS
  =================================*/
  if (prevBtn) {
    prevBtn.onclick = () => rotateCarousel(1);
  }

  if (nextBtn) {
    nextBtn.onclick = () => rotateCarousel(-1);
  }

  /* ===============================
     CLICK NAVIGATION
  =================================*/
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const link = card.getAttribute("data-link");
      if (link) window.location.href = link;
    });
  });

  /* ===============================
     HOVER PAUSE
  =================================*/
  track.addEventListener("mouseenter", stopAutoRotate);
  track.addEventListener("mouseleave", startAutoRotate);

  /* ===============================
     INIT
  =================================*/
  positionCards();
  updateActiveCard();
  startAutoRotate();

});
