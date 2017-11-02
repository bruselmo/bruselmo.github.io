// Click Titolo
document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}

// Click Immagine
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/door.jpg') {
      myImage.setAttribute ('src','images/indoor.jpg');
    } else {
      myImage.setAttribute ('src','images/door.jpg');
    }
}

// Click Bottone
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = "Utente: " + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = "Utente: " + storedName;
}

myButton.onclick = function() {
  setUserName();
}