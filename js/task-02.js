const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredientsRef = document.querySelector('#ingredients');
 

function addItemsIngredients(arrayEl) {
  
 return arrayEl.map(item => {
const itemNameRef = document.createElement('li');
    itemNameRef.classList.add('item');
    itemNameRef.textContent = item;
   return itemNameRef;
  })
}
 const arrayAddedEl = addItemsIngredients(ingredients);
listOfIngredientsRef.append(...arrayAddedEl)