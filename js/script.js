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