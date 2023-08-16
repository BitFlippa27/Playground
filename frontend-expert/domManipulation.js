const listItems = document.querySelectorAll("li");

const p = document.createElement("p");
const text = document.createTextNode("Helloooo");
document.body.prepend(text);

const parent = document.querySelector("ol");
const fragment = document.createDocumentFragment(); 
const listItemsToAdd = [];

for (let i = 0; i < 3; i++) {
  
  const li = document.createElement("li");
  li.textContent = `List item with i=${i}`;
  //parent.append(li); //problem here it renders the page every time
  //listItemsToAdd.push(li);
  fragment.append(li); //own little DOM doesnt cause render, isnt on the page just in JS
}
parent.append(fragment);

//listItems[0].parentNode.removeChild(listItems[0]); old way
listItems[0].remove();


console.log(window.innerWidth);

//sizes

const scrollable = document.getElementById("scrollable");
console.log(scrollable.clientHeight); //  70+10padding on each side
console.log(scrollable.offsetHeight); //  70+10+10+5+5
console.log(scrollable.scrollHeight); // total height including non visible

console.log(scrollable.offsetTop); // distance from start of the page to top border of scrollable container
console.log(scrollable.querySelectorAll("p")[0].offsetTop);// distance from top border to 5th element

scrollable.querySelectorAll("p")[5].scrollIntoView();

scrollable.scrollTo({
  top: scrollable.querySelectorAll("p")[2].offsetTop,
  behavior: "smooth"
})


//listItems[0].setAttribute("class", "blue");
//listItems[0].classList.add("blue");
//listItems[0].classList.add("big");
//listItems[0].classList.add("big", "blue");
//listItems[0].classList.toggle("big"); //off
//listItems[0].classList.toggle("big"); // on
