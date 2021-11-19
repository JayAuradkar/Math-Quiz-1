var player1_storajj = localStorage.getItem("storage_1")
document.getElementById("player1_name").innerHTML = player1_storajj;
var player2_storajj = localStorage.getItem("storage_2")
document.getElementById("player2_name").innerHTML = player2_storajj;

var P1S = 0
var P2S = 0
document.getElementById("player1_score").innerHTML = P1S;
document.getElementById("player2_score").innerHTML = P2S;

var question_player = player1_storajj
var answer_player = player2_storajj
document.getElementById("player_question").innerHTML = question_player;
document.getElementById("player_answer").innerHTML = answer_player;

function send(){
    get_word = document.getElementById("word").value
    word = get_word.toLowerCase()
    first_letter = word.charAt(0)
    console.log(first_letter)
    middle_letter = word.charAt(Math.floor(word.length/2))
    console.log(middle_letter)
    second_last_letter = word.charAt(word.length-2)
    console.log(second_last_letter)
    replace_1 = word.replace(first_letter,"_")
    replace_2 = replace_1.replace(middle_letter,"_")
    replace_3 = replace_2.replace(second_last_letter,"_")
    console.log(replace_3)
    document.getElementById("output").innerHTML = 
    "<h4>"+replace_3+"</h4><br><input id='answer'><br><button type='button' onclick='check()'>check</button>"
    document.getElementById("word").value = ""
}
function check(){
    var get_answer = document.getElementById("answer").value
    answer = get_answer.toLowerCase()
    if(word == answer){
        if(answer_player == player1_storajj){
            P1S = P1S + 1
            document.getElementById("player1_score").innerHTML = P1S
             question_player = player1_storajj
            answer_player = player2_storajj
             document.getElementById("player_question").innerHTML = question_player;
             document.getElementById("player_answer").innerHTML = answer_player;
        }
        else{
            P2S = P2S + 1
            document.getElementById("player2_score").innerHTML = P2S
             question_player = player2_storajj
            answer_player = player1_storajj
             document.getElementById("player_question").innerHTML = question_player;
             document.getElementById("player_answer").innerHTML = answer_player;}
    } 
    else{
        if(answer_player == player1_storajj){
            question_player = player1_storajj
            answer_player = player2_storajj
             document.getElementById("player_question").innerHTML = question_player;
             document.getElementById("player_answer").innerHTML = answer_player;
        }
        else{
             question_player = player2_storajj
            answer_player = player1_storajj
             document.getElementById("player_question").innerHTML = question_player;
             document.getElementById("player_answer").innerHTML = answer_player;}
            
        }
document.getElementById("output").innerHTML = ""
}









