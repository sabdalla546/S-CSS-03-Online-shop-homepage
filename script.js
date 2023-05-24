const signIn = document.getElementById("sing-in");
const lang = document.getElementById("lang");
const usd = document.getElementById("usd");
const category = document.getElementById("category");
const pagesMenu = document.getElementById('pages-menu');
const barsMobile = document.getElementById("bars-mobile");
const slides = document.querySelectorAll(".slide");
console.log(slides);
const sliderBtn = document.querySelectorAll(".navegation .btn");
console.log(sliderBtn);
let currentSlide = 1;

signIn.addEventListener("click", () => {
    document.getElementById("sign-in-menu").classList.toggle('show');
});
lang.addEventListener("click", () => {
    document.getElementById("lang-menu").classList.toggle('show');
});
usd.addEventListener("click", () => {
    document.getElementById("usd-menu").classList.toggle('show');
});
category.addEventListener("click", () => {
    document.getElementById("cate-option").classList.toggle('show');
});
pagesMenu.addEventListener("click", () => {
    document.getElementById("page-option").classList.toggle('show');
});
barsMobile.addEventListener("click", () => {
    document.getElementById("mobile-nav-list").classList.toggle('show');
});


var manual = function (index) {
    slides.forEach((item) => {
        item.classList.remove("active-slide")
    })
    sliderBtn.forEach((item) => {
        item.classList.remove("active-slide")
    })
    slides[index].classList.add('active-slide')
    sliderBtn[index].classList.add("active-slide")
}
sliderBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manual(i);
        currentSlide = i;
    })
})