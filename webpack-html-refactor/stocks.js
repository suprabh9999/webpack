import createCard from "./card";

const stocks = [
  {
    title: "Stock A",
    id: "stocks",
    imgUrl:
      "https://www.nasdaq.com/sites/acquia.prod/files/image/29525db076bcc42505a356e55dbe94f38b28530b_getty-stock-market-data.jpg?1784944493",
    content:
      'Stock is all of the shares into which ownership of a corporation is divided. In American English, the shares are collectively known as "stock". A single share of the stock represents fractional ownership of the corporation in proportion to the total number of shares',
  },
  {
    title: "Stock B",
    id: "stocks",
    imgUrl:
      "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/share_660x450_040121051604.jpg",
    content:
      'Stock is all of the shares into which ownership of a corporation is divided. In American English, the shares are collectively known as "stock". A single share of the stock represents fractional ownership of the corporation in proportion to the total number of shares',
  },
  {
    title: "Stock C",
    id: "stocks",
    imgUrl:
      "https://s.wsj.net/public/resources/images/IF-AD918A_TRANS_P_20190708163327.jpg",
    content:
      'Stock is all of the shares into which ownership of a corporation is divided. In American English, the shares are collectively known as "stock". A single share of the stock represents fractional ownership of the corporation in proportion to the total number of shares',
  },
  {
    title: "Stock D",
    id: "stocks",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuq7OCnji7QfzsExTsDZzzTWkcgpa9dapDLg&usqp=CAU",
    content:
      'Stock is all of the shares into which ownership of a corporation is divided. In American English, the shares are collectively known as "stock". A single share of the stock represents fractional ownership of the corporation in proportion to the total number of shares',
  },
];

function loadStocks() {
  const main = document.getElementById("main");
  main.innerHTML = "";
  for (let stock of stocks) {
    const card = createCard(stock);
    main.appendChild(card);
  }
}
export default loadStocks;
