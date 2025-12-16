const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const loveSticker = document.getElementById("loveSticker");

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
  const container = document.querySelector(".buttons");
  const maxX = container.offsetWidth - noBtn.offsetWidth;
  const maxY = container.offsetHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

yesBtn.addEventListener("click", () => {
  loveSticker.classList.remove("hidden");
  document.querySelector(".buttons").style.display = "none";
});
