let arrayIndex = []; // evaluated when clicking read status button

/* array with book objects */
let myLibrary = [
  {
    name: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    pages: 224,
    year: 2016,
    category: "Self-esteem",
    read: true
  },
  {
    name: "The Courage To Be Disliked",
    author: "Ichiro Kishimi",
    pages: 288,
    year: 2019,
    category: "Self-esteem",
    read: true
  },
  {
    name: "The Charisma Myth",
    author: "Olivia Fox Cabane",
    pages: 272,
    year: 2013,
    category: "Self-esteem",
    read: false
  },
  {
    name: "Not Nice",
    author: "Aziz Gazipura",
    pages: 504,
    year: 2017,
    category: "Self-esteem",
    read: true
  },
  {
    name: "The Prince",
    author: "Nicolo Machiavelli",
    pages: 80,
    year: 2000,
    category: "Politics",
    read: true
  },
];

//constructor
class Book {
  constructor (name, author, pages, year, category, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.year = year
    this.category = category
    this.read = read;
    }
}

const content = document.querySelector('.content');

/* display the books on screen*/
function displayBooks () {
  for (i=0; i<myLibrary.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('child');
    card.setAttribute('data-index', i);
    content.appendChild(card);

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = myLibrary[i].name;
    card.appendChild(title);

    const author = document.createElement('div');
    author.classList.add('author');
    author.textContent = `Author: ${myLibrary[i].author}`;
    card.appendChild(author);

    const pages = document.createElement('div');
    pages.classList.add('pages');
    pages.textContent = `Pages: ${myLibrary[i].pages}`;
    card.appendChild(pages);

    const year = document.createElement('div');
    year.classList.add('year');
    year.textContent = `Year: ${myLibrary[i].year}`;
    card.appendChild(year);

    const category = document.createElement('div');
    category.classList.add('category');
    category.textContent = `Category: ${myLibrary[i].category}`;
    card.appendChild(category);

    const readButton = document.createElement('button');
    readButton.classList.add('read-button');
    readButton.setAttribute('data-readindex', i);
    readButton.value = i;
    readButton.setAttribute('onclick', `arrayIndex = this.value; readStatus ();`);
     if (myLibrary[i].read == true) {
      readButton.classList.add('is-read');
      readButton.textContent = 'Read';
    } else {
      readButton.textContent = "Not Read";
    }
    card.appendChild(readButton);

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.value = i;
    removeButton.setAttribute('onclick', `arrayIndex = this.value; removeBookFromLibrary ();`);
    removeButton.textContent = "Remove";
    card.appendChild(removeButton);
  }
}

/* remove all books from screen */
function removeDisplayedBooks () {
  const card = document.querySelectorAll('.child');

  card.forEach((div) => content.removeChild(div))
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//prevent form submission
const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", Click, false);
function Click(event) {
  event.preventDefault();
}


/* get the values from the form, create object and push it in myLibrary.
then display the library on screen again with the object added */
function addBookToLibrary() {
  const name = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const year = document.getElementById('year').value;
  const category = document.getElementById('category').value;
  const isRead = document.getElementById('read');
  let read;
  (isRead.checked) ? read = true : read = false;

  const book = new Book (name, author, pages, year, category, read);

  myLibrary.push(book);

  removeDisplayedBooks();
  displayBooks();
}

/* removes the object from the array, removes all DOM elements from screen
and displays them again. This is so that the data-index values are updated */
function removeBookFromLibrary () {
  const card = document.querySelector(`[data-index = "${arrayIndex}"]`);
  myLibrary.splice(arrayIndex, 1);
  content.removeChild(card);

  removeDisplayedBooks();
  displayBooks();
}

/* change read status of book */
function readStatus () {
  const readButton = document.querySelector(`[data-readindex = "${arrayIndex}"]`);
  if (myLibrary[arrayIndex].read == true) {
    myLibrary[arrayIndex].read = false;
    readButton.classList.toggle('is-read');
    readButton.textContent = "Not Read";
  } else {
    myLibrary[arrayIndex].read = true;    
    readButton.classList.toggle('is-read');
    readButton.textContent = "Read";
  }
}

displayBooks ();

/* checking for validity */

const validityCh = () => {
  const titleField = document.querySelector('#title');
  const authorField = document.querySelector('#author');
  const pagesField = document.querySelector('#pages');
  const yearField = document.querySelector('#year');
  const categoryField = document.querySelector('#category');

  if(!(titleField.validity.valueMissing && authorField.validity.valueMissing && 
    pagesField.validity.valueMissing && yearField.validity.valueMissing && 
    categoryField.validity.valueMissing)) {
      addBookToLibrary();
      closeForm();
    } else {
      alert('Please fill out all the fields.');
    }
}