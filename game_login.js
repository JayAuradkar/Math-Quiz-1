var player1 = "";
var player2 = "";
function Login(){
    player1 = document.getElementById("P1L").value
    player2 = document.getElementById("P2L").value
    localStorage.setItem("storage_1",player1)
    localStorage.setItem("storage_2",player2)
    window.location="game_page.html"
}