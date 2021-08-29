var initialPrice = document.querySelector("#initial-price");
var stockQty = document.querySelector("#stock-qty");
var currentPrice = document.querySelector("#current-price");
var tellBtn = document.querySelector("#tell");
var outputDiv = document.querySelector("#output");

function showOutput(message) {
  outputDiv.innerText = message;
}

function calculateProfitAndLoss(initial, qty, current) {
  if (initial > current) {
    var loss = (initial - current) * qty;
    lossPerc = (loss / initial) * 100;

    showOutput(
      `Oops...the loss is ${loss} and the percentage is ${lossPerc}% 😢`
    );
  } else if (current > initial) {
    var profit = (current - initial) * qty;
    profitPerc = (profit / initial) * 100;

    showOutput(
      `Yaaassss!! the profit is ${profit} and the percentage is ${profitPerc}% 🥳`
    );
  } else {
    showOutput(`No pain, no gain and no gain no pain! 😁`);
  }
}

// Event Handlers
function clickHandler() {
  var initPrice = Number(initialPrice.value);
  var quant = Number(stockQty.value);
  var currPrice = Number(currentPrice.value);

  if (initPrice && quant && currPrice) {
    calculateProfitAndLoss(initPrice, quant, currPrice);
  } else {
    showOutput("Please enter all fields! 😡");
  }
}

// Event Listener
tellBtn.addEventListener("click", clickHandler);
