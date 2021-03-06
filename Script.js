var botao = document.querySelector("button.botao"); //seleciona o elemento botão

      //Função passada pelo exercício
      function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      var newColor = getRandomColor(); // #E943F0

      //A cada clique no botão, a seguinte função será executada
      botao.onclick = function() {
        var containerElement = document.querySelector("#app"); // atribui o DIV app a variável containerElement
        var boxElement = document.createElement("div"); // cria um elemento no index, sendo esse um div
        containerElement.appendChild(boxElement); // atribui o boxElement como elemento filho do containerElement(div app)

        //atribuições de estilo CSS
        boxElement.style.width = 100;
        boxElement.style.height = 100;
        boxElement.style.margin = 10;
        boxElement.style.float = "left";
        boxElement.style.backgroundColor = "#0E7A0D";
        // Ao se passar o mouse sobre o quadrado criado, será executada a função passada pelo exercício
        boxElement.onmouseover = function() {
          boxElement.style.backgroundColor = getRandomColor();
        };
      };
