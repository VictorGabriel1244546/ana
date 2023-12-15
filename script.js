function calcularArea() {
    var baseMaior = parseFloat(document.getElementById("baseMaior").value);
    var baseMenor = parseFloat(document.getElementById("baseMenor").value);
    var altura = parseFloat(document.getElementById("altura").value);
  
    if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura) || baseMaior <= 0 || baseMenor <= 0 || altura <= 0) {
      alert("Por favor, insira valores válidos para base maior, base menor e altura.");
      return;
    }
  
    var area = ((baseMaior + baseMenor) * altura) / 2;
  
    document.getElementById("resultado").innerHTML = "Área do trapézio (A) = ((baseMaior + baseMenor) * altura) / 2";
    document.getElementById("resultado").innerHTML += "<br>Área = ((" + baseMaior + " + " + baseMenor + ") * " + altura + ") / 2";
    document.getElementById("resultado").innerHTML += "<br>Área = " + area.toFixed(2) + " metros quadrados.";
  
    // Atualiza a figura do trapézio
    var trapezoidElement = document.getElementById("trapezoid");
    var trapezoidWidth = Math.max(baseMaior, baseMenor); // Utiliza o valor máximo entre as bases
    trapezoidElement.style.width = trapezoidWidth + "px";
    trapezoidElement.style.height = altura + "px";
    trapezoidElement.style.marginLeft = ((trapezoidWidth - baseMaior) / 2) + "px";
  }

  function openCalculator() {
    window.open("popup.html", "_blank", "width=400,height=400");
}