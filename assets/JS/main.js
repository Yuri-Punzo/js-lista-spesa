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
    const ulSelection = document.getElementById("lista_spesa")
    const liElement = document.createElement("li")
    ulSelection.append(liElement)
    liElement.append(listItems)

    /* VERSIONE BRUTTA ma più sintetica */

    /* document.getElementById("lista_spesa").insertAdjacentHTML("beforeend", `${listItems} `) */

    /* ALTRA VERSIONE con innerHTML */

    /* ulSelection.innerHTML += `<li>${listItems}</li>` */

    /* questa versione FUNZIONA SOLO con += altrimenti scrive solo l'ultimo elemento della lista invece con l'assegnazione += li scrive tutti.
    
    The addition assignment operator (+=) adds the value of the right operand to a variable and assigns the result to the variable. The types of the two operands determine the behavior of the addition assignment operator. Addition or concatenation is possible. */
    
}
