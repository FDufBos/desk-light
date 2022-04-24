//when user scrolls down the page
//add a class to make the header white

const headerTag = document.querySelector("header")

const toggleHeader = () => {
  const pixels = window.pageYOffset

  if (pixels>90) {
    headerTag.classList.add("bg-white")
    headerTag.classList.add("h-10")
  } else {
    headerTag.classList.remove("bg-white")
    headerTag.classList.remove("h-10")
  }
}

toggleHeader()

document.addEventListener("scroll", () =>{
  toggleHeader()
})

//move eyes by affecting transform
const irisLeft = document.querySelector("div.iris-left")
const irisRight = document.querySelector("div.iris-right")

const moveEye = (tag, mouseX, mouseY) => {
  
}