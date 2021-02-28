import createCard from "./card";

const mutualFunds = [
  {
    title: "Large Cap",
    id: "mutualFunds",
    imgUrl:
      "https://images.hindustantimes.com/img/2021/01/13/550x309/Mutual_funds_screenshot_1610543082026_1610543095818.PNG",
    content:
      'A mutual fund is an open-end professionally managed investment fund that pools money from many investors to purchase securities. Mutual funds are "the largest proportion of equity of U.S. corporations." Mutual fund investors may be retail or institutional in nature.',
  },
  {
    title: "Mid Cap",
    id: "mutualFunds",
    imgUrl:
      "https://images.moneycontrol.com/static-mcnews/2018/02/Planning-to-invest-in-Mutual-Funds_cover-770x433.jpg",
    content:
      'A mutual fund is an open-end professionally managed investment fund that pools money from many investors to purchase securities. Mutual funds are "the largest proportion of equity of U.S. corporations." Mutual fund investors may be retail or institutional in nature.',
  },
  {
    title: "Small Cap",
    id: "mutualFunds",
    imgUrl:
      "https://images.cnbctv18.com/wp-content/uploads/2018/06/3_mutual_funds-768x432.jpg",
    content:
      'A mutual fund is an open-end professionally managed investment fund that pools money from many investors to purchase securities. Mutual funds are "the largest proportion of equity of U.S. corporations." Mutual fund investors may be retail or institutional in nature.',
  },
  {
    title: "Index Fund",
    id: "mutualFunds",
    imgUrl:
      "https://images.hindustantimes.com/img/2021/01/13/550x309/Mutual_funds_screenshot_1610543082026_1610543095818.PNG",
    content:
      'A mutual fund is an open-end professionally managed investment fund that pools money from many investors to purchase securities. Mutual funds are "the largest proportion of equity of U.S. corporations." Mutual fund investors may be retail or institutional in nature.',
  },
];

function loadMutualFunds() {
  const main = document.getElementById("main");
  main.innerHTML = "";
  for (let mutualFund of mutualFunds) {
    const card = createCard(mutualFund);
    main.appendChild(card);
  }
}

export default loadMutualFunds;
