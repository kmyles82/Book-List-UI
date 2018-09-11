//Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI constructor
function UI() { }

//add book to list
UI.prototype.addBookToList = function (book) {
    // console.log(book)
    const bookList = document.querySelector('#book-list');
    //create <tr> element
    const row = document.createElement('tr');
    //insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;

    bookList.appendChild(row)
}

//clear fields
UI.prototype.clearFields = function () {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
}

//create event listeners
document.querySelector('#book-form').addEventListener('submit', function (e) {
    //get form values
    const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;

    //instantiate book
    const book = new Book(title, author, isbn);

    //instantiate UI
    const ui = new UI();

    //add book to list
    ui.addBookToList(book);

    //clear fields
    ui.clearFields();

    e.preventDefault();
})