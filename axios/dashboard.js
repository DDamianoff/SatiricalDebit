function mostrar() {
    axios({
        method: 'GET',
        url: 'http://localhost:3000/ventas'
    })
    .then(res =>  {
        for(item of res.data){
            document.getElementById("tabla").innerHTML += `<td>${item.id}</td><td>${item.nombreComp}</td><td>${item.cantidad}</td><td>${item.total}</td><td>${item.pago}</td><td>${item.estado}</td>
            <td class="primary">Details</td>`
        }
    })
    .catch(err => {
        console.log(err);
    })
}

mostrar()