//let readMoreDiv = document.getElementById("readmore");


function likeIt() {
  alert('Thanks! You\'re ok too.')
  
}
function showHide() {
  let readMoreDiv = document.getElementById("readmore");
  if (readMoreDiv.style.display === "block") {
    readMoreDiv.style.display = "none";
  } else {
    readMoreDiv.style.display = "block";
  }
}

function welcomeUser() {
  let username = prompt("What's your name?");
  let welcomeUserDiv = document.getElementById("welcomeuser");
  welcomeUserDiv.style.display = "block";
  document.getElementById('welcomeuser').innerHTML = '<p> Hello, ' + username + ', looking forward to hearing your playlists! <br>Click this message to close it!</p>';
  welcomeUserDiv.style.cursor = "pointer";
}
function hideWelcome() {
  let welcomeUserDiv = document.getElementById("welcomeuser");
  welcomeUserDiv.style.display = "none";
  
}
function changeColor() {
  let welcomeUserDiv = document.getElementById("welcomeuser");
  if(welcomeUserDiv.style.color==="black"){
    welcomeUserDiv.style.color= "yellow";
  }
  else if(welcomeUserDiv.style.color==="yellow"){
    welcomeUserDiv.style.color= "red";
      }
  else {
    welcomeUserDiv.style.color= "black";
  }  
}
function backgroundColor(){
  let albumCoversDiv = document.getElementById("albumcovers")
  if(albumCoversDiv.style.backgroundColor=== "red"){
    albumCoversDiv.style.backgroundColor = "white";
  } else if(albumCoversDiv.style.backgroundColor=== "yellow") {
    albumCoversDiv.style.backgroundColor = "red";
  } else {
    albumCoversDiv.style.backgroundColor = "yellow";
  }
}
