import { handleNavigation } from "./main";

function createCard(item) {
  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card");
  cardWrapper.style.width = "350px";
  cardWrapper.style.margin = "0 5px";
  cardWrapper.style.border = "1px solid grey";
  const img = document.createElement("img");
  img.src = item.imgUrl;
  img.alt = "Card Image";
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  const cardTitle = document.createElement("h4");
  cardTitle.innerText = item.title;
  cardTitle.classList.add("card-title");
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerText = item.content;
  cardWrapper.appendChild(img);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  if (item.actionText) {
    const cardAction = document.createElement("a");
    cardAction.innerText = item.actionText;
    cardAction.href = "#";
    cardAction.addEventListener("click", () => handleNavigation(item.id));
    cardAction.classList.add("btn", "btn-primary");
    cardBody.appendChild(cardAction);
  }
  cardWrapper.appendChild(cardBody);
  return cardWrapper;
}

export default createCard;
