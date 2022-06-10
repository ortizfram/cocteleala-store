const wrapper = document.querySelector(".slider-wrapper");
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});



const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex"
})

close.addEventListener("click", () => {
    payment.style.display = "none"
})
