const itemCategories = document.querySelectorAll("#categories > .item");
console.log(`Number of categories: ${itemCategories.length}`);

itemCategories.forEach(category => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("ul > li").length}`);
});

