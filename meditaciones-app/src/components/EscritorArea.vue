<template>
<div id="fondo">
  <v-container fluid>
    <div class="contenedor-textarea">
      <div class="textarea">
    <v-textarea
      v-model="valorTextarea"
      class="mi-textarea"
      label="Mi escrito"
      color="black"
      no-resize
      rows="30"
    ></v-textarea>
    <v-btn
      block
      @click="guardarEscrito"
      >
      Guardar
    </v-btn>
    </div>
     </div>
  </v-container>
  
</div>
</template>

<script>
  export default {
    name: 'EscritorArea',
    data: () => ({
      listaEscritos: [],
      valorTextarea: ''
    }),
    methods: {
      guardarEscrito() {
        this.$emit('texto-guardado', this.valorTextarea);
        this.valorTextarea = '';
      }
    }
  }
</script>
<style scoped>
#fondo{
  background-image: url('../assets/wall2.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
}
.contenedor-textarea{
  width: 60%;
  min-width: 29rem;

  margin-top:3rem ;
  margin-left: auto;
  margin-right: 4rem;
  margin-bottom: 4rem;
  background-color: rgba(255, 255, 255, 0.6);

}
.textarea{
  padding: 1rem 1rem;
}
.mi-textarea textarea{
  color: white !important;
}

</style>