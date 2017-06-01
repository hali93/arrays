var femaleNames = ['Masha', 'Magda', 'Aleksandra', 'Marta'];
var maleNames = ['Tomek', 'Michał', 'Damian', 'Krzysztof'];
var allNames = femaleNames.concat(maleNames);
console.log(allNames);
var newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
	var allNamesNew = allNames.push(newName);
}
console.log(allNames);