const scrolldiv = document.querySelector(".bs-container")
const scrollength = scrolldiv.scrollWidth


window.addEventListener("load", () => {
  let i = 0
  while (i < scrollength) {
    setTimeout(scrolldiv.scrollTo(i, 0), 1000)
    console.log(i)
    i++;
  }
})