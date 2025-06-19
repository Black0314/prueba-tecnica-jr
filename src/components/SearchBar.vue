<template>
 <v-text-field
    v-model="searchQuery"
    placeholder="Buscar usuarios por nombre..."
    prepend-inner-icon="mdi-magnify"
    variant="outlined"
    clearable
    density="comfortable"
    class="search-bar"
    @input="onSearch"
  />
</template>

<script>
export default {
    name: 'SearchBar',
    emits:['search'],
    data() {
        return {
            searchQuery: ''
        }
    },
    methods: {
        onSearch() {
            this.$emit('search', this.searchQuery)
        }
    }
}
</script>
<style scoped>
.search-bar {
    max-width: 500px;
    margin: 0 auto;
}
</style>