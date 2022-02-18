var radius = prompt("What is the radius?")
function circleCalculation (radius) {
	var circumference = Math.floor(2*(Math.PI) * radius);
	var area = Math.floor(Math.PI * radius^2);
	let sentence = "The area of the circle is " + area +  " and the perimeter of the circle is "+ circumference

	return sentence
}
console.log(circleCalculation(radius));