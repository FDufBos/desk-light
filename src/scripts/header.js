//when user scrolls down the page
//add a class to make the header white

const headerTag = document.querySelector("header");

const toggleHeader = () => {
  const pixels = window.pageYOffset;

  if (pixels > 90) {
    headerTag.classList.add("bg-white");
    headerTag.classList.add("h-10");
  } else {
    headerTag.classList.remove("bg-white");
    headerTag.classList.remove("h-10");
  }
};

toggleHeader();

document.addEventListener("scroll", () => {
  toggleHeader();
});

//move eyes by affecting transform on MouseMove

const irisLeft = document.querySelector("div.iris-left");
const irisRight = document.querySelector("div.iris-right");

const moveEye = (tag, mouseX, mouseY) => {
  //find center of eye
  const eyeMidX = tag.getBoundingClientRect().left;
  const eyeMidY = tag.getBoundingClientRect().top;

  //find difference between eye and mouse
  const diffX = mouseX - eyeMidX;
  const diffY = mouseY - eyeMidY - window.pageYOffset

  //work out how long the difference is currently
  //pythag theorem
  const diff = Math.sqrt(diffX * diffX + diffY * diffY);

  //what is capped radius?
  const radius = Math.min(5,diff)

  //angle between diffX and diffY
  //tan in math
  const angle = Math.atan2(diffY, diffX);

  //get the capped version of this, based on angle
  const cappedX = radius * Math.cos(angle);
  const cappedY = radius * Math.sin(angle);

  const eyeTag = tag.querySelector("img");

  eyeTag.style.left = cappedX + "px";
  // eyeTag.style.top = cappedY + "px";
};

//set eye position
let interval = null
//move eyes every 3 seconds
const startInterval = () => {
  //clear interval
  clearInterval(interval)
  interval = setInterval(() => {
    const x = Math.random() * window.innerWidth
    const y = Math.random() * window.innerHeight

    moveEye(irisLeft, x, y)
    moveEye(irisRight, x, y)
  }, 5000)
}

document.addEventListener("mousemove", (event) => {
  startInterval()
  moveEye(irisLeft, event.pageX, event.pageY);
  moveEye(irisRight, event.pageX, event.pageY);
});

