
<template>
  <div class="home">
    <!-- Header con título y buscador -->
    <div class="text-center mb-6">
      <h1 class="text-h4 mb-4 text-gradient">Directorio de Usuarios</h1>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Explora y busca información detallada de usuarios
      </p>
      <SearchBar @search="handleSearch" />
    </div>

    <!-- Lista de usuarios -->
    <UserList :search-query="searchQuery" />
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import UserList from '@/components/UserList.vue'
import UserModal from '@/components/UserModal.vue'
import { userService } from '@/services/api.js'

export default {
  name: 'HomeView',
  components: {
    SearchBar,
    UserList,
    UserModal
  },
  setup() {
    const users = ref([])
    const loading = ref(false)
    const error = ref(null)
    const searchQuery = ref('')
    const selectedUser = ref(null)
    const showModal = ref(false)

    const filteredUsers = computed(() => {
      if (!searchQuery.value) {
        return users.value
      }
      return users.value.filter(user =>
        user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    })

    const fetchUsers = async () => {
      loading.value = true
      error.value = null
      try {
        users.value = await userService.getUsers()
      } catch (err) {
        error.value = 'Error al cargar los usuarios. Por favor, intenta de nuevo.'
        console.error('Error fetching users:', err)
      } finally {
        loading.value = false
      }
    }

    const handleSearch = (query) => {
      searchQuery.value = query
    }

    const showUserDetails = (user) => {
      selectedUser.value = user
      showModal.value = true
    }

    const closeModal = () => {
      showModal.value = false
      selectedUser.value = null
    }

    onMounted(() => {
      fetchUsers()
    })

    return {
      users,
      filteredUsers,
      loading,
      error,
      selectedUser,
      showModal,
      handleSearch,
      showUserDetails,
      closeModal
    }
  }
}
</script>

<style scoped>
.home {
  padding: 2rem 0;
}
</style>
