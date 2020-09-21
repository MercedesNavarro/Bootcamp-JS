import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils";

DataBusiness.getCharacters().then((data) => {
    document.getElementById("root").innerHTML = "";
    const characters = data;
    const nodes = [];

    for (let character of characters) {
        nodes.push(Utils.createCharacterRow(character));
    }

    for (let node of nodes) {
        document.getElementById("root").append(node);
        node.addEventListener("click", () => {
            Utils.showCharacter(characters[nodes.indexOf(node)]);
        });
    }

});
