const pintarCarrito = () => {
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

        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto)
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
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto =  () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId
    });

    pintarCarrito();
};