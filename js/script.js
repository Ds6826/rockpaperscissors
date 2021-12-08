let randomNumer = 0;

$("#shoot").click(function() {
  let user = $("input").val();
  $("#userChoice").text(user);
  let randomNumber = Math.ceil(Math.random() * 3 )-1;
  $("#computerChoice").text(choices[randomNumber]);
});

let choices=["rock","paper","scissors"];
console.log(choices[20]);




