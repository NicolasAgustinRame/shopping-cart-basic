const marketContent = document.getElementById("marketContent");
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modalContainer")

let carrito = []

productos.forEach((product)=> {
    //creamos un DIV dentro de la pagina principal y le asignamos contenido
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.name}</h3>
        <p class="price">${product.price} $</p>
    `;

    marketContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar"

    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id : product.id,
            img: product.img,
            name: product.name,
            price: product.price,
        });
        console.log(carrito)
    });
});

verCarrito.addEventListener("click", ()=> {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
    `;

    modalContainer.append(modalHeader)

    const modalButton = document.createElement("h1");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });


    modalHeader.appendChild(modalButton);


    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.name}</h3>
            <p>${product.price} $</p>
        `;
        modalContainer.append(carritoContent);
    });

    //utilizamos metodo reduce que recorre el carrito
    //pasamos dos parametros un acumulador y el(representa cada uno de los productos de los carritos)
    //numero final arranca en 0 y se va sumando a partir del 
    //obtenemos el total
    const total = carrito.reduce((acc, el) => acc + el.price, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content";
    totalCompra.innerHTML =`Total a Pagar: ${total} $`;
    modalContainer.append(totalCompra) 
});