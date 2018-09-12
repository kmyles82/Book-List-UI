//Class Book
class Book{ 
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{

    addBookToList(book) {
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

    showAlert(msg, className) {
        //create the div
        const div = document.createElement('div');
        //add classes
        div.className = `alert ${className}`;
        //add text node\
        div.appendChild(document.createTextNode(msg));
        //get the parent
        const container = document.querySelector('.container');
        //get form
        // const h1 = document.querySelector('h1');
        const form = document.querySelector('#book-form');
        //insert on parent before container before the form
        container.insertBefore(div, form);
        //timeout after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000)
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

}

//class LocalStorage
class Store{
    
    static getBooks() {
        
    }
    
    static displayBooks() {
        
    }

    static addBook() {
        
    }

    static removeBook() {
        
    }
}

//create event listeners for add book
document.querySelector('#book-form').addEventListener('submit', function (e) {
    //get form values
    const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;

    //instantiate book
    const book = new Book(title, author, isbn);

    //instantiate UI
    const ui = new UI();

    //validate
    if (title === '' || author === '' || isbn === '') {
        // console.log('Failed');
        //error alert
        ui.showAlert('Please fill in all fields', 'error')
    } else {
        //add book to list
        ui.addBookToList(book);

        //show success
        ui.showAlert('Book Added!', 'success')

        //clear fields
        ui.clearFields();
    }

    e.preventDefault();
})

//event listener for delete
document.querySelector('#book-list').addEventListener('click', function (e) {
    // console.log(e);
    //instantiate UI
    const ui = new UI();

    ui.deleteBook(e.target);

    //show message
    ui.showAlert('Book Removed!', 'success');
    e.preventDefault();
})