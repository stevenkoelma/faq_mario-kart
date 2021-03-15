const animationButton = document.querySelectorAll(".animation-button");
const image = document.createElement("img");

/* CLICK EVENT */

animationButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    createImageElement();

    if (event.target.value === "luigi") {
      createLuigi();
    }

    if (event.target.value === "bowser") {
      createBowser();
    }

    if (event.target.value === "yoshi") {
      createYoshi();
    }

    if (event.target.value === "donkeykong") {
      createDonkeyKong();
    }
    setTimeout(() => {
      image.remove();
    }, 4000);
  });
});

/* CREATE IMG */

const createImageElement = () => {
  document.querySelector("header").append(image);
  image.classList.add("character-animation");
};

/* CHARACTERS */
const createLuigi = () => {
  image.src = "/img/luigi.png";
  image.width = "200";
};

const createBowser = () => {
  image.src = "/img/bowser.png";
  image.width = "200";
};

const createYoshi = () => {
  image.src = "/img/yoshi.png";
  image.width = "200";
};

const createDonkeyKong = () => {
  image.src = "/img/donkeykong.png";
  image.width = "200";
};

