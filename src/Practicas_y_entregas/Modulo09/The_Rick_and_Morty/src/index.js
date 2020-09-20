import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils";

DataBusiness.getCharacters().then((data) => {
    const characters = data;
    const nodes = [];
console.log(data);
    for (let character of characters) {
        nodes.push(Utils.createCharacterRow(character));
    }

    for (let node of nodes) {
        document.getElementById("root").appendChild(node);
        node.addEventListener("click", function() {
            Utils.showCharacter(data[nodes.indexOf(node)]);
        });
    }
});