const follower = document.getElementById("handWoman");
const image = follower.querySelector("img");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  follower.style.left = `${x}px`;
  follower.style.top = `${y}px`;
});
const gameAssets = document.getElementById("gameAssets");
const letter1Off = document.getElementById("letter_1_off");
const letter1On = document.getElementById("letter_1_on");
const bgWord1 = document.getElementById("bg_word_1");
const line1 = document.getElementById("line_1_4");

const letter4Off = document.getElementById("letter_4_off");
const letter4On = document.getElementById("letter_4_on");
const bgWord2 = document.getElementById("bg_word_2");
const line2 = document.getElementById("line_2_4");

const letter2Off = document.getElementById("letter_2_off");
const letter2On = document.getElementById("letter_2_on");
const bgWord3 = document.getElementById("bg_word_3");
const line3 = document.getElementById("line_2_5");

const letter5Off = document.getElementById("letter_5_off");
const letter5On = document.getElementById("letter_5_on");
const bgWord4 = document.getElementById("bg_word_4");
const line4 = document.getElementById("line_3_5");

const letter3Off = document.getElementById("letter_3_off");
const letter3On = document.getElementById("letter_3_on");
const bgWord5 = document.getElementById("bg_word_5");

const wordingCard = document.getElementById("wording_card");
// const endingContainer = document.getElementById("ending-container");

letter1Off.addEventListener("click", () => {
  letter1Off.style.display = "none";
  letter1On.style.display = "block";
  bgWord1.style.display = "block";

  if (letter1On.style.display === "block") {
    letter4Off.addEventListener("click", () => {
      letter4Off.style.display = "none";
      letter4On.style.display = "block";
      line1.style.display = "block";
      bgWord1.style.display = "none";
      bgWord2.style.display = "block";

      if (letter4On.style.display === "block") {
        letter2Off.addEventListener("click", () => {
          letter2Off.style.display = "none";
          letter2On.style.display = "block";
          line2.style.display = "block";
          bgWord2.style.display = "none";
          bgWord3.style.display = "block";

          if (letter2On.style.display === "block") {
            letter5Off.addEventListener("click", () => {
              letter5Off.style.display = "none";
              letter5On.style.display = "block";
              line3.style.display = "block";
              bgWord3.style.display = "none";
              bgWord4.style.display = "block";

              if (letter5On.style.display === "block") {
                letter3Off.addEventListener("click", () => {
                  letter3Off.style.display = "none";
                  letter3On.style.display = "block";
                  wordingCard.style.display = "block";
                  line4.style.display = "block";
                  bgWord4.style.display = "none";
                  bgWord5.style.display = "block";
                  gameAssets.classList.add("hide");
                  // endingContainer.style.display = "block";

                  setTimeout(function () {
                    window.location.href = "./rewards.html";
                  }, 2500);
                });
              }
            });
          }
        });
      }
    });
  }
});
