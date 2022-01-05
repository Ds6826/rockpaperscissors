let randomNumber = 0;
let choices=["rock","paper","scissors"];
$("#shoot").click(function() {
  let user = $("input").val();
  $("#userChoice").text(user);
  let randomNumber = Math.ceil(Math.random() * 3 )-1;
  $("#computerChoice").text(choices[randomNumber]);
    console.log(choices[20]);

    let computerChoice="No choice.";
    if(randomNumber<=1){
      computerChoice="Rock";
    } else if(randomNumber >1 && randomNumber <=2){
      computerChoice="paper";
    } else{
      computerChoice="Scissors";
    }
    $(".computerChoice").text(computerChoice);
});

let result="";
if(choice === computerChoice){
  result="tie.";
} else if(choice === "Rock"&& computerChoice === "Scissors"){
  result="You win.";
}else if (choice ==="Paper"&& computerChoice === "Rock"){
  result="You win.";
} else if (choice ==="Scissors"&& computerChoice === "Paper"){
  result="You win.";
}
