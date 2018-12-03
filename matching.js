function CalculateScore(users,answer_set){
	var score;
	for(i=0;i<answer_set.length;i++){
		if(answers[i]=="a"){
			score += 1;
		}
		else if(answers[i]=="b"){
			score += 2;
		}
		else if(answers[i]=="c"){
			score += 3;
		}
		else{
			score += 4;
		}
	}
	return score
}

function match(score,answer_set){
	var ratio;
	var status;
	var matches = [];
	for(i=0;i<users.length;i++){
		if(score >= answer_set.score){
			ratio = score/answer_set.score;
		}
		else{
			ratio = answer_set.score/score;
		}

		if(ratio >= 0.8){
			matches.append(answer_set.id);
		}
	}
}