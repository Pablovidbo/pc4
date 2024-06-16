export default{
  template: 
      `
          <main>
             <h1>Entrenadores pokemon</h1>
             <div class="listEntrenadores">
                <ul v-if="isentrenadores">
                    <li v-for="entrenador in entrenadores" :key="entrenador.id" >
                      <i></i>        
                      <img :src="entrenador.foto " :alt="entrenador.foto" class="entrenador-foto">
                      <br><span>{{ entrenador.nombre }}</span>
                      <br><button @click="clickHanderdl(entrenador.id)">Ver Pokemones</button>
                      <br><button @click="clickHanderd2(entrenador.id)">Añadir a lucha</button>
                    </li>
                </ul>
                <p v-else="isentrenadores" class="noteEntrenadores">
                        No hay entrenadores
                </p>
             </div>
          </main>
      `,
  props: {
      entrenadores: {
        type: Array,
        requirid: true
      },
      isentrenadores: {
        type: Boolean,
        requerid: true
      }
  },
  methods: {
    clickHanderdl(id){
      this.$emit("clickentrenador",id);
    },
    clickHanderd2(id){
      this.$emit("clicklucha", id);
    }
  },
  name: 'Entrenador',
}