window.onload = inicio

let var_id

function inicio() {
    document.getElementById('btnGuard').addEventListener("click", guardar);
    document.getElementById('btnMod').addEventListener("click", modificarProd);
}

function mostrar() {
    axios({
        method: 'GET',
        url: 'http://localhost:3000/stock'
    })
    .then(res =>  {
        for(item of res.data){
            document.getElementById("tabla").innerHTML += `<td>${item.id}</td><td>${item.descripcion}</td><td>${item.codigo}</td><td>${item.cantidad}</td><td>$${item.precioCompra}</td><td>$${item.precioVenta}</td><td><button id="btnModificar" onclick="modificar(${item.id},'${item.descripcion}',${item.codigo},${item.cantidad},${item.precioCompra},${item.precioVenta})" class="btn btn-primary btn-sm">Editar</button></td><td><span id="btnBorrar" onclick=borrar(${item.id}) class="btn btn-danger btn-sm">Borrar</span></td>`
        }
    })
    .catch(err => {
        console.log(err);
    })
}

mostrar()

function guardar() {
    axios({
        method: 'POST',
        url: 'http://localhost:3000/stock',
        data: {
            descripcion: document.getElementById('product').value,
            codigo: document.getElementById('code').value,
            cantidad: document.getElementById('amount').value,
            precioCompra: document.getElementById('purchase').value,
            precioVenta: document.getElementById('sale').value,
        }
    })
    .then( alert('GUARDADO CORRECTAMENTE'))
    .catch(err => {
        console.log(err);
    })
}

function borrar(id) {
    axios.delete("http://localhost:3000/stock/"+id)
    .then(item => alert("PRODUCTO BORRADO"))
    .catch(err => console.log(err))
}

function modificar(id, descripcion, codigo, cantidad, precioCompra, precioVenta) {
    var_id = id
    document.getElementById('product').value = descripcion
    document.getElementById('code').value = codigo
    document.getElementById('amount').value = cantidad
    document.getElementById('purchase').value = precioCompra
    document.getElementById('sale').value = precioVenta
}

function modificarProd(){
    axios.put("http://localhost:3000/stock/"+var_id, {
            descripcion: document.getElementById('product').value,
            codigo: document.getElementById('code').value,
            cantidad: document.getElementById('amount').value,
            precioCompra: document.getElementById('purchase').value,
            precioVenta: document.getElementById('sale').value,
        }
    )
    .then(item => alert("PRODUCTO MODIFICADO"))
    .catch(err => console.log(err))
}