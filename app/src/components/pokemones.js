export default{
    template: 
        `
            <main>
               <div>
                  <div v-if="isselecciona">
                     <h2>Pokemones</h2>
                     <ul>
                        <li v-for="entrenador in entrenadores" :key="entrenador.id" >
                           <i></i>        
                           <br><h3>{{ entrenador.nombre }}</h3><br>
                           <div class="listPokemones">
                           <ul>
                              <li v-for="pokemon in entrenador.equipo" :key="pokemon.id"><br>
                              <img :src="pokemon.foto" :alt="pokemon.foto" class="pokemon-foto"><br>   
                              <h3>{{ pokemon.nombre }}</h3>
                              </li>
                           </ul>
                           
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </main>
        `,
    props: {
        isselecciona:{
            type: Boolean,
            requerid: true
        },
        entrenadores: {
            type: Array,
            requirid: true
          },
    },
    methods: {
      clickHanderdl(id){
        this.$emit("clickentrenador",id);
      },
      clickHanderd2(id){
         this.$emit("clicklucha",id);
       }
    },
    name: 'Pokemon',
  }