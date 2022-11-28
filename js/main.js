const formContainer = document.querySelector(".form__container");
const booksContainer = document.querySelector(".books__container");
const addButton = document.querySelector(".add-btn");
const submitBtn = document.getElementById("submit-btn");


// array of book objects
const books = [];


// book constructor function
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// to create a book card and add this new book to the array 
const createABook = function(Book) {
    const book = document.createElement("div");

    const titleHead = document.createElement("h3");
    const authorHead = document.createElement("h3");
    const pagesHead = document.createElement("h3");

    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");

    const readBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    book.classList.add("book");
    readBtn.classList.add("combtn");
    removeBtn.classList.add("combtn");

    titleHead.innerText = "Title";
    title.innerText = `${Book.title}`;

    authorHead.innerText = "Author";
    author.innerText = `${Book.author}`;

    pagesHead.innerText = "Number Of Pages";
    pages.innerText = `${Book.pages}`;

    if(Book.isRead) {
        readBtn.classList.add("read");
        readBtn.innerText = "Read";
    } else {
        readBtn.classList.add("unread");
        readBtn.innerHTML = "Not Read Yet."
    }

    removeBtn.innerText = "Remove";

    // appending childs into book card element
    book.appendChild(titleHead);
    book.appendChild(title);
    book.appendChild(authorHead);
    book.appendChild(author);
    book.appendChild(pagesHead);
    book.appendChild(pages);
    book.appendChild(readBtn);
    book.appendChild(removeBtn);

    // console.log(book);

    booksContainer.appendChild(book);
}

addButton.addEventListener("click", function() {
    formContainer.classList.toggle("dnone");
})

/* formContainer.addEventListener("click", function() {
    formContainer.classList.toggle("dnone");
}) */


// form submit button
submitBtn.addEventListener("click", function() {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const read = document.getElementById("read");

    // console.log(read.checked)

    const newBook = new Book(title.value , author.value, pages.value, read.checked);

    //sala read value kub pain disse
    // console.log(newBook.isRead);
    books.push(newBook);

    // make books container empty first
    booksContainer.innerHTML = "";

    // finally go through the hole array of books and make book cards
    for(let Book of books) {
        createABook(Book);
    }

    // after all this things , lets remove the form
    formContainer.classList.toggle("dnone");
})