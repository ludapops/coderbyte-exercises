 // Using the JavaScript language, have the function LongestWord(sen) 
 // take the sen parameter being passed and return the largest word 
 // in the string. If there are two or more words that are the same length, 
 // return the first word from the string with that length. Ignore punctuation 
 // and assume sen will not be empty. 




 function longestWord(sen) {
 	var word_array = sen.split(" ");
 	console.log(word_array);
 	var numbers_array = [];
 	var longest = 0;
 	var word = null;
 	function getMaxOfArray(numArray) {
 	   return Math.max.apply(null, numbers_array);
 	}
 	for(i = 0; i < word_array.length; i++) {
 		if (longest < word_array[i].length) {
 			longest = word_array[i].length;
 			word = word_array[i];
 		}

 	}
 	return word;
    // console.log(numbers_array);	//the values are being sent 
	// return getMaxOfArray(numbers_array); //Ask Nizar why this line is woking
 }


longestWord("hi my name is marcccc")
