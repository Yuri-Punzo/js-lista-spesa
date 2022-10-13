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
    /* const ulSelection = document.getElementById("lista_spesa")
    const liElement = document.createElement("li")
    ulSelection.append(liElement)
    liElement.append(listItems) */
    /* VERSIONE BRUTTA ma più sintetica */
    /* document.getElementById("lista_spesa").insertAdjacentHTML("beforeend", `${listItems} `) */
}
