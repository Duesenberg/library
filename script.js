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

const content = document.querySelector('.content');

/* display the books on screen*/
function displayBooks () {
  for (i=0; i<myLibrary.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
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
    readButton.setAttribute('id', `${i}`);
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
    removeButton.textContent = "Remove";
    card.appendChild(removeButton);
  }
}

/* change read status of book */
function readStatus () {
  const readButton = document.getElementById(`${arrayIndex}`);
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

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

displayBooks ();