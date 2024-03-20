var texto1 = document.getElementById("texto1");
var texto2 = document.getElementById("texto2");
var bordaCabecalho = document.getElementById("bordaCabecalho");


/*****************************************************************HOVER CABECALHO*/
/*MOUSE DENTRO -----------------------------------------*/

texto1.addEventListener ("mouseenter", function()
{
	aparecerBorda();
})

texto2.addEventListener ("mouseenter", function()
{
	aparecerBorda();
})


/*MOUSE FORA ------------------------------------------*/

texto1.addEventListener ("mouseout", function()
{
	esconderBorda();
})

texto2.addEventListener ("mouseout", function()
{
	esconderBorda();
})



/*FUNCOES ---------------------------------------------*/

function aparecerBorda() {
	bordaCabecalho.style.visibility = 'visible';
	/*bordaCabecalho.style.border= '3px solid rgb(218 231 255)';*/
	bordaCabecalho.style.border= '4px solid rgb(106 156 216)';

}

function esconderBorda() {
	bordaCabecalho.style.visibility = 'hidden';
	bordaCabecalho.style.border= '0px solid #dfe4ed';

}



/******************************************************************MUDAR TEMA*/

var buttonLeft = document.getElementById("buttonLeft");
var buttonRight = document.getElementById("buttonRight");
var temaDiv = document.getElementById("temaDiv");


var body = document.getElementById("body");
var borda = document.getElementById("borda");
var cabecalho = document.getElementById("cabecalho");
var brancoTexto3 = document.getElementById("brancoTexto3");
var brancoTexto4 = document.getElementById("brancoTexto4");
var brancoTexto5 = document.getElementById("brancoTexto5");
var brancoTexto6 = document.getElementById("brancoTexto6");
var inputContato1 = document.getElementById("inputContato1");
var inputContato2 = document.getElementById("inputContato2");
var inputContato3 = document.getElementById("inputContato3");
var hrContato = document.getElementById("hrContato");
var buttonEnviar = document.getElementById("buttonEnviar");

/*TEMA CLARO*/
buttonLeft.addEventListener ("click", function() 
{
	console.log("left");
	temaDiv.style.animation = 'leftdiv 0.3s';
	buttonLeft.style.visibility = 'hidden';
	buttonRight.style.visibility = 'visible';


	body.style.background = 'rgb(206 216 229)';
	borda.style.border= '7px solid #6588bd';
	cabecalho.style.borderBottom= '2px solid #00248b4d';
	brancoTexto3.style.color = '#121867';
	brancoTexto4.style.color = '#121867';
	brancoTexto5.style.color = '#121867';
	brancoTexto6.style.color = '#121867';

	inputContato1.style.background = 'rgb(194 205 235)';
	inputContato1.style.border = '2px solid rgb(57 56 101 / 85%)';
	inputContato2.style.background = 'rgb(194 205 235)';
	inputContato2.style.border = '2px solid rgb(57 56 101 / 85%)';
	inputContato3.style.background = 'rgb(194 205 235)';
	inputContato3.style.border = '2px solid rgb(57 56 101 / 85%)';

	hrContato.style.border = '1px solid #407cb1fc';
	buttonEnviar.style.background = 'rgb(28 81 143)';
	buttonEnviar.style.color = 'rgb(237 246 255)';



	setTimeout(function() { 
		temaDiv.style.background = '#0f58a4';
	}, 250);
	
})

/*TEMA ESCURO*/
buttonRight.addEventListener ("click", function() 
{	
	console.log("right");
	temaDiv.style.animation = 'rightdiv 0.3s linear';
	buttonLeft.style.visibility = 'visible';
	buttonRight.style.visibility = 'hidden';


	body.style.background = '#0d111c';
	borda.style.border= '7px solid #d7e7ff';
	cabecalho.style.background= 'rgb(162 193 231)';
	cabecalho.style.color= '#0b3593';
	brancoTexto3.style.color = 'white';
	brancoTexto4.style.color = 'white';
	brancoTexto5.style.color = 'white';
	brancoTexto6.style.color = 'white';

	inputContato1.style.background = 'rgb(191 207 231)';
	inputContato1.style.border = '4px solid rgb(255 255 255)';
	inputContato2.style.background = 'rgb(191 207 231)';
	inputContato2.style.border = '4px solid rgb(255 255 255)';
	inputContato3.style.background = 'rgb(191 207 231)';
	inputContato3.style.border = '4px solid rgb(255 255 255)';

	hrContato.style.border = '1px solid #c3e3ff';
	buttonEnviar.style.background = 'rgb(162 199 241)';
	buttonEnviar.style.color = 'rgb(0 31 61)';




	setTimeout(function() { 
		temaDiv.style.background = 'rgb(224 238 255)';
	}, 250);

	
})
































