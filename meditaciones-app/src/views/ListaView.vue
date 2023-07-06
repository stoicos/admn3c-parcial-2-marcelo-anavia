<template>
<div>

  <listar-escritos></listar-escritos>
</div>

</template>

<script>
  import ListarEscritos from '../components/ListarEscritos'


  export default {
    name: 'ListaView',
    props:{
      escritosLista: String
    },
    components: {
      ListarEscritos,
    }
  }
</script>
