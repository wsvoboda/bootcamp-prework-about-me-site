let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/gabby.jpeg') {
      myImage.setAttribute('src','images/norway.jpg');
    } else {
      myImage.setAttribute('src','images/gabby.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `A page about me, ${myName}!`;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'A page about me, ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}
