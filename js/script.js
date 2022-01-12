let randomNumber = 0;
let choices=["rock","paper","scissors"];
let computerChoice="No choice.";

$("#shoot").click(function() {
  let user = $("input").val();
  $("#userChoice").text(user);
  let randomNumber = Math.ceil(Math.random() * 3 )-1;
  $("#computerChoice").text(choices[randomNumber]);
    console.log(choices[20]);

  let result="";
if(choices === computerChoice){
  result="tie.";
} else if(choices === "Rock"&& computerChoice === "Scissors"){
  result="You win.";
}else if (choices ==="Paper"&& computerChoice === "Rock"){
  result="You win.";
} else if (choices ==="Scissors"&& computerChoice === "Paper"){
  result="You win.";
}
    
    if(randomNumber<=1){
      computerChoice="Rock";
    } else if(randomNumber >1 && randomNumber <=2){
      computerChoice="paper";
    } else{
      computerChoice="Scissors";
    }
    $(".computerChoice").text(computerChoice);
});