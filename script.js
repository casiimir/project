const cardGenerator = (obj) => {
  const cardWrapperEl = document.createElement("div");
  const cardImgEl = document.createElement("img");
  const cardTitleEl = document.createElement("h2");
  const cardParEl = document.createElement("p");

  cardWrapperEl.className = "cardWrapper";
  cardImgEl.setAttribute("src", "./img/" + obj.img);
  cardImgEl.setAttribute("alt", obj.altImg);
  cardTitleEl.textContent = obj.title;
  cardParEl.textContent = obj.p;

  cardWrapperEl.append(cardImgEl, cardTitleEl, cardParEl);
  return document.body.append(cardWrapperEl);
};

const cardsObjs = [
  {
    title: "Uccellino",
    img: "./bird.png",
    p: "Il suo canto è magnifico",
    altImg: "Img di un uccellino",
  },
  {
    title: "Gattino",
    img: "cat.png",
    p: "Affettuoso quanto estroverso",
    altImg: "Img di un gattino",
  },
  {
    title: "Cagnolino",
    img: "dog.png",
    p: "Da sempre, il miglior amico dell'uomo",
    altImg: "Img di un cagnolino",
  },
  {
    title: "Coccinella",
    img: "ladybug.png",
    p: "Il più bel portafortuna del mondo",
    altImg: "Img di una coccinella",
  },
];

for (let i = 0; i <= cardsObjs.length - 1; i++) {
  cardGenerator(cardsObjs[i]);
}
