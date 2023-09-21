/*function changImg(myImg) {
 var image = document.getElementById(myImg);
  console.log(image.src)

  if (image.src.match("aboutme2.png")) {
    image.src = "mustache.png";
  } else if (image.src.match("mustache.png")) {
    image.src = "star.png";
  } else if (image.src.match("star.png")) {
    image.src = "devil.png";
  } else if (image.src.match("devil.png")) {
    image.src = "abotme2.png";
  }
}*/



const myImg = document.getElementById("myImg");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
  if (myImg.src.endsWith("aboutme2.png")) {
    myImg.src = "mustache.png";
  }
  if (myImg.src.endsWith("mustache.png")) {
    myImg.src = "/images/star.png";
  } 
  if (myImg.src.endsWith("star.png")) {
    myImg.src = "/images/devil.png";
  } 
  if (myImg.src.endsWith("devil.png")) {
    myImg.src = "/images/aboutme2.png";
  }  
  else {
    myImg.src = "/images/aboutme2.png";
  }
});