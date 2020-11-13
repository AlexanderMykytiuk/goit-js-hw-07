const categoriesRef = document.querySelectorAll('.item');

console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach(element => {
    console.log(`Категория: ${element.querySelector('h2').textContent}`);
    console.log(`Количество элементов:${element.querySelector('ul').children.length}`);
});
