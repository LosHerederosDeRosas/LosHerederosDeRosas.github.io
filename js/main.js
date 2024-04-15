import {articulo1} from './bbdd.js';

let data,texto;

let btn_inicio = document.getElementById("inicio");
btn_inicio.addEventListener("click",inicio);

let btn_art = document.getElementById("articulo");
btn_art.addEventListener("click",art);

let btn_con = document.getElementById("contacto");
btn_con.addEventListener("click",con);

let text = document.getElementById("text");
let tittle = document.getElementById("tittle");

function inicio()
{
	text.innerHTML = null;
	tittle.innerHTML = "Nombre del art&iacute;culo";
}

function art()
{
	getArticulo(articulo1);
	text.innerHTML = texto;
	tittle.innerHTML = "Revoluci&oacute;n francesa.";
}

function con()
{
	tittle.innerHTML = "Contatos";
	text.innerHTML = "LosHerederosDeRosas@gmail.com";
}


function getArticulo(art)
{
	data = JSON.parse(art);
	texto = data.articulo.texto + "<br><br>";
	texto += data.articulo.autor + "<br>" + data.articulo.fecha;
	texto = "<p class='parrafo'>" + texto + "</p>";
}





