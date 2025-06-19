<template>
  <div class="user-list">
    <!-- Indicador de carga -->
    <div v-if="loading" class="text-center pa-8">
      <v-progress-circular
        indeterminate
        color="primary"
        size="64"
      />
      <p class="text-h6 mt-4">Cargando usuarios...</p>
    </div>

    <!-- Mensaje de error -->
    <v-alert
      v-else-if="error"
      type="error"
      variant="tonal"
      class="ma-4"
    >
      <v-icon icon="mdi-alert-circle" />
      {{ error }}
      <template #append>
        <v-btn
          variant="text"
          size="small"
          @click="loadUsers"
        >
          Reintentar
        </v-btn>
      </template>
    </v-alert>

    <!-- Lista de usuarios -->
    <div v-else>
      <!-- Mensaje cuando no hay resultados -->
      <div v-if="filteredUsers.length === 0" class="text-center pa-8">
        <v-icon size="64" color="grey-lighten-1">mdi-account-search</v-icon>
        <p class="text-h6 mt-4 text-medium-emphasis">
          No se encontraron usuarios
        </p>
        <p class="text-body-2 text-medium-emphasis">
          Intenta con otro término de búsqueda
        </p>
      </div>

      <!-- Grid de usuarios -->
      <v-row v-else>
        <v-col
          v-for="user in filteredUsers"
          :key="user.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <UserCard
            :user="user"
            @show-details="showUserDetails"
          />
        </v-col>
      </v-row>
    </div>

    <!-- Modal de detalles -->
    <UserModal
      v-model="showModal"
      :user="selectedUser"
    />
  </div>
</template>

<script>
import UserService from '@/services/UserService'
import UserCard from './UserCard.vue'
import UserModal from './UserModal.vue'

export default {
  name: 'UserList',
  components: {
    UserCard,
    UserModal
  },
  props: {
    searchQuery: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      users: [],
      loading: false,
      error: null,
      showModal: false,
      selectedUser: null
    }
  },
  computed: {
    filteredUsers() {
      if (!this.searchQuery) {
        return this.users
      }
      
      return this.users.filter(user =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    async loadUsers() {
      this.loading = true
      this.error = null
      
      try {
        this.users = await UserService.getUsers()
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    
    showUserDetails(user) {
      this.selectedUser = user
      this.showModal = true
    }
  }
}
</script>

<style scoped>
.user-list {
  min-height: 400px;
}
</style>