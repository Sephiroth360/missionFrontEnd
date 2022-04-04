import { RouterLink } from 'vue-router';
import { createStore } from 'vuex'

export default createStore({
  
  state: {
    harinas: [
      {id: 1, nombre:'Trigo', stock: 8, precio: 50},
      {id: 2, nombre:'Arroz', stock: 8, precio: 80},
      {id: 3, nombre:'Maiz', stock: 8, precio: 80},
      {id: 4, nombre:'Avena', stock: 8, precio: 100},
      {id: 5, nombre:'Frutos secos', stock: 8, precio: 120},
    ],

    sabores: [
      {id: 1, nombre:'Chocolate', stock: 8, precio: 100},
      {id: 2, nombre:'Tres leches', stock: 8, precio: 100},
      {id: 3, nombre:'Fresa', stock: 8, precio: 100},
      {id: 4, nombre:'Naranja', stock: 8, precio: 80},
      {id: 5, nombre:'Zanahoria', stock: 8, precio: 80},
      {id: 6, nombre:'Queso', stock: 8, precio: 100},
      {id: 7, nombre:'Cajeta', stock: 8, precio: 130},
    ],
    adornos: [
      {id: 1, nombre:'Imagen', stock: 8, precio: 50},
      {id: 2, nombre:'Fondant', stock: 8, precio: 80},
      {id: 3, nombre:'Chantilly', stock: 8, precio: 30},
    ],

    seleccionHarina: 0, seleccionSabor: 0, seleccionAdorno: 0,
   


    cliente:{
      nombre:'', direccion:'', telefono:'', email:'', descripcion:'',
    }
    
  

  },
  getters: {
    obtenerCliente(state){
      return state.cliente;
    },
    obtenerHarina(state){
      let nombre= 'n/a';
      state.harinas.forEach(element => {
          if (element.id === state.seleccionHarina){
          nombre = element.nombre
                   
        }
      }); 
      
      return nombre 
    },
    obtenerSabor(state){
      let nombre= 'n/a';
      state.sabores.forEach(element => {
          if (element.id === state.seleccionSabor){
          nombre = element.nombre
                   
        }
      }); 
      
      return nombre 
    },
    obtenerAdorno(state){
      let nombre= 'n/a';
      state.adornos.forEach(element => {
          if (element.id === state.seleccionAdorno){
          nombre = element.nombre
                   
        }
      }); 
      
      return nombre 
    },
  
    obtenerStockSabores(state){
      return state.sabores
    }
  },


  mutations: {
    
    restarStockHarina(state, id){ 
        state.harinas.forEach(element => {
        element.id === Number(id) ? element.stock-- : null
      });
    },
    restarStockSabor(state, id){
        state.sabores.forEach(element => {
        element.id === Number(id) ? element.stock-- : null
      });
    },
    restarStockAdorno(state, id){
        state.adornos.forEach(element => {
        element.id === Number(id) ? element.stock-- : null
      });
    },

    seleccionHarina(state, id){
      state.seleccionHarina = Number(id);
    },
    seleccionSabor(state, id){
      state.seleccionSabor = Number(id);
    },
    seleccionAdorno(state, id){
      state.seleccionAdorno = Number(id);
    },
    
    addClient(state, client){
      state.cliente = client;
    }
  },
  actions: {
  },
  modules: {
  }
})
