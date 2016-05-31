/*
	===========================================================================
									WARMUP TO BE DONE AFTER EXERCISES
  ===========================================================================									
*/
// Exercises

// Discuss the purpose of reduce with your partner until both of you are 
// confident that you could explain its purpose to the class. Try to describe 
// what reduce does, not how it does it.

// Rewrite the sumCubes function below using reduce instead of each:

function sumCubes(numbers) {
  var total = 0;
  each(numbers, function(number) {
    total = total + Math.pow(number, 3);
  });
  return total;
}
// Write a function called smallestWords that accepts two parameters, string 
// and threshold (number), and returns an array containing all the words 
// smaller than threshold. You should use reduce to complete this function.

function smallestWords(string, threshold) {
  // YOUR CODE HERE
}
smallestWords("the quick brown fox", 4); // => ["the", "fox"]