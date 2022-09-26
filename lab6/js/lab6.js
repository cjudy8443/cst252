
//PUT YOUR FUNCTIONS UP HERE
function addToWebPage(text)
{
	document.querySelector('#content').innerHTML += text + '<br /><br />'
}


//YOU CAN ADD MORE FUNCTIONS HERE

//END FUNCTIONS SECTION

function formatAndSortNames() {

	let arrayOfNames, splitNames, firstName, lastName, fixedName,
		finalName, combinedString, newArray, combinedFixedString;

	arrayOfNames = ["Kizzmekia Corbett", "Ada Lovelace", "Levar Burton" ];

	//Reminder: Google what "javscript pop" does if you do not remember!
	finalName = arrayOfNames.pop();
	//Reminder: Google what "join" does!
	combinedString = arrayOfNames.join('; ');
	combinedString = combinedString + ' and ' + finalName;

	addToWebPage('Before, the names were: ' + combinedString);


	newArray = [];
//type here//
//"arrayOfNames"is being used as a parameter. Changes the functions values.//
function fixTheNames(arrayOfNames){
splitNames = arrayOfNames.split(' ');
firstName = splitNames[0];
lastName = splitNames[1];
splitName = lastName +', '+firstName;
newArray.push(fixedName);
}
//They print as function for the parameter//
fixTheNames(arrayOfNames[0]);
fixTheNames(arrayOfNames[1]);
fixTheNames(finalNames);


	//Remember to Google what "split" does
	//splitNames = arrayOfNames[0].split(' ');
	//firstName = splitNames[0];
	//lastName = splitNames[1];
	//fixedName = lastName + ', ' + firstName;
	//newArray.push(fixedName);

	//splitNames = arrayOfNames[1].split(' ');
	//firstName = splitNames[0];
	//lastName = splitNames[1];
	//fixedName = lastName + ', ' + firstName;
	//newArray.push(fixedName);

	//splitNames = finalName.split(' ');
	//firstName = splitNames[0];
	//lastName = splitNames[1];
	//fixedName = lastName + ', ' + firstName;
	//newArray.push(fixedName);

	newArray.sort();
	finalFixedName = newArray.pop();
	//Reminder: Google what "join" does!
	combinedFixedString = newArray.join('; ');
	combinedFixedString = combinedFixedString + ' and ' + finalFixedName;

	addToWebPage('Afterwards, the names are: ' + combinedFixedString);

}
