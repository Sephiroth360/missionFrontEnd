<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/logo.png">
    <div class="table" id="PanBase">
      <div>
      <h1>Bienvenido a Pastel Soul</h1>
      <h2>El pastel que alimenta tu alma</h2>

      <p>
      Nos encontramos en av. del centro no. 59 <br>
      con un horario de atencion desde las 10:00 a.m. - 9:00 p.m. 
      </p>
    </div>
    
        <div class="article">

              <h3>Selecciona el tipo de pan </h3>
              <div class="seleccionHarina">
                <label for="harina">Tipo de harina</label>
                <select id="harina" name="harina" v-model="eleccionHarina">
                    <option value=1 >Trigo $50</option>
                    <option value=2>Arroz $80</option>
                    <option value=3>Maiz $80</option>
                    <option value=4>Avena $100</option>
                    <option value=5>Frutos Secos $120</option>
                </select>
              </div>
            
            <div class="seleccionSaboresAdornos" id="seleccionSabor">
                 <h4>Selecciona el sabor de tu pastel</h4><br>
                <input type="radio" id="topping1" name="topping1" value=1 v-model="eleccionSabor" >
                <label for="topping1">Sabor Chocolate $100</label><br>
                <input type="radio" id="topping2" name="topping2" value=2 v-model="eleccionSabor">
                <label for="topping2">Sabor Tres Leches $100</label><br>
                <input type="radio" id="topping3" name="topping3" value=3 v-model="eleccionSabor">
                <label for="topping3">Sabor Fresa $100</label><br>
                <input type="radio" id="topping4" name="topping4" value=4 v-model="eleccionSabor">
                <label for="topping4">Sabor Naranja $80</label><br>
                <input type="radio" id="topping5" name="topping5" value=5 v-model="eleccionSabor">
                <label for="topping5">Sabor Zanahoria $80</label><br>
                <input type="radio" id="topping6" name="topping6" value=6 v-model="eleccionSabor">
                <label for="topping6">Sabor Queso $100</label><br>
                <input type="radio" id="topping7" name="topping7" value=7 v-model="eleccionSabor">
                <label for="topping7">Sabor Cajeta $130</label><br><br>
               <!-- <span>selecciona tu sabor: {{eleccionSabor}}</span> -->
                
        
            <h4>Selecciona el adorno de tu pastel</h4><br>
                <input type="radio" id="topping8" name="topping8" value=1 v-model="eleccionAdorno">
                <label for="topping8">Decorado Imagen $50</label><br>
                <input type="radio" id="topping9" name="topping9" value=2 v-model="eleccionAdorno">
                <label for="topping9">Cubierta de fondant $80</label><br>
                <input type="radio" id="topping10" name="topping10" value=3 v-model="eleccionAdorno">
                <label for="topping10">Decorado de chantilly $30</label><br><br>
                <!-- <span>selecciona tu sabor: {{eleccionAdorno}}</span> <br> -->
                <button @click="seleccion(eleccionHarina, eleccionSabor, eleccionAdorno)">Seleccionar</button>
            </div>
                   
        </div>
    
  
    </div>    

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'seleccion',

  data() {
    return {
      eleccionHarina: 0,
      eleccionSabor: 0,
      eleccionAdorno: 0,
    }
  },
  methods:{
    seleccion(harinaId, saborId, adornoId){
      
      this.$store.commit('seleccionHarina', harinaId);
      this.$store.commit('restarStockHarina', harinaId);
      this.$store.commit('seleccionSabor', saborId);
      this.$store.commit('restarStockSabor', saborId);
      this.$store.commit('seleccionAdorno', adornoId);
      this.$store.commit('restarStockAdorno', adornoId);
      this.$router.push('ordenes')
  },
}
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
table{
    justify-content: center;
    text-align:left;
    padding-top: 5%;
    padding-bottom: 3%;
    border-collapse:separate ;
    border-spacing: 15px 15px;

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
  text-align: left;
  flex-direction: column;
  background: #38383880;
  border-radius: 20px; 
  
}
.seleccionHarina{
    position: relative;
    top: 30px;
    left: 200px;
    margin-right: auto;
}
.seleccionSaboresAdornos{
    position: relative;
    top: 50px;
    left: 200px;
    padding-bottom: 50px;
}
.seleccionSaboresAdornos label{
    position: relative;
    left: 20px;
    
}   
.figure{
    padding-top: 30px;
    position: relative;
    left: 20%;
    padding-bottom: 30px;
 }
.figure img{
  border-radius: 15px;
}

button{
    font-size: 30px;
    border-radius: 10px;
    background-color: #2f2f2f;
    padding: 1rem 1rem;
    color: #ffffff;
    font-weight: bold;
    box-shadow:-4px 5px 20px #000000;
        
}

</style>