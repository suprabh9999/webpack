const realEstates = [
  {
    title: "Commercial Space",
    id: "realEstate",
    imgUrl:
      "https://bimsmithstorage.blob.core.windows.net/news-content/2020723_b_office-building-designs-architectures-ideas_office-decoration.jpg",
    content:
      "Real estate is property consisting of land and the buildings on it, along with its natural resources such as crops, minerals or water; immovable property of this nature; an interest vested in this an item of real property, buildings or housing in general.",
  },
  {
    title: "Residential Estate",
    id: "realEstate",
    imgUrl:
      "https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=6&m=1026205392&s=612x612&w=0&h=pe0Pqbm7GKHl7cmEjf9Drc7Fp-JwJ6aTywsGfm5eQm4=",
    content:
      "Real estate is property consisting of land and the buildings on it, along with its natural resources such as crops, minerals or water; immovable property of this nature; an interest vested in this an item of real property, buildings or housing in general.",
  },
  {
    title: "Multistorey Space",
    id: "realEstate",
    imgUrl:
      "https://www.bermad.com.au/wp-content/uploads/2016/11/high-rise-1272x716.jpg",
    content:
      "Real estate is property consisting of land and the buildings on it, along with its natural resources such as crops, minerals or water; immovable property of this nature; an interest vested in this an item of real property, buildings or housing in general.",
  },
  {
    title: "Tech Park",
    id: "realEstate",
    imgUrl:
      "https://www.cbre.co.in/resources/fileassets/IN-SMPL-14177/4799433d/7a418437-5cce-431e-a385-4498a9bcad69_watermark_Photo_1_large.jpg",
    content:
      "Real estate is property consisting of land and the buildings on it, along with its natural resources such as crops, minerals or water; immovable property of this nature; an interest vested in this an item of real property, buildings or housing in general.",
  },
];

function loadRealEstate() {
  const main = document.getElementById("main");
  main.innerHTML = "";
  for (let property of realEstates) {
    const card = createCard(property);
    main.appendChild(card);
  }
}
