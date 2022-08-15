window.onload = inicio

let var_id

function inicio() {
    document.getElementById('btnGuard').addEventListener("click", guardar);
    document.getElementById('btnMod').addEventListener("click", modificarVend);
}

function mostrar() {
    axios({
        method: 'GET',
        url: 'http://localhost:3000/clientes'
    })
    .then(res =>  {
        for(pers of res.data){
            document.getElementById("tabla").innerHTML += `<td>${pers.id}</td><td>${pers.nombre}</td><td>${pers.apellido}</td><td>${pers.dni}</td><td>${pers.telefono}</td><td>${pers.cuenta_corriente}</td><td>${pers.monto_corriente}</td>
            <td><span id="btnModificar" onclick="modificar(${pers.id}, '${pers.nombre}', '${pers.apellido}', ${pers.dni}, ${pers.telefono}, ${pers.monto_corriente})" class="btn btn-primary btn-sm">Editar</span></td><td><button id="btnBorrar" onclick=borrar(${pers.id}) class="btn btn-danger btn-sm">Borrar</button></td>`
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
        url: 'http://localhost:3000/clientes',
        data: {
            nombre: document.getElementById('name').value,
            apellido: document.getElementById('lastName').value,
            dni: document.getElementById('document').value,
            telefono: document.getElementById('phone').value,
            cuenta_corriente: document.getElementById('account').value,
            monto_corriente: document.getElementById('amount').value
        }
    })
    .then( alert('GUARDADO CORRECTAMENTE'))
    .catch(err => {
        console.log(err);
    })
}

function borrar(id) {
    axios.delete("http://localhost:3000/clientes/"+id)
    .then(pers => alert("PRODUCTO BORRADO"))
    .catch(err => console.log(err))
}

function modificar(id, nombre, apellido, dni, telefono, cuenta_corriente, monto_corriente) {
    var_id = id
    document.getElementById('name').value = nombre
    document.getElementById('lastName').value = apellido
    document.getElementById('document').value = dni
    document.getElementById('phone').value = telefono
    document.getElementById('account').value = cuenta_corriente
    document.getElementById('amount').value = monto_corriente
}

function modificarVend(){
    axios.put("http://localhost:3000/clientes/"+var_id, {
        nombre: document.getElementById('name').value,
        apellido: document.getElementById('lastName').value,
        dni: document.getElementById('document').value,
        telefono: document.getElementById('phone').value,
        cuenta_corriente: document.getElementById('account').value,
        monto_corriente: document.getElementById('amount').value
        }
    )
    .then(item => alert("PRODUCTO MODIFICADO"))
    .catch(err => console.log(err))
}