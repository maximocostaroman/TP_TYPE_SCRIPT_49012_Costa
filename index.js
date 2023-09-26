fetch('https://fakestoreapi.com/products')
    .then(function (res) { return res.json(); })
    .then(function (products) {
    //prepare table html
    var tableHTMLL = '<thead><tr><th>ID</th><th>TITLE</th><th>DESCRIPTION</th><th>PRICE</th></tr></thead><tbody>';
    //Loop thru all products to generate tabler rows
    products.forEach(function (p) {
        tableHTMLL += "<tr><td>".concat(p.id, "</td><td>").concat(p.title, "</td><td>").concat(p.description, "</td><td>").concat(p.price, "</td></tr>");
    });
    //close table body
    tableHTMLL += '</tbody>';
    //Grab table element to set its inner html
    document.querySelector('#tableElement').innerHTML = tableHTMLL;
    //Hide Spinner
    var spinnerElement = document.querySelector('.spinnerConteiner');
    spinnerElement.style.display = 'none';
})
    .then(console.log);
