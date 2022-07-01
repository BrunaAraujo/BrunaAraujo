/* .js files add interaction to your website */


//making background transparent
setInterval(function(){
        let random = Math.floor(Math.random()  * 4);
        image.src = images[random];
      }, 800);



var inputBtn = document.getElementById("inputBtn");

inputBtn.addEventListener("click", displayMotivation);

var displayMessage = document.getElementById("message");

function displayMotivation(){
  var inputText = 
    document.getElementById("inputText").value;
  displayMessage.innerHTML = inputText + ","+" it's never too late to be what you might be.";
}

  //CSS property
         
