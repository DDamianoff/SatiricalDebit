window.onload =inicio

let var_id

function inicio() {
    //document.getElementById('btnGuard').addEventListener("click", guardar);
    //document.getElementById('btnMod').addEventListener("click", modificarProd);
}

function mostrar() {
    axios({
        method: 'GET',
        url: 'http://localhost:3000/stock'
    })
    .then(res =>  {
        for(item of res.data){
            document.getElementById("id").innerHTML += `<p>${item.id} ${item.descripcion} ${item.cantidad} $${item.precioVenta} <input type="number"></input> <button class="addToCart">Add cart  </button></p>`
            console.log(res.data)
        }
    })
    .catch(err => {
        console.log(err);
    })
}

mostrar()
