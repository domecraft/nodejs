//use nodejs on this file
/*
This is a simple lisp-like interpreter implemented in nodejs

Created by Christopher Durr 2014
*/

var input;
var operator; 
var total;
var index;

input = process.argv;
operator = input[2];
if ((operator == "+") || (operator == "add"))
{
	total = 0;
	for (index = 3; index < input.length; index++)
	{
		total += Number(input[index])
	}
	console.log(total);
}
else if ((operator == "-") ||(operator == "subtract"))
{
	total = input[3];
	for (index = 4; index < input.length; index++) 
	{
		total -= Number(input[index]);
	}
	console.log(total);
}
else if (operator == "multiply")
{
	total = 1;
	for (index = 3; index < input.length; index++)
	{
		total *= Number(input[index]);
	}
	console.log(total);
}
else if ((operator == "/") || (operator == "divide"))
{
	total = input[3]
	for(index = 4; index < input.length; index++)
	{
		total /= Number(input[index])
	}
	console.log(total);
}
else
{
	console.log("Didn't understand operator!");
}
