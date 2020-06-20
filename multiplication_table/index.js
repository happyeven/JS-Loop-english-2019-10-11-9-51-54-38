function printMulTable(){
	//双重for循环实现乘法表
	 for (var i = 1 ; i <10 ; i++){
		var line='';	//将每一行的所有公式保存起来的变量
		for(var j = 1 ; j <= i ; j ++){
			//内循环中拼接好一行中所有的公式
			line += i + '*'+ j+ '=' + i*j+ '  ';
		}
		//拼接好一行后再进行打印
		console.log(line);
	 }
}
printMulTable();