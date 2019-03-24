// Book constructor
function Book (title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
};


// UI constructor
function UI(){};

UI.prototype = {
    addBookToList : function (book) {
        const bookList = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</td>
        `;

        bookList.appendChild(row);
    },

    clearForm : function () {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    },

    showAlert : function (msg, className) {
        const container = document.querySelector('.container');
        const bookForm = document.querySelector('#book-form');

        // Build alert message element
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(msg));

        container.insertBefore(div, bookForm);

        setTimeout(function (){
            document.querySelector('.alert').remove();
        }, 3000);
    },

    deleteBook: function (target){
        if(target.classList.contains('delete')) {
            target.parentElement.parentElement.remove();
        }
    },
};


// Event Listeners
const form = document.querySelector('#book-form');
form.addEventListener('submit', function (e) {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    const book = new Book(title, author, isbn);
    // Add Book to list
    
    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill in all the required info', 'error');
    }
    else {
        ui.addBookToList(book);
        ui.showAlert('Book Added !', 'success');
        ui.clearForm();
    }   

    e.preventDefault();
});

// Even listener - delete book
const bookList = document.querySelector('#book-list');
bookList.addEventListener('click', function (e){

    ui.deleteBook(e.target);

    e.preventDefault();
}); 

const ui = new UI();