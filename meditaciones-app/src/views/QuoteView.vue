<template>
<div class="container">
 <v-btn @click="traer">Ver frases</v-btn>
 <div class="quote-cards"></div>
</div>

</template>

<script>

  export default {
    name: 'ListaView',
    methods: {
      traer(){
        let container = document.querySelector(".quote-cards")
        for(let i = 0; i < 3; i++){
          fetch('https://type.fit/api/quotes')
          .then(response => response.json())
          .then(data => 
            container.innerHTML += `
              <div stlye="margin-bottom:2rem;">
                <p><strong>"${data[i].text}"</strong></p>
                <p><i>${data[i].author}</i></p>
              </div>
            ` 
            );
  
        }

       
      }
             
    }
  }
</script>
<style scoped>
.quote-cards{
  margin: 3rem;
}
.container {
  text-align: center;
  margin-top: 4rem;
}
</style>