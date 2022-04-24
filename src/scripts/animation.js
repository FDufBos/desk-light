const glowImgTag = document.querySelector("#glow-img")
const animatedTags = document.querySelectorAll("h2, h3, p, section.img, a.button")

const fadeBox = () => {
  const pixels = window.pageYOffset
  const alpha = Math.min(pixels / 3000, 0.6)
  glowImgTag.style.boxShadow = `0 0 200px 10px rgba(225,180,109,${alpha})`
}
fadeBox()

document.addEventListener("scroll", ()=>{
  fadeBox()
})


//fade out on load
animatedTags.forEach(
  tag => (
    tag.style.opacity = 0
  )
)

const fadeIn = () => {
  //look through all the animated tags and see
  //with the getBoundingClientRect if it's in the window
  let delay = 0.25

  animatedTags.forEach(tag=> {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom
    if (tagTop < window.innerHeight && tagBottom > 0 ) {
      tag.style.animation = `fadeIn 1s ${delay}s both`
      delay += 0.25
    } else {
      tag.style.opacity = 0
      tag.style.animation = ""
    }
  })
}

fadeIn()

document.addEventListener("scroll", () => {
  fadeIn()
})

window.addEventListener("resize", () => {
  fadeIn()
})