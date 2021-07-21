var clickTotal = 0

function incrementClickTotal(amount) {
  clickTotal = clickTotal + amount;
  document.getElementById("clickTotal").innerHTML = clickTotal;
}
