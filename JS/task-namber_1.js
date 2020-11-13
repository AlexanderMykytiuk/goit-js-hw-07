const categoriesRef = document.querySelectorAll('.item');

console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach(element => {categoriesRef 
    const titleRef = element.querySelector('h2');
    const listRef = element.querySelector('ul');
    const lengthRef = listRef.children;
    console.log(`Категория: ${titleRef.textContent}` );
    console.log(`Количество элементов:${lengthRef.length}`);
});

// categoriesEL.forEach(element => {
//     // const listEL = element.querySelectorAll("li");
//     // const nameOfCategoriesEL = element.querySelector("h2");
//     console.log(`
//  - Категория: ${element.querySelector("h2").textContent}
//  - Количество элементов: ${element.querySelectorAll("li").length}`);
// })
