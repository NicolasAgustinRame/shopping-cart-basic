btnSend.addEventListener("click", () => {
    const nameProduct = document.getElementById("txtName");
    const priceProduct = document.getElementById("txtPrice");
    const urlImage = document.getElementById("txtImageUrl");
    const btnSend = document.getElementById("btnSend");

    // Obtén el contenedor donde deseas mostrar los productos
    const marketContent = document.getElementById("marketContent");

    //obtenemos ultimo producto del array
    const lastProduct =  productos[productos.length -1];
    const newId = lastProduct.id +1;

    const newProduct = {
        id: newId,
        price: priceProduct.value,
        name: nameProduct.value,
        img: urlImage.value,
        cantidad: 1,
    }

    // Crea un nuevo div para el nuevo producto
    const content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${newProduct.img}">
        <h3>${newProduct.name}</h3>
        <p class="price">${newProduct.price} $</p>
    `;

    // Agrega el nuevo producto al contenedor
    marketContent.appendChild(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.appendChild(comprar);


    // Agrega el nuevo producto al array de productos
    productos.push(newProduct);
    console.log(newProduct);

    nameProduct.value = '';
    priceProduct.value = '';
    urlImage.value = '';

    
});

