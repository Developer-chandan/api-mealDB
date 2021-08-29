
document.getElementById("searchBtn").addEventListener("click",()=>{
  const getInput = document.getElementById("item");
  const getInputValue = getInput.value;
  if(getInputValue == ""){
    alert("Please input value")
  }else{
    searchMeal(getInputValue);
  }
  getInput.value="";
 return getInputValue;
  
})

const searchMeal = (product) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${product}`)
    .then(responce => responce.json())
    .then(data => meal(data))

}

const meal = (info) =>{
  const items = info.meals;
    if(Array.isArray(items) == true){
      const displaymeal = document.getElementById("productDisplay");
      displaymeal.textContent = "";
       for(const item of items){
        const div = document.createElement("div");
        div.classList.add("single-product");
        const imagelink = item.strMealThumb;
       div.textNode =" ";
        div.innerHTML=`
        <div onclick="currentMeal(${item.idMeal})" class="card">
    "
            <img class="img-fluid" src="${imagelink}">    
            <h2 class="text-danger text-center">${item.strMeal}</h2>
            <p class="text-center">${item.strInstructions.slice(0, 200)}</p>
        </div>
        `
      displaymeal.appendChild(div);
    }} else if(Array.isArray(items) == false){
      const exampleModa = document.getElementById('exampleModal'); 
      exampleModa.innerHTML =`
       <div class="modal-dialog">
       <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title" id="exampleModalLabel">MealDB</h5>
         </div>
         <div class="modal-body">
       <h1>Result Not found</h1>
         </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         </div>
       </div>
     </div>`
     }
}


const currentMeal = (mealId) =>{
  console.log(mealId)
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
  .then(responce => responce.json())
  .then(data => singleMeal(data))
}

const singleMeal = (details) =>{
  const meals = details.meals;
  const singleMEAL = document.getElementById("singleMeal");
  singleMEAL.textContent =""
  for(const meal of meals){
    // console.log(meal)
     const div = document.createElement("div");
     div.classList.add("singleProduct");
     div.innerHTML=`
     <div class="card singleMealCard">
        <img class="img-fluid" src="${meal.strMealThumb}">    
        <h2 class="text-danger text-center">${meal.strMeal}</h2>
        <p class="text-center">${meal.strInstructions.slice(0, 200)}</p>
    </div>+
     `
     singleMEAL.appendChild(div)
  }
}
