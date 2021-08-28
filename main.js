

document.getElementById("searchBtn").addEventListener("click",()=>{
  const getInput = document.getElementById("item");
  const getInputValue = getInput.value;
  console.log(getInputValue);
  searchMeal(getInputValue);
  getInput.value="";
  
})




const searchMeal = (product) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${product}`)
    .then(responce => responce.json())
    .then(data => meal(data))

}

const meal = (info) =>{
  const items = info.meals;
    const displaymeal = document.getElementById("productDisplay");

   for(const item of items){
    // console.log(item);
      // console.log(info.meals[0].strMealThumb);
    const div = document.createElement("div");
    div.classList.add("single-product");
    const imagelink = item.strMealThumb;
   div.textNode =" ";

    div.innerHTML=`
        <img class="img-fluid" src="${imagelink}">

        
        <h2 class="text-danger text-center">${item.strMeal}</h2>
        <h4 class="text-center">${item.idMeal}</h4>

    `
    displaymeal.appendChild(div);
       
   }

}
