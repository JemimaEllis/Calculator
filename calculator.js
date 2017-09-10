var options = prompt("Please choose your option", "subtract, add, multiply, divide, or squareroot");
	if (options === 'subtract') {
		var subtract1 = prompt("You have chosen to subtract", "Enter value one here");
		var subtract2 = parseFloat(prompt("Enter value two here."));
alert (subtract1 - subtract2)
}


if (options === 'add') {
		var add1 = prompt("You have chosen to add", "Enter value one here");
		var add2 = parseFloat(prompt("Enter value two here."));
alert (+add1 + +add2)
}

if (options === 'multiply') {
		var multiply1 = prompt("You have chosen to multiply", "Enter value one here");
		var multiply2 = parseFloat(prompt("Enter value two here."));
alert (multiply1 * multiply2)
}

if (options === 'divide') {
		var divide1 = prompt("You have chosen to divide", "Enter value one here");
		var divide2 = parseFloat(prompt("Enter value two here."));
alert (divide1 / divide2)
}

if (options === 'squareroot') {
		var square1 = prompt("You have chosen to find the square root", "Enter value here");
alert (Math.sqrt(square1));
}

