const imgSlider = document.querySelector('.imgSlider');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let indexSlider = 0;

nextBtn.addEventListener('click', () => {
  indexSlider++;
  imgSlider.style.transform = `rotate(${indexSlider * -90}deg)`;
});

prevBtn.addEventListener('click', () => {
    indexSlider--;
    imgSlider.style.transform = `rotate(${indexSlider * -90}deg)`;
  });