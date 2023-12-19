let check;
do {
  let words = ["Stone", "Paper", "Scissor"];
  let index = Math.floor(Math.random() * 3);
  let finalWord = words[index];
  let ans = prompt("Stone Paper Scissor");
  ans = ans[0].toUpperCase() + ans.slice(1);
  if (ans != finalWord) {
    if (finalWord == "Stone" && ans == "Scissor") {
      console.log(finalWord);
      alert("You loose");
      check = confirm("Would you like to paly again ?");
    } else if (finalWord == "Stone" && ans == "Paper") {
      console.log(finalWord);
      alert("You won");
      check = confirm("Would you like to play again ?");
    } else if (finalWord == "Paper" && ans == "Scissor") {
      console.log(finalWord);
      alert("You won");
      check = confirm("Would you like to paly again ?");
    } else if (finalWord == "Paper" && ans == "Stone") {
      console.log(finalWord);
      alert("You loose");
      check = confirm("Would you like to paly again ?");
    } else if (finalWord == "Scissor" && ans == "Paper") {
      console.log(finalWord);
      alert("You loose");
      check = confirm("Would you like to paly again ?");
    } else {
      console.log(finalWord);
      alert("You Won");
      check = confirm("Would you like to paly again ?");
    }
  } else {
    console.log(finalWord);
    alert("Match Tied");
    check = confirm("Would you like to paly again ?");
  }
} while (check);
