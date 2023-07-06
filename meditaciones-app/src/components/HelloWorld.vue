<template>
  <div class="contenedor">
    <img src="../assets/phi.png" alt="logo de la filosofía">
    <h1>Bienvenido a Meditaciones</h1>
    <p>La app sin distracciones</p>
    <v-btn
    elevation="2"
    to="/escribir"
    >Comenzar</v-btn>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({

    })
  }
</script>

<style scoped>
.contenedor{
  background-image: url('../assets/wall.jpg');
  height: 100vh;
  text-align: center;
  color: white;

}
.contenedor img{
  display: block;
  width: 24rem;
  padding: 3rem;
  margin: 0 auto;
  text-shadow: 2px 2px 8px #000000;
}
h1 {
  width: 24rem;
  margin: 0 auto;
  text-shadow: 2px 2px 8px #000000;
}
p{
  text-shadow: 2px 2px 8px #000000;
}
</style>
