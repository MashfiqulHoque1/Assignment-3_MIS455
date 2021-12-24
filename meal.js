//Showing data form api
api();

function api(){
    var typed = document.getElementById("textbox").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${typed}`)
    .then(res => res.json())
    .then(data => showtime(data.meals));
}

function showtime(arraydata){
    console.log(arraydata);

    var content = document.getElementById("api-data");
    
    for(var i=0; i<arraydata.length; i++){

        var newdiv = document.createElement("div");
        newdiv.classList.add("api-data-style");

        newdiv.innerHTML = `#Info:- ${i+1} <br>
        <div class="card" style="width: 18rem; justify-content: center;">
        <img src="${arraydata[i].strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${arraydata[i].strMeal}</h5>
          <p class="card-text">${arraydata[i].strInstructions}</p>
          <a href="#" class="btn btn-primary">Go Anywhere</a>
        </div>
      </div>`

      content.appendChild(newdiv);
    }
}

function searchapi(){
    var typed = document.getElementById("textbox").value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${typed}`)
    .then(res => res.json())
    .then(data => showsearchapi(data.meals));
}

function showsearchapi(adata){
    console.log(adata);

    var element = document.getElementById("api-data");
    var content1 = document.getElementById("search-api-data");

    element.parentNode.removeChild(element);

    for(var i=0; i<adata.length; i++){

        var typed = document.getElementById("textbox").value;

        if( typed == adata[i].strMeal){
            var newDiv = document.createElement("div");
            newDiv.classList.add("search-api-data-style")

            newDiv.innerHTML = `#Info:- ${i+1} <br>
            <div class="card" style="width: 18rem; justify-content: center;">
            <img src="${adata[i].strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${adata[i].strMeal}</h5>
              <p class="card-text">${adata[i].strInstructions}</p>
              <a href="#" class="btn btn-primary">Go Anywhere</a>
            </div>
          </div>`
        }

      content1.appendChild(newDiv);
    }
}