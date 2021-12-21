//Showing data form api
function api () {

    var typed = document.getElementById("textbox").value;
 
 fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${typed}`)
 .then (res => res.json() )
 .then (data => showData(data.meals) ); 
 }
 
 api ();

 function showData (arraydata) {
     console.log(arraydata);
 
     var content = document.getElementById("grid-container");
 
  for (var i=0; i<arraydata.length; i++){
 
     var newDiv = document.createElement("div");
     newDiv.classList.add("api-data-style")
     newDiv.innerHTML = `#Info:- ${i+1} <br>
     <div class="card" style="width: 23rem;">
         <img src="${arraydata[i].strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${arraydata[i].strMeal}</h5>
           <p class="card-text">${arraydata[i].strInstructions}</p>
           <a href="#" class="btn btn-primary">Go Anywhere</a>
         </div>
   </div>`;
         content.appendChild(newDiv);
         
 }
}


//After searching data
function searchResults() {
    var typed = document.getElementById("textbox").value;
  
  fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${typed}`)
        .then(res => res.json())
        .then(data => SearchCard(data.meals))
 }
 
 function SearchCard(data) {
    var element = document.getElementById("grid-container");
 
    var content = document.getElementById("search-api-data");
    element.parentNode.removeChild(element);
 
    var newDiv = document.createElement("div");
    newDiv.classList.add("api-data-style")
    for (var i = 0; i<25; i++) {
 
       var typed = document.getElementById("textbox").value;
        if (typed == data[i].strMeal) {

           newDiv.innerHTML = `#Info:- ${i+1} <br>
           <div class="card" style="width: 23rem;">
               <img src="${data[i].strMealThumb}" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title">${data[i].strMeal}</h5>
                 <p class="card-text">${data[i].strInstructions}</p>
                 <a href="#" class="btn btn-primary">Go Anywhere</a>
               </div>
         </div>`;
         content.appendChild(newDiv);
        }
    }
 }