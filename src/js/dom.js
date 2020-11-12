
function addContent() {
  const container = document.getElementById('container');


  const addBook = document.createElement('div');
  addBook.classList.add('addBook');
  container.setAttribute('style', 'text-align: center; background-color: gray ');
  container.appendChild(addBook);


  const form = document.createElement('form');
  form.innerHTML = '<h3>Add a Book</h3>';
  form.setAttribute('style', 'margin: 1em');
  form.classList.add('form-group');
  container.appendChild(form);


  const titleDiv = document.createElement('div');
  titleDiv.setAttribute('style', 'margin: 0.5em');
  const title = document.createElement('input');
  title.setAttribute('id', 'title');
  title.setAttribute('type', 'text');
  title.setAttribute('placeholder', 'Title');
  title.classList.add('form-control');
  titleDiv.appendChild(title);
  form.appendChild(titleDiv);


  const authorDiv = document.createElement('div');
  authorDiv.setAttribute('style', 'margin: 0.5em');
  const author = document.createElement('input');
  author.setAttribute('id', 'author');
  author.setAttribute('type', 'text');
  author.setAttribute('placeholder', 'Author');
  author.classList.add('form-control');
  authorDiv.appendChild(author);
  form.appendChild(authorDiv);


  const pagesDiv = document.createElement('div');
  pagesDiv.setAttribute('style', 'margin: 0.5em');
  const pages = document.createElement('input');
  pages.setAttribute('id', 'pages');
  pages.setAttribute('type', 'number');
  pages.setAttribute('placeholder', 'Pages');
  pages.classList.add('form-control');
  pagesDiv.appendChild(pages);
  form.appendChild(pagesDiv);


  const submitDiv = document.createElement('div');
  submitDiv.setAttribute('style', 'margin: 0.5em');
  const submit = document.createElement('button');
  submit.setAttribute('id', 'submit');
  submit.setAttribute('type', 'submit');
  submit.innerHTML = 'New Book';
  submit.classList.add('btn');
  submit.classList.add('btn-primary');
  submitDiv.appendChild(submit);
  form.appendChild(submitDiv);


  return addBook;
}


function createTable(book) {
  const container = document.getElementById('container');

  const table = document.createElement('table');
  table.classList.add('table');
  table.setAttribute('style', 'margin: 0.5em; width: 100%; display: flex; align-items: center');
  table.setAttribute('id', 'id');
  table.classList.add('container');
  table.classList.add('m-2');
  book.id += 1;
  container.appendChild(table);


  const tDiv = document.createElement('div');
  const ttr = document.createElement('tr');
  ttr.innerHTML = `<td><h5>Title</h5> ${book.title} </td>`;
  tDiv.appendChild(ttr);
  tDiv.classList.add('m-2');
  table.appendChild(tDiv);

  const aDiv = document.createElement('div');
  const atr = document.createElement('tr');
  atr.innerHTML = `<td><h5>Author</h5> ${book.author}</td>`;
  aDiv.appendChild(atr);
  aDiv.classList.add('m-2');
  table.appendChild(aDiv);

  const pDiv = document.createElement('div');
  const ptr = document.createElement('tr');
  ptr.innerHTML = `<td><h5>Pages</h5> ${book.pages}</td>`;
  pDiv.appendChild(ptr);
  pDiv.classList.add('m-2');
  table.appendChild(pDiv);

  const rDiv = document.createElement('div');

  const rtr = document.createElement('a');
  rtr.setAttribute('id', 'check');
  rtr.setAttribute('href', '');
  rtr.setAttribute('onclick', 'updateReadStatus()');
  rtr.innerHTML = `${book.read ? 'Read' : 'Unread'}`;
  rtr.classList.add('btn');
  rtr.classList.add('btn-info');
  rtr.classList.add('m-2');
  rDiv.appendChild(rtr);
  table.appendChild(rDiv);


  const dDiv = document.createElement('div');
  const dtr = document.createElement('button');
  dtr.setAttribute('id', 'remove');
  dtr.setAttribute('onclick', 'deleteBook()');
  dtr.innerHTML = 'Remove';
  dtr.classList.add('btn');
  dtr.classList.add('btn-danger');
  dtr.classList.add('m-2');
  dDiv.appendChild(dtr);
  table.appendChild(dDiv);
}

export { addContent, createTable };
