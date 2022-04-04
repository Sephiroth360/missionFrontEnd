<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <div class="table">
      
   </div> 
    <div class="article">

          <h5>Datos del Pedido</h5>
            <table>
                <tr>
                    <th>Nombre del cliente</th>
                    <th>Dirección</th>
                    <th>Correo Electrónico</th>
                    <th>Teléfono</th>
                    <th>Descripción</th>
                    <th>Tipo de Harina</th>
                    <th>Sabores</th>
                    <th>Adornos</th>
                </tr>
                <tr>
                    <td>{{$store.getters.obtenerCliente.nombre}}</td>
                    <td>{{$store.getters.obtenerCliente.direccion}}</td>
                    <td>{{$store.getters.obtenerCliente.email}}</td>
                    <td>{{$store.getters.obtenerCliente.telefono}}</td>
                    <td>{{$store.getters.obtenerCliente.descripcion}}</td>
                    <td>{{$store.getters.obtenerHarina}}</td>
                    <td>{{$store.getters.obtenerSabor}}</td>
                    <td>{{$store.getters.obtenerAdorno}}</td>
                </tr>
              
             
             </table>
         
            <h5>Inventario</h5>
            <table>
                <tr>
                    <th>Chocolate</th>
                    <th>Tres leches</th>
                    <th>Fresa</th>
                    <th>Naranja</th>
                    <th>Zanahoria</th>
                    <th>Queso</th>
                    <th>Cajeta</th>
                </tr>
                <tr>
                    <td>{{$store.getters.obtenerStockSabores[0].stock}}</td>
                    <td>{{$store.getters.obtenerStockSabores[1].stock}}</td>
                    <td>{{$store.getters.obtenerStockSabores[2].stock}}</td>
                    <td>{{$store.getters.obtenerStockSabores[3].stock}}</td>
                    <td>{{$store.getters.obtenerStockSabores[4].stock}}</td>
                    <td>{{$store.getters.obtenerStockSabores[5].stock}}</td>
                    <td>{{$store.getters.obtenerStockSabores[6].stock}}</td>
                </tr>
             </table>
     </div> 
</div>    
</template>

<script>
// @ is an alias to /src
export default {
  name: 'pastelero',
 
}
</script>
