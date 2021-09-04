function play(){
    username1 = document.getElementById("player1username_input").value;
    username2 = document.getElementById("player2username_input").value;

    localStorage.setItem("user_name_1", username1);
    localStorage.setItem("user_name_2", username2);

    window.location = "tttgamepage.html"
}