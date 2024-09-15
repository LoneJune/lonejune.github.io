let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/picture.jpg") {
    myImage.setAttribute("src", "images/picture2.jpg");
  } else {
    myImage.setAttribute("src", "images/picture.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = myName + "is cool，" ;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = storedName + "is cool，" ;
}
myButton.onclick = function () {
  setUserName();
};

