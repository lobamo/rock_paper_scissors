function computerPlay(){
	let choices = ['rock', 'paper', 'scissor'];
	let random = Math.floor(Math.random()* 3) + 1;
	if (random === 1){
		return choices[0];
	}else if (random === 2){
		return choices[1]
	}else{
		return choices[2]
	}
}


function playRound(playerSelection, computerSelection){

	
	if (playerSelection === 'rock' && computerSelection === "paper"){
		console.log("computer win");
	return -1;
	}
	else if(playerSelection === 'rock' && computerSelection === 'scissor'){
		
	console.log("player win");
	 return 1;
}
	else if(playerSelection === 'rock' && computerSelection === 'rock'){
		
	
	console.log("it's a tie");
	return 0;
	}
	else if (playerSelection === 'paper' && computerSelection === 'scissor'){
		
	
	console.log("computer win");
	return -1;
	}
	else if(playerSelection === "paper" && computerSelection === 'rock'){
		
	
	console.log("player win");
	 return 1;
	}
	else if(playerSelection === "paper" && computerSelection === 'paper'){
		
	
	console.log("it's a tie");
	 return 0;
	}
	else if (playerSelection === "scissor" && computerSelection === 'rock'){
		
	console.log("computer win");
	 return -1;
	 }
	else if (playerSelection === 'scissor' && computerSelection === 'paper'){
		
	console.log("player win");
	return 1
}
	else if (playerSelection === "scissor" && computerSelection === "scissor"){
		
		console.log("it's a tie");
		return 0;
	}	
}



function game(){
	let playerScore = 0;
	let computerScore = 0;
	for(var i = 0; i < 5; i++){

		score = playRound(prompt("rock paper or scissor"), computerPlay())

		if(score === -1){
			console.log('computer earn 1 point');
			computerScore ++;
		}
		if(score === 1){ 	 
			console.log("you earn 1 point");
			playerScore ++;
		}
		if(score === 0){
			console.log("it's a tie");
		}
	}
	console.log("game finished")
	console.log( 'score: Computer: ${computerScore}, player: ${playScore}');
}