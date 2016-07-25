var quote = [] 
quote [0] = '"I don’t want to earn my living; I want to live."--unknown';
quote [1] = '"Live for yourself."--unknown';
quote [2] = '"Work hard. Dream big."--unknown';
quote [3] = '"Life is short. Live passionately."--unknown';
quote [4] = '"Life is a one time offer, use it well."--unknown';
quote [6] = '"So it goes."--unknown';
quote [5] = '"The trouble is you think you have time."--unknown';
quote [6] = '"Whatever you are, be a good one."--unknown';
quote [7] = '"Everything happens for a reason."--unknown';
quote [8] = '"Be the change you wish to see in the world."--unknown';
quote [9] = '"Love the life you live, and live the life you love."--unknown';

function myQuote() {
  var randomQuote = Math.floor(Math.random()*(quote.length));
  document.getElementById('my-quote').innerHTML = quote[randomQuote];
}
