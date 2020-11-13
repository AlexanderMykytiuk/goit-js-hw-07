const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

 const ingredientsRef = document.querySelector('#ingredients');
  //  console.log(ingredientsRef);
  
 const listProduct = ingredients.map(ing => {
    const listRef = document.createElement('li');
    // console.log(listRef);
    listRef.textContent = ing;
    ingredientsRef.appendChild(listRef)
});
  
   
  const ingredientList = ingredients.map(element => {
    const list = document.createElement("li");
    list.textContent = (element);
    return (list);
});
    const ingredientsEl = document.querySelector("#ingredients");
    ingredientsEl.append(...ingredientList);