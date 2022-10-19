let boxes = document.querySelectorAll('.box');
console.log(boxes);

let turnturnYellow = (box) => {
  box.style.backgroundColor = "yellow";
};

boxes.forEach(turnYellow);

boxes.forEach(function(i){
  i.addEventListener('click', function(){
    i.style.border = "5px solid black";

})
});
