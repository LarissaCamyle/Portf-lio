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
var brancoTexto1 = document.getElementById("brancoTexto1");


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
	brancoTexto1.style.color = '#121867';
	

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
	brancoTexto1.style.color = 'white';
	


	setTimeout(function() { 
		temaDiv.style.background = 'rgb(224 238 255)';
	}, 250);

	
})
































