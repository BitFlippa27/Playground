let div = document.createElement("div");
let p = document.createElement("p");
let span = document.createElement("span");
document.body.appendChild(div);
div.append(p);
div.prepend(span);

const button = document.querySelector("button");
const scrollable = document.getElementById("scrollable");

button.addEventListener("dblclick", onClick);
button.addEventListener("dragstart", event => {
  console.log(event);
})

//document.body.addEventListener("click", onClick, true);

function onClick(event) {
  //event.stopPropagation();
  event.preventDefault();
  console.log("You clicked the button");
  console.log(event.target);
  console.log(this);
}

window.addEventListener("keydown", event => {
  console.log(event.code);
});

scrollable.addEventListener("scroll", event => {
  console.log(event.target.scrollTop);
});
 
scrollable.addEventListener("mouseenter", event => {
  console.log(event.pageX, event.pageY);
});

scrollable.addEventListener("mousemove", event => {
  console.log(event.pageX, event.pageY);
});

scrollable.addEventListener("drop", event => {
  scrollable.prepend(button);
});

scrollable.addEventListener("dragover", event => {
  event.preventDefault(); // default behaviour of dragover doenst allow to call the drop event
}); 

//Event Delegation  
scrollable.addEventListener("click", event => {
  if (event.target !== this) { //If not clicked the container but inside the container
    event.target.textContent = "Clicked";
    event.preventDefault();
  }
});