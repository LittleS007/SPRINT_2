const form = document.getElementById("form");
form.addEventListener("submit", test);

let montoTotal = 0;
let montoPP = 0;
let cantPersonas = 0;

function test(event) {
  event?.preventDefault();
  let form = document.getElementById("form");
  let name = form.elements["name"].value;
  let amount = parseInt(form.elements["amount"].value);
  if (name && amount) {
    calcMontos(amount);
    let montos = document.getElementById("montos-container");
    let newMonto = document.createElement("p");
    newMonto.appendChild(document.createTextNode(name + ": $" + amount));
    montos.appendChild(newMonto);

    document.getElementById("monto-total").remove();
    let montototalNew = document.createElement("p");
    montototalNew.setAttribute("id", "monto-total");
    montototalNew.appendChild(
      document.createTextNode("Monto total: $" + montoTotal)
    );
    document.getElementById("monto-for-person").appendChild(montototalNew);

    document.getElementById("monto").remove();
    let monto = document.createElement("p");
    monto.setAttribute("id", "monto");
    monto.appendChild(
      document.createTextNode("A cada uno le toca aportar: $" + montoPP)
    );
    document.getElementById("monto-for-person").appendChild(monto);
  }
}

function calcMontos(amount) {
  cantPersonas += 1;
  montoTotal += amount;
  montoPP = montoTotal / cantPersonas;
}
