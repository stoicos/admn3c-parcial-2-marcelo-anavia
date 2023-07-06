<template>
<div>
  <span>{{frase}}</span>
  <v-btn
      class="mx-2"
      fab
      dark
      small
    
      @click="asignarFrase"
      > <v-icon dark>
        mdi-meditation
      </v-icon></v-btn>
  </div>
</template>

<script>
  export default {
    name: 'MeditacionFrase',

    data: () => ({
      frase: ''
    }),
    methods: {
      generarFrase() {
        let choose = Math.floor(Math.random() * 10) + 1;
        let frases = [
        "No puedes controlar todas las circunstancias, pero puedes controlar cómo respondes a ellas",
        "El sufrimiento es inevitable, pero el sufrimiento innecesario depende de ti",
        "No te preocupes por lo que está fuera de tu control, enfócate en lo que puedes cambiar",
        "El valor no está en evitar el dolor, sino en enfrentarlo con sabiduría y fortaleza",
        "La felicidad no depende de lo que tienes, sino de cómo piensas y actúas",
        "Acepta lo que no puedes cambiar y trabaja en mejorar lo que sí puedes",
        "¿Quién soy yo en medio de la inmensidad del universo?",
        "La virtud es la única verdadera riqueza y el único camino hacia la paz interior",
        "No temas a la adversidad, utilízala como una oportunidad para crecer y fortalecerte",
        "El presente es todo lo que realmente tienes, vívelo plenamente y con gratitud"
      ];
      return frases[choose - 1];
      },
      asignarFrase() {
        this.frase = this.generarFrase();
      }
      
    }
  }
</script>
