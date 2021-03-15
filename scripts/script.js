const animationButton = document.querySelectorAll(".animation-button");
const image = document.createElement("img");

/* CLICK EVENT */

animationButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    createImageElement();
    const character = event.target.value;
    createCharacter(character);

    setTimeout(() => {
      image.remove();
    }, 5000);
  });
});

/* CREATE IMG */

const createImageElement = () => {
  document.querySelector("header").append(image);
  image.classList.add("character-animation");
};

/* CHARACTER */
const createCharacter = (character) => {
  image.src = `/img/${character}.png`;
  image.width = "200";
};
