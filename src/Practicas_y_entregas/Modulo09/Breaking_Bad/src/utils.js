const createCharacterRow = (character) => {
  const element = document.createElement("div");
  const avatar = createAvatar(character);
  element.appendChild(avatar);
  const link = createRowText(character);
  element.appendChild(link);
  element.className = "character-row";
  return element;
};

const createAvatar = (character) => {
  const element = document.createElement("img");
  element.width = 150;
  element.className = "thumbnail";
  element.src = character.img;
  return element;
};

const createRowText = (character) => {
  const element = document.createElement("span");
  element.append(character.name);
  return element;
};

const createAvatarDetail = (character) => {
  const element = document.createElement("img");
  element.height = 400; // He cambiado el estilo porque al ser fijo no podía ver la quote
  element.src = character.img;
  return element;
};

const showCharacter = (character) => {
  //console.log("character", character);
  const characterDetail = document.getElementById("character-detail");
  characterDetail.innerHTML = "";
  characterDetail.appendChild(createAvatarDetail(character));
  characterDetail.appendChild(createParagraph("Name: " + character.name));
  characterDetail.appendChild(
    createParagraph("Birthday: " + character.birthday)
  );
  characterDetail.appendChild(
    createParagraph("Nickname: " + character.nickname)
  );
  getRandomQuote(character.name)
    .then(quote => {
      characterDetail.appendChild(
        createParagraph("Quote: " +  quote));
    })
    .catch(error => console.log("There is no quote to show for " + character.name));
  characterDetail.style.width = "350px";
};

const createParagraph = (text) => {
  const element = document.createElement("p");
  element.append(text);
  return element;
};

const getRandomQuote = (name) => {
  var plusName = name.replace(/\s/, "+");

  return fetch("https://www.breakingbadapi.com/api/quote/random?author=" + plusName)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data[0].quote;//El array solo tiene una única posición
    });

};


export { createCharacterRow, showCharacter };
