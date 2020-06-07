// saveScores = (e) => {
//   console.log("why?");
// };

var username = document.getElementById("username");
var saveBtn = document.getElementById("saveBtn");
const logScore = document.getElementById("log-score");
const logThisScore = localStorage.getItem("logThisScore");

const scoreCounter = document.getElementById("scoreCounter");

logScore.innerText = logThisScore;
username.addEventListener("keyup", function () {
  console.log(username.value);
  saveBtn.disabled = !username.value;
});

function saveScores(e) {
  //   console.log("why?");
  e.preventDefault();
}
