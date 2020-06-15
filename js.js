var pto = document.getElementById("color_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujarTeclado);

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};//variables constantes
document.addEventListener("keydown", dibujarTeclado); //detecta cuando tocas una tecla
//document.addEventListener("mousemove", dibujarMouse);//movimiento con el mouse
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d")
var x = 150;
var y = 150;
dibujarLinea("red", 149,149,151,151, papel);//punto de inicio 
dibujarLinea("black", 1, 1, 1, 299, papel);//borde
dibujarLinea("black", 1, 299, 299, 299, papel);//borde
dibujarLinea("black", 299, 1, 1, 1, papel);//borde
dibujarLinea("black", 299, 1, 299, 299, papel);//borde

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {
    var colorcito = pto.value;
    var movimiento = 5;
    switch(evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorcito, x , y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x , y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x , y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x , y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
    }
}

//function dibujarMouse(evento1){
  //console.log(evento1)
  //var xMouse = evento1.clientX;
  //var yMouse = evento1.clientY;
  //var colorcito = "black";
  //var movimiento = 5;
  //console.log(xMouse)
  //if (evento1.isTrusted == true)
  //{
    //dibujarLinea(colorcito, xMouse-1, yMouse-1, xMouse+1, yMouse+1, papel)
  //}
//}