//AULA 91 

//localStorage nos permitirá buscar dados do armazenamento local.
//getItem(“player1Name”): getItem() é o método usado para obter o valor do armazenamento local.
//player1Name é a chave a ser passada para getItem(). Isso significa que ele obterá apenas o valor cuja chave é player1Name.
	player1Name = localStorage.getItem("player1Name");
	player2Name = localStorage.getItem("player2Name");

	//variáveis criadas para armazenar a pontuação do jogador
	player1Score = 0;
	player2Score = 0;

	//atualização do nome do player nos respectivos elementos HTML usando seu id
document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

// atualização sa pontuação do player1 nos elementos HTML usando o id “player1_score”
document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

//atualização do elemento HTML usando o id que criamos na aula anterior, com o nome do jogador que é a vez de fazer a pergunta, que é player1.
document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;

//função do botão enviar
function send() {
	//Pegaremos a palavra da caixa de entrada usando o id da caixa de entrada e a armazenaremos dentro de uma variável.
	getWord = document.getElementById("word").value;
	//altera letra caso esteja maiúscula em minúscula
	word = getWord.toLowerCase();
	//console para testar se está certo
	console.log("palavra em caixa baixa = " + word);

	//o charAt1 - obstém uma letra
    charAt1 = word.charAt(1);
	console.log(charAt1);

	//obtém a letra do meio
	lenghtDivide2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenghtDivide2);
	console.log(charAt2);

    lenghtMinus1 = word.length - 1; 
    charAt3 = word.charAt(lenghtMinus1); 
	console.log(charAt3);

	//o replace substitui a palavra por "_"
    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
	console.log(removeCharAt3);

	// tag h4 com um id para armazenar a palavra dentro dessa tag, e colocar tudo isso dentro de uma variável;
    question_word = "<h4 id='wordDisplay'> P. " + removeCharAt3 + "</h4>";

	// tag br, “Resposta:” é uma caixa de entrada com um id,coloque tudo isso dentro de uma variável;
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";

	// adicionando 2 tags br, um botão com a classe bootstrap 'btn btn-info' 
	//e uma função onclick check(), e colocando tudo isso dentro de uma variável que definiremos na próxima aula.
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
	
	// variável que contém a palavra, tro de uma única variável;
    row =  question_word + inputBox + checkButton ; 

	//atualizando a div que tem a saída id com a variável de linha;
    document.getElementById("output").innerHTML = row;

	//atualizando o valor da caixa de entrada do questionador com um valor nulo;
	document.getElementById("word").value = "";
}
//FIM DA AULA 91

//AULA 92 - INICIO
//Turnos dos jogadores
questionTurn = "player1";
answerTurn = "player2";

//função checar
function check()
{
	
	getAnswer = document.getElementById("inputCheckBox").value;

	
	answer = getAnswer.toLowerCase();

	
	console.log("resposta em caixa baixa - " + answer);

	
	if(answer == word)	
	{
		
		if(answerTurn == "player1")
		{
			
			player1Score = player1Score + 1;
			
		    document.getElementById("player1Score").innerHTML = player1Score;
		}
		else 
		{
			
			player2Score = player2Score + 1;
			
		    document.getElementById("player2Score").innerHTML = player2Score;
		}
	}


	

	
	if(questionTurn == "player1")
	{
		
		questionTurn = "player2"
		
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player2Name ;
	}
	else 
	{
		
		questionTurn = "player1"
		
		document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + player1Name ;
	}

	
	if(answerTurn == "player1")
	{
		
		answerTurn = "player2"
		
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player2Name ;
	}
	else 
	{
		
		answerTurn = "player1"

		
		document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + player1Name ;
	}
	
    document.getElementById("output").innerHTML = "";
}


