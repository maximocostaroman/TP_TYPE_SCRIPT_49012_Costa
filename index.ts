type Rating={
    count:number;
    rate:number;
};

type product = {
    category:string;
    description:string;
    id: number;
    image:string;
    price:number;
    rating: Rating;
    title: string;
 
};

fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then((products: product[]) => {
    //prepare table html
    let tableHTMLL:string = '<thead><tr><th>ID</th><th>TITLE</th><th>DESCRIPTION</th><th>PRICE</th></tr></thead><tbody>'
    //Loop thru all products to generate tabler rows
    products.forEach((p: product) => {
        tableHTMLL += `<tr><td>${p.id}</td><td>${p.title}</td><td>${p.description}</td><td>${p.price}</td></tr>`;
    });
    //close table body
    tableHTMLL += '</tbody>';
    //Grab table element to set its inner html
    document.querySelector('#tableElement')!.innerHTML = tableHTMLL;
    //Hide Spinner
    const spinnerElement: HTMLElement = document.querySelector('.spinnerConteiner')!;
    spinnerElement.style.display = 'none';
})
.then(console.log); 