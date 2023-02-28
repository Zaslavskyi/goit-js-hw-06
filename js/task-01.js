
const totalCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategories.length}`);

totalCategories.forEach(element => {
  let elementTitle = element.querySelector('h2').textContent;
  let elementItem = element.querySelectorAll('li');
  let elementItemQuantity = elementItem.length;

  console.log(`Category: ${elementTitle}`);
  console.log(`Elements: ${elementItemQuantity}`);
});