var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




// number counting  

let valueDisplays = document.querySelectorAll('.num');
let interval = 5000;

console.log(valueDisplays);

valueDisplays.forEach((valueDisplays) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplays.getAttribute('data-val'));
  let duration = Math.floor (interval / endValue);
  let counter = setInterval(function(){
    startValue += 1
    valueDisplays.textContent=startValue
    if (startValue == endValue){
      clearInterval(counter)
    }
  });
});