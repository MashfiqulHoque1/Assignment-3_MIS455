
function api()
{
    var typed = document.getElementById("textbox").value;
    var url = `https://www.themealdb.com/api/json/v1/1/categories.php`;

    fetch(url)
    .then (res => res.json())
    .then (data => showData(data.categories));
}

api();

function showData(arraydata)
{
    console.log(arraydata);

    var content = document.getElementById("grid-container");

    for(var i = 0; i <= arraydata.length; i++)
    {
        var newDiv = document.createElement("div");
        newDiv.classList.add("api-data-style");
        newDiv.innerHTML = `
            #Info:- ${i+1} <br>
            <div class="card" style="width: 23rem;">
                <img src="${arraydata[i].strCategoryThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${arraydata[i].strCategory}</h5>
                  <p class="card-text">${arraydata[i].strCategoryDescription}</p>
                  <a href="#" class="btn btn-primary">Go Anywhere</a>
                </div>
          </div>`
            content.appendChild(newDiv);
    }
    
}