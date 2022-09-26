//Make a variable that has an object in it
//The object is keeping track of 3 properties/items
//The name(anything) of the player, the color(green) of their tunic, and a number that says how much health(100) they have left

let object = {
    name: "Cecile";
    age: 26
}

let character = {
  name: "Bubbles",
  color: "Green",
  health: 100,
  backpack: ['health potion', 'sword']
}

//make a Function
//the function has 1 paramater called color
//name the function whatever you want
//should set the players tunic color to whatever the color we tell it to be

function changeColor(color){
  player.color = color;
}
//player needs a backpack
//in the player object add a property called backpack
//make it so that the backpack has a health potion and a sword
//function that lets me put something in the backpack
//make function that has one parameter(item)
//It takes that item and adds it to the backpack
function addNewItem(newItem){
  player.backpack.push(newItem);
}
