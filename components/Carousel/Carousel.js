/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component,
       you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in
       and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
let slideIndex = 0;

const Carousel = () => {
  const carousel = document.createElement("div");
  carousel.classList.add("carousel");

  const images = [
    "./assets/carousel/mountains.jpeg",
    "./assets/carousel/computer.jpeg",
    "./assets/carousel/trees.jpeg",
    "./assets/carousel/turntable.jpeg"
  ];

  const imgElements = images.map(image => {
    const img = document.createElement("img");
    img.src = image;
    return img;
  });

  const leftButton = document.createElement("div");
  const rightButton = document.createElement("div");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  leftButton.addEventListener("click", () => {
    if (slideIndex > 0) {
      slideIndex--;
    } else {
      slideIndex = images.length - 1;
    }
    showImage("left");
  });

  rightButton.addEventListener("click", () => {
    if (slideIndex < images.length - 1) {
      slideIndex++;
    } else {
      slideIndex = 0;
    }
    showImage("right");
  });

  carousel.appendChild(leftButton);
  imgElements.forEach(element => carousel.appendChild(element));
  carousel.appendChild(rightButton);

  return carousel;
};

const showImage = direction => {
  const carousel = document.querySelectorAll(".carousel img");
  carousel.forEach(img => {
    img.style.display = "none";
    // img.style.transition = `${direction} 1s`;
  });
  carousel[slideIndex].style.display = "inherit";
};

document.querySelector(".carousel-container").appendChild(Carousel());
showImage();
