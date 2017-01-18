//stores quotes
var quote = [] 
quote [0] = '"Curiosity did not kill the cat, it created the mousetrap"--unknown';
quote [1] = '"I have no special talents. I am only passionately curious.” --Albert Einstein';
quote [2] = '"Life isn&#8217;t about finding the answers, it&#8217;s about asking the questions."--Brian Grazer';
quote [3] = '"Possibility of having a dream come true that makes life interesting" --Paulo Cohelo';
quote [4] = '"Life is a one time offer, use it well."--unknown';
quote [6] = '"Do not be afraid to fail. Be afraid not to try."--unknown';
quote [5] = '"In a maize field choose to be a flower. In a garden of daises choose to be a rose."--Matshona Dhliwayo';
quote [6] = '"Remember to celebrate milestones as you prepare for the road ahead." -- Nelson Mandela';
quote [7] = '"If you set your goals ridiculously high and fail, you will fail above everyone else&#8217;s success."-—James Cameron';
quote [8] = '"Live as if you were to die tomorrow. Learn as if you were to live forever. --Mahatma Gandhi';
quote [9] = '"People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.”--Rob Siltanen';

window.onload = function start () {
	var button = document.getElementById('start')
	button.addEventListener('click', myQuote)
	button.addEventListener('click',changeBackground)
}
//returns random integer 
function myQuote() {
  var randomQuote = Math.floor(Math.random() * (quote.length));
  //assigns random quote to html id 'my-quote'
  document.getElementById('my-quote').innerHTML = quote[randomQuote];
}

//change color on every click 
var backgroundColors = ['#FF7F50', '#00BFFF', '#FFD700', '#CD5C5C', '#F0E68C', '#ADD8E6', '#90EE90', '#87CEFA','#BC8F8F','#C0C0C0']; 

function changeBackground() {
//returns random integer
  var index = Math.floor(Math.random() * (backgroundColors.length));
//change color on click  
  document.getElementById('color-change').style.backgroundColor = backgroundColors[index];
}
