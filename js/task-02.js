const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients')

const createItem = ingredients.map(ingredient => {
  const elementItem = document.createElement('li');
  elementItem.classList.add('item');
  elementItem.textContent = ingredient;

  return elementItem
});


listEl.append(...createItem)