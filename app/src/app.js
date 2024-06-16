import Header from '../src/components/header.js';
import Entrenador from '../src/components/entrenador.js';
import Pokemon from '../src/components/pokemones.js'
import Servicios from './services/api.js';
var app = new Vue({
    el: '#app',
    data:{
        myNombre: 'Pablo',
        myApellido: 'Vidal',
        isEntrenadores: true,
        myEntrenadores: [],
        myEntrenadorSeleccionado: [],
        isSelecciona: false,
        contar: 0
        
    },
    components:{
        Entrenador,
        Header,
        Pokemon
    },
    methods:{
        initMenssage: function () {
            console.log("Bienvenidos a la clase 2 de Vue.js");
        },
        async fetchData () {
            const apiurl = 'app/json/entrenadores.json';  
            const servicio = new Servicios();            
            servicio.fetchData((error, response) => {
                if (error) {
                    console.error('Error al obtener canchas:', error);
                } else {
                    this.myEntrenadores = response;
                    this.isEntrenadores = (this.myEntrenadores.length > 0) ? true : false; 
                }
            });       
        },
        headerdlEntrenador: function(id){
            this.myEntrenadorSeleccionado = [];
            this.myEntrenadores.forEach(entrenador => {
                if(entrenador.id == id){
                    this.myEntrenadorSeleccionado.push(entrenador)
                }
            });
            this.isSelecciona = true;
        },
        headerlLucha: function(id) {
            this.contar++;
            if (this.myEntrenadorSeleccionado.length >= 2) {
                return;
            }
            this.myEntrenadores.forEach(entrenador => {
                if (entrenador.id === id) {
                    if (this.myEntrenadorSeleccionado.length < 2) {
                        this.myEntrenadorSeleccionado.push(entrenador);
                    }
                }
            });
            this.isSelecciona = true;
        }
        
    },
    mounted(){
        this.fetchData();
        this.initMenssage();
    },
    template: `
        <div>
            <Header :nombre="myNombre" :apellido="myApellido"  />
            <Pokemon :isselecciona="isSelecciona" :entrenadores="myEntrenadorSeleccionado" />
            <Entrenador :entrenadores="myEntrenadores" :isentrenadores="isEntrenadores" @clickentrenador="headerdlEntrenador" @clicklucha="headerlLucha"/>
        </div>
    `
})