function judgeNum(){
	var i = 0;
	while(i < 20){
		i++;
		if(i % 2 != 0){
			console.log(i + ' is odd number');
		}else{
			console.log(i + ' is even number.');
		}
	}
}
judgeNum();