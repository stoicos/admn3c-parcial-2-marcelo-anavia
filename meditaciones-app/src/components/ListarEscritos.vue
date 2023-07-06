<template>
  <div>
    <escritor-area
    @texto-guardado="guardarTexto"
    ></escritor-area>
    <div class="contenedor-lista">
    
    <div v-for="texto in listaEscritos" :key="texto">{{ texto }}</div>
    </div>
  </div>
</template>

<script>
import EscritorArea from './EscritorArea.vue';

  export default {
    components: {
      EscritorArea
    },  
    data() {
    return {
      listaEscritos: []
    }
  },
  methods: {
    guardarTexto(texto) {
      this.listaEscritos.push(texto);
    }
  }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tangerine&display=swap');
.contenedor-lista{
  background-color: black;
  color: black;
  font-size: 2rem;
  font-family: 'Tangerine', cursive;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 4rem;
}
.contenedor-lista div{
  padding: 1rem;
  background-image: url('https://img.freepik.com/premium-photo/old-paper-texture-background_118047-1365.jpg?w=2000');
  margin: 1rem;
  width: 50rem;
  text-align: center;
}
</style>
