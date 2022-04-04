<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <div class="table">
      <div>
      <h1>Bienvenido a Pastel Soul</h1>
      <h2>El pastel que alimenta tu alma</h2>

      <p>
      Nos encontramos en av. del centro no. 59 <br>
      con un horario de atencion desde las 10:00 a.m. - 9:00 p.m. 
      </p>
    </div>
   </div> 
    <div class="article">

        <form  id="form" >
            <h3>LLena los datos de orden y envío</h3>
            <label for="nombre">Nombre Completo</label><br>
            <input type="text" id="nombre" name="nombre" v-model="cliente.nombre"><br><br>
           
            <label for="direccion">Dirección</label><br>
            <input type="text" id="direccion" name="direccion" v-model="cliente.direccion"><br><br>
            
            <label for="telefono">Teléfono de Contacto</label><br>
            <input type="text" id="telefono" name="telefono" maxlength="10" v-model="cliente.telefono"><br><br>
    
            <label for="email">Correo Electrónico</label><br>
            <input type="email" id="email1" name="email1" v-model="cliente.email"><br><br>
            
            <label for="descripcion">Describe tu pastel</label><br>
            <input type="text" id="descripcion" name="descripcion" v-model="cliente.descripcion"><br><br>
            
            <button type="button" @click="agregarCliente(cliente)">Enviar</button>
            <button type="button" @click="$router.push({name:'seleccion'})">Regresar</button>
        </form>
    </div>  
</div>    
</template>

<script>
// @ is an alias to /src
export default {
  name: 'ordenes',
 data() {
    return {
      cliente:{
        nombre:'', direccion:'', telefono:'', email:'', descripcion:'',
      }
    }
  },
  methods:{
   agregarCliente(clienteNuevo){
     this.$store.commit('addClient', clienteNuevo);
     console.log(this.$store.state.cliente);
     this.$router.push('pastelero');
   }
  },
}

</script>
<style scoped>
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
}

h3{
    color: #ffffff;
    font-size: 3rem;
    text-align: center;
}


h1,h2,p{
    
    height: 60px;
    color: #383838;
    padding-bottom: 40px;
    font-size: 40px;
    text-align: center;

}

.article{
  
  color: #ffffff;
  font-size: larger ;
  display: flex;
  background: #38383880;
  border-radius: 20px; 
}
.figure img{
  border-radius: 15px;
}
#form{
    text-align: left;
    position: relative;
    left: 150px;
    font-size: 30px;
    padding-top: 20px;
    padding-bottom: 30px;
}
#form input{
    padding-right:130px;
    padding-top: 10px;
}
button{
    margin: auto;
    font-size: 20px;
    border-radius: 10px;
    background-color: #2f2f2f;
    color: #ffffff;
    font-weight: bold;
    box-shadow:-4px 5px 20px #000000;
    padding: 1rem 1rem;
    margin-left: 60px; ; 
}
</style>