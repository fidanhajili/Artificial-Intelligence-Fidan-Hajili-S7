const hamburgerMenuBtn = document.querySelector(".navbar-toggler-icon")
const baglamaIconu = document.querySelector(".fa-xmark")
const watchVideoBtn = document.getElementsByClassName("watch-video")[0]



hamburgerMenuBtn.addEventListener('click', function () {
    document.querySelector(".mobile-menu").classList.add("aktiv")
})
baglamaIconu.addEventListener('click', function () {
    document.querySelector(".mobile-menu").classList.remove("aktiv")
})
watchVideoBtn.addEventListener('click', function () {
    document.querySelector(".watch-video-modal").classList.add("aktiv")
})
document.querySelector(".fa-circle-xmark").addEventListener("click", function() {
    document.querySelector(".watch-video-modal").classList.remove("aktiv")
}) 


const swiper = new Swiper(".shirketlers", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
      } , 
        breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }
  })





  const bloglarinYerlesheceyiYer = document.querySelector(".bloglargelecekyer")

  for(let i=0; i<10; i++) {
      bloglarinYerlesheceyiYer.innerHTML += `<div class="blog">
    <span>16April</span>
    <h4>Design tips for designer, that cover everything you need</h4>
  <a href="">Read the article</a>
  </div>`
  }



const slide = new Swiper(".cardsswipper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  })
   