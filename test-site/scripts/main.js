const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/326d447a0ae8adfe09066fc3b0932c33.jpg") {
    myImage.setAttribute("src", "images/ac673541b9bd7a8dfa80e07b8f95def5.jpg");
  } else {
    myImage.setAttribute("src", "images/326d447a0ae8adfe09066fc3b0932c33.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Click for a trip, ${myName}`;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Click for a trip, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
      
  