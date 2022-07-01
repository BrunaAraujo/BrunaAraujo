/* .js files add interaction to your website */



// button for statistics
var quoteList = 
  ["Lesbian, Gay or Bisexual: 47.4%","Hispanic or Latino: 18.4%", 
   "Non-Hispanic Native Hawaiian or Other Pacific Islander: 16.6%", 
   "Non-Hispanic mixed/multiracial: 35.8%", 
   "Non-Hispanic American Indian or Alaska Native: 18.7%", 
   "Non-Hispanic black or African-American: 17.3%", "Non-Hispanic white: 22.6%", 
   "Non-Hispanic Asian: 13.9%"];


// Variables
var myBtn = document.getElementById("myBtn");
var quote = document.getElementById("quote");
var counter = 0;

//event.Listener
myBtn.addEventListener("click", displayQuote);

// functions
function displayQuote(){
  quote.innerHTML = quoteList[counter];
  counter++;
  if (counter == quoteList.length) {
    counter = 0;
  }
}

  //CSS property
         
