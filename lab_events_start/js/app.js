document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const readingList = document.querySelector('#reading-list')
const form = document.querySelector('#new-item-form')

const handleFormSave = function(event) {
  event.preventDefault();
  const form = event.target;
  const title = form.title.value;
  const author = form.author.value;
  const category = form.category.value;
console.log(category);
  const result = document.querySelector('#reading-list');
  // result.textContent = `Title: ${title}, Author: ${author}, Category: ${category}`

  const paragraph = document.createElement('p');
  paragraph.textContent = `Title: ${title}, Author: ${author}, Category: ${category}`
  result.appendChild(paragraph); //this adds more paragraphs to the list

  form.reset()
}

form.addEventListener('submit', handleFormSave)

// const createParagraph = function (textContent, container) {
//   const paragraph = document.createElement('p');
//   paragraph.textContent = textContent;
//   container.appendChild(paragraph)
// }

});
