/*Old Way

const request = new XMLHttpRequest();
request.addEventListener("load", function() {
  console.log(this.responseText);
});

request.open("GET", USERS);
request.send();
*/


/*Promise based way

fetch(url)
  .then(res => res.text())
  .then(console.log)
  .catch(error => console.error("Oh no " + error));

console.log("After fetch");
  
*/

const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);


//GET Request
async function fetchUsers() {
  const USERS = "https://jsonplaceholder.typicode.com/users";
  const url = new URL(USERS);
  url.searchParams.set("id", "9");
  url.searchParams.set("username", "Delphine");

  try {
    const res = await fetch(url);
    console.log(res.status);
    console.log(res.ok);
    const arr = await res.json();
    console.log(arr[0]);
  } catch (error) {
    console.log(error);
  }
}

fetchUsers();

//POST Request
async function post() {
  const data = {
    username: "Zeus"
  };

  const headers = new Headers();
  headers.append( "Content-Type", "application/json; charset=utf-8");

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers
    };

  try {
    const POSTS = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(POSTS, options);
    
    const obj = await res.json();
    console.log(obj);

  } catch (error) {
    console.log(error);
  }
}

post();

//Form POST request
async function onSubmit(event) {
  event.preventDefault();
  const input = document.getElementById("name");
  const username = input.value;

  const data = {
    username: username
  }
  const headers = new Headers();
  headers.append( "Content-Type", "application/json; charset=utf-8");
  

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers
  }

  try {
    const POSTS = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(POSTS, options);
    
    const obj = await res.json();
    console.log(obj);

  } catch (error) {
    console.log(error);
  }
}

//Abort request (Slow API scenario etc.)
async function abortedRequest() {
  const USERS = "https://jsonplaceholder.typicode.com/users";
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), 10);

  try {
    const res = await fetch(USERS, {
      signal: abortController.signal
    });
    const arr = await res.json();
    console.log("abort", arr);
  } catch (error) {
    console.log(error);
  }
}
abortedRequest();