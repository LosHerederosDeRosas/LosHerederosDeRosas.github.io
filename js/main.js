import * as base from './bbdd.js';

let data,texto,titulo;


let menuFloats = document.getElementById("menufloat");
let ro = JSON.parse(base.articulo);
let info = Object.keys(ro);
let articles = Object.values(ro);
var BTNmenu = `<p id=${articles[0].id} class='tema'>${articles[0].titulo}</p>`;
for (let i=1; i<info.length; i++){
	BTNmenu += `<p id=${articles[i].id} class='tema'>${articles[i].titulo}</p>`;
}
menuFloats.innerHTML = `
<div class="menu">
	<h3>Art&iacute;culos</h3>
	${BTNmenu}
</div>
`;


let btn_inicio = document.getElementById("inicio");
btn_inicio.addEventListener("click",inicio);

let btn_art = document.getElementById("articulo");
btn_art.addEventListener("click",arti);

let btn_con = document.getElementById("contacto");
btn_con.addEventListener("click",con);


// Cuerpo del articulo
let text = document.getElementById("text");
// Titulo del articulo
let tittle = document.getElementById("tittle");

//deteccion del temario
let temas = [];
for(let i=0; i<info.length; i++){
	temas[i] = document.getElementById(`${articles[i].id}`);
}

//mecanicas del temario
for(let i=0; i<info.length; i++){
	temas[i].addEventListener("click",function(){
		getArticles(i);
		art();
	});
}






function inicio()
{
	text.innerHTML = null;
	tittle.innerHTML = "Nombre del art&iacute;culo";
}

let menuFloat = false;
function arti()
{
	if(menuFloat==false){
		let menufloat = document.getElementById("menufloat");
		menufloat.style.display = "block";
		menuFloat = true;
	}else{
		let menufloat = document.getElementById("menufloat");
		menufloat.style.display = "none";
		menuFloat = false;
	}
}

function art()
{
	text.innerHTML = texto;
	tittle.innerHTML = titulo;
	arti();
}

function con()
{
	tittle.innerHTML = "Contatos";
	text.innerHTML = "LosHerederosDeRosas@gmail.com";
}


function getArticles(i)
{
	data = JSON.parse(base.articulo);
	let info = Object.keys(data);
	let articles = Object.values(data);
	
	texto = articles[i].texto;
	texto = texto.join("") + "<br><br>";
	texto += articles[i].autor + "<br>" + articles[i].fecha;
	titulo = articles[i].titulo;
}



