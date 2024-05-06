// change the navbar style scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
})

// hide show
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle = ('open');

        // CHANGE ICON
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'bx bx-plus') {
            icon.className = "bx bx-minus";
        }
        else {
            icon.className = "bx bx-plus";
        }
    })
})
// show hide nav bar
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open_menu");
const closeBtn = document.querySelector("#close_menu");

menuBtn.addEventListener('click',() =>{
    menu.style.display ="flex";
    closeBtn.style.display ="inline-block";
    menuBtn.style.display = "none";
})
// close menu Btn
const closeNav = ()=>{
    menu.style.display ="none";
    closeBtn.style.display ="none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click',closeNav)
