window.onload = inicio

let var_id

function inicio() {
    document.getElementById('btnGuard').addEventListener("click", guardar);
    document.getElementById('btnMod').addEventListener("click", modificarVend);
}

function mostrar() {
    axios({
        method: 'GET',
        url: 'http://localhost:3000/vendedores'
    })
    .then(res =>  {
        for(pers of res.data){
            document.getElementById("tabla").innerHTML += `<td>${pers.id}</td><td>${pers.nombre}</td><td>${pers.apellido}</td><td>${pers.dni}</td>
            <td><button class="btn btn-primary btn-sm" id="btnModificar" onclick="modificar(${pers.id}, '${pers.nombre}', '${pers.apellido}', ${pers.dni})" class="material-symbols-sharp primary editar">edit</button></td><td><button id="btnBorrar" onclick=borrar(${pers.id}) class="btn btn-danger btn-sm">Borrar</button></td>`
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
        url: 'http://localhost:3000/vendedores',
        data: {
            nombre: document.getElementById('name').value,
            apellido: document.getElementById('lastName').value,
            dni: document.getElementById('document').value,
        }
    })
    .then( alert('GUARDADO CORRECTAMENTE'))
    .catch(err => {
        console.log(err);
    })
}

function borrar(id) {
    axios.delete("http://localhost:3000/vendedores/"+id)
    .then(pers => alert("PRODUCTO BORRADO"))
    .catch(err => console.log(err))
}

function modificar(id, nombre, apellido, dni, act) {
    var_id = id
    document.getElementById('name').value = nombre
    document.getElementById('lastName').value = apellido
    document.getElementById('document').value = dni
}

function modificarVend(){
    axios.put("http://localhost:3000/vendedores/"+var_id, {
            nombre: document.getElementById('name').value,
            apellido: document.getElementById('lastName').value,
            dni: document.getElementById('document').value,
        }
    )
    .then(item => alert("PRODUCTO MODIFICADO"))
    .catch(err => console.log(err))
}