import createCard from "./card";

const items = [
  {
    title: "Stock",
    id: "stocks",
    actionText: "Explore Stocks",
    imgUrl:
      "https://s.wsj.net/public/resources/images/IF-AD918A_TRANS_P_20190708163327.jpg",
    content:
      'Stock is all of the shares into which ownership of a corporation is divided. In American English, the shares are collectively known as "stock". A single share of the stock represents fractional ownership of the corporation in proportion to the total number of shares',
  },
  {
    title: "Mutual Fund",
    id: "mutualFunds",
    actionText: "Explore Mutual Funds",
    imgUrl:
      "https://www.mymoneysage.in/blog/wp-content/uploads/2017/01/MF-1.png",
    content:
      'A mutual fund is an open-end professionally managed investment fund that pools money from many investors to purchase securities. Mutual funds are "the largest proportion of equity of U.S. corporations." Mutual fund investors may be retail or institutional in nature.',
  },
  {
    title: "Real Estate",
    id: "realEstate",
    actionText: "Explore Real Estate",
    imgUrl:
      "https://blog.hubspot.com/hubfs/Sales_Blog/real-estate-business-compressor.jpg",
    content:
      "Real estate is property consisting of land and the buildings on it, along with its natural resources such as crops, minerals or water; immovable property of this nature; an interest vested in this an item of real property, buildings or housing in general.",
  },
];
function loadHome() {
  const main = document.getElementById("main");
  main.innerHTML = "";
  for (let item of items) {
    const card = createCard(item);
    main.appendChild(card);
  }
}

export default loadHome;
