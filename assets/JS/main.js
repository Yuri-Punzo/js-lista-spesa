/* CONSEGNA:
crea una lista della spesa e dopo stampala a schermo usando il ciclo while */

const shoppingList = [
    "pane",
    "latte",
    "uova",
    "carne",
    "patate",
    "olio"]

let i = 0;
while (i < shoppingList.length) {
    const listItems = shoppingList[i];
    console.log(listItems);
    i++;
    const domSelection = document.getElementById("lista_spesa")
    const liElement = document.createElement("li")
    domSelection.append(liElement)
    liElement.append(listItems)
    /* VERSIONE BRUTTA */
    /* document.getElementById("lista_spesa").insertAdjacentHTML("beforeend", listItems) */
}
