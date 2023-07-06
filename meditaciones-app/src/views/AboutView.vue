<template>

     <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          DATOS
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Marcelo Anavia
        </v-list-item-title>
        <v-list-item-subtitle>marcelo.anavia@davinci.edu.ar</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ><img src="https://ih1.redbubble.net/image.4178614063.6282/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg" alt="marco aurelio"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        
      >
       <a href="https://github.com/stoicos" style="text-decoration: none; color:black;">GITHUB</a> 
      </v-btn>
    </v-card-actions>
  </v-card>


</template>
<style scoped>
.mx-auto{
  margin-top: 4rem;
}
</style>