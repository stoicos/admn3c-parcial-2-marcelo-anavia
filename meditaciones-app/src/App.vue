<template>
<v-app>
<nav>

<v-app-bar
  color="black"
  dense
  dark
  height=70px

>
  <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

  <v-spacer></v-spacer>

  <meditacion-frase></meditacion-frase>

</v-app-bar>

<v-navigation-drawer
  v-model="drawer"
  absolute
  left
  temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <router-link to="/">Meditaciones</router-link>
          </v-list-item-title>
          <v-list-item-subtitle>
            acciones
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <router-link :to="item.link">
                {{ item.title }}
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

</nav>

<v-main>
  <router-view/>
</v-main>

</v-app>
</template>

<script>
import MeditacionFrase from './components/MeditacionFrase.vue';

export default {
  components: { MeditacionFrase },
  name: 'App',

  data: () => ({
    //
    drawer: false,
    items: [
          { title: 'Escribir', icon: 'mdi-plus-box', link: "/escribir" },
          { title: 'Mis meditaciones', icon: 'mdi-plus-box', link: "/quote" },
          { title: 'Acerca de', icon: 'mdi-account-box', link: "/about" },
        ],
        right: null,
  }),
};
</script>
