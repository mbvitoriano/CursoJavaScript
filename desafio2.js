var nomes = ["Diego", "Gabriel", "Lucas"];
var lista = document.querySelector("ul");
var inputElement = document.querySelector("input");
var btnElement = document.querySelector("#btn");

for (nome of nomes) {
  var listElement = document.createElement("li");
  var textElement = document.createTextNode(nome);
  listElement.appendChild(textElement);
  lista.appendChild(listElement);
}

btnElement.onclick = function adicionar() {
  var newElement = document.createElement("li");
  var text = document.createTextNode(inputElement.value);
  newElement.appendChild(text);
  lista.appendChild(newElement);
  inputElement.value = "";
};
