//AULA 90 PARTE 1
//FUNÇÃO ADD USUÁRIO
function addUser(){
    //player1 e 2 NameInput são das caixas de entrada do html
    player1Name = document.getElementById("player1NameInput").value;
    player2Name = document.getElementById("player2NameInput").value;

    //Armazenando as chaves e valores
    localStorage.setItem("player1Name", player1Name);
    localStorage.setItem("player2Name", player2Name); 

    //chamando a próxima página
    window.location = "game_page.html";

}
//AULA 90 FINALIZADA PARTE 1