const header = document.querySelector("header")

window.addEventListener("scroll", () => {
    header.classList.toggle("scroll", window.scrollY > 0)
    nav.classList.remove("active")
    menu.classList.remove("active")
})
let nav = document.querySelector("nav")
let menu = document.querySelector(".menu")

menu.onclick = () => {
    menu.classList.toggle("active")
    nav.classList.toggle("active")
}




const sr = ScrollReveal({
    distance: "30px",
    duration: 2600,
    reset: true
})

sr.reveal(".text", { delay: 280, origin: "bottom" })
sr.reveal(".trending ,.cta, .featured, .brands, footer", { delay: 200, origin: "bottom" })