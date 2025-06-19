<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar
      color="primary"
      dark
      elevation="2"
    >
      <v-app-bar-title>
        <v-icon left class="mr-2">mdi-account-group</v-icon>
        Gestor de Usuarios
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid class="pa-4">
        <router-view />
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer class="bg-grey-lighten-3 pa-4">
      <div class="text-center w-100">
        <p class="text-body-2 text-medium-emphasis mb-0">
          Desarrollado con Vue 3 + Vuetify 3
        </p>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { RouterView } from 'vue-router'
export default {
  name: 'App',
  components: {
    RouterView
  }
}
</script>

<style>
/* Estilos globales */
html {
  overflow-y: auto;
}

.v-application {
  font-family: 'Roboto', sans-serif;
}

/* Animaciones personalizadas */
.dialog-transition-enter-active,
.dialog-transition-leave-active {
  transition: all 0.3s ease;
}

.dialog-transition-enter-from,
.dialog-transition-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>