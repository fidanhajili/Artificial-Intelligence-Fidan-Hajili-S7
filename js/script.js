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

  for(let i=0; i<5; i++) {
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

  new Accordion('.accordion-left');
  new Accordion('.accordion-right');
   

  //  1732613dfee39517c51bc4fbbdf6e53f
// https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY

  window.addEventListener("DOMContentLoaded", getFilmleriGetir)
  async function getFilmleriGetir() {
const url = "https://api.themoviedb.org/3/movie/popular?api_key=1732613dfee39517c51bc4fbbdf6e53f"
const filmlerDivi = document.querySelector("#filmler-divi")

try {
 const cavab = await fetch(url)
 const gelenFilmler = await cavab.json()
 for(let i=0; i<gelenFilmler.results.length; i++) {
  filmlerDivi.innerHTML += `   <div class="col-12 col-md-6 col-lg-3">
        <div class="card my-4 mx-2 p-4"
          <div class="card-body">
            <h5 class="card-title">${gelenFilmler.results[i].title}</h5>
            <small> ${gelenFilmler.results[i].original_language} </small>
            <p class="card-text my-4">${gelenFilmler.results[i].overview.slice(0,80)}...</p>
            <a href="#" class="btn btn-primary">Link</a>
          </div>
        </div>`
 }

}


catch(err) {

}
  }


