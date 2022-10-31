const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredientsRef = document.querySelector('#ingredients');
  const arrayAddedEl = [];

function addItemsIngredients(arrayEl) {
  
 arrayEl.forEach(item => {
const itemNameRef = document.createElement('li');
    itemNameRef.classList.add('item');
    itemNameRef.textContent = item;
   return arrayAddedEl.push(itemNameRef);
  })
}
addItemsIngredients(ingredients);
listOfIngredientsRef.append(...arrayAddedEl)