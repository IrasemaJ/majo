player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

//COLOCA NOMBRES EN LA PARTE DE ARRIBA CON H4
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

//COLOCA PUNTAJE SPAN
document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

//COLOCA QUIEN PREGUNTA Y RESPONDE
document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Turno para responder - " + player2_name ;

function send() {
    //OBTIENE PALABRA 
    get_word = document.getElementById("word").value;
    //LO PONE EN MINUSCULA
    word = get_word.toLowerCase();
    console.log("Palabra en minúsculas = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    //SE DIVIDE PALABRA PARA QUITAR LETRAS 
    lenght_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(lenght_divide_2);
    console.log(charAt2);

    //QUITAR PENULTIMA LETRA
    lenght_minus_1 = word.length - 1; 
    charAt3 = word.charAt(lenght_minus_1); 
    console.log(charAt3);

    //QUITAMOS LETRAS
    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    //UNIMOS PREGUNTA, TEXTINPUT, BOTON
    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Respuesta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
    row =  question_word + input_box + check_button ; 
    //COLOCA EN DIV LAS PREGUNTA
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}


question_turn = "player1";
answer_turn = "player2";


function check()
{
get_answer = document.getElementById("input_check_box").value;
answer = get_answer.toLowerCase();
console.log("Respuesta en minúsculas = " + answer);
//PREGUNTA SI ES CORRECTA LA RESPUESTA
if(answer == word)	
{
    //PREGUNTA SI EL TURNO ES DEL JUGADOR 1
    //DA PUNTOS SI ES CORRECTO
    if(answer_turn == "player1")
    {
        player1_score = player1_score +1;
        document.getElementById("player1_score").innerHTML = player1_score;
    }
    else 
    {
        player2_score = player2_score +1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
}
//LANZA NUEVA PREGUNTA Y CAMBIA DE JUAGADORES PARA PREGUNTAR
if(question_turn == "player1")
{
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player2_name ;
}
else 
{
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player1_name ;
}

//LANZA NUEVA PREGUNTA Y CAMBIA DE JUAGADORES PARA RESPONDER
if(answer_turn == "player1")
{
    answer_turn = "player2"
    document.getElementById("player_answer").innerHTML = "Turno para responder - " + player2_name ;
}
else 
{
    answer_turn = "player1"
    document.getElementById("player_answer").innerHTML = "Turno para responder - " + player1_name ;
}

//DEJA VACIO ESPACIO DE PREGUNTAS
document.getElementById("output").innerHTML = "";
}
