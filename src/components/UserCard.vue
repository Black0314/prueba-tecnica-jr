<template>
<v-card
    class="user-card"
    elevation="2"
    hover
>
<v-card-text class="pa-4">
    <div class="d-flex align-center mb-3">
        <v-avatar
            size="64"
            class="mr-4"
            >
            <v-img
                :src="user.avatar"
                :alt="`Avatar of ${user.name}`"
                cover
            />
        </v-avatar>

        <div class="flex-grow-1">
            <h3 class="text-h6 mb-1">{{ user.name }}</h3>
            <p class="text-body-2 text-medium-emphasis mb-0">{{ user.email }}</p>
        </div>
    </div>

    <div class="d-flex justify-end">
        <v-btn
            color="primary"
            variant="outlined"
            size="small"
            @click="showDetails"
        >
        <v-icon left> mdi-eye</v-icon>
        Ver más
    </v-btn>
    </div>
</v-card-text>
</v-card>
</template>

<script>
export default {
    name: 'UserCard',
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    emits: ['show-details'],
    methods: {
        showDetails() {
            this.$emit('show-details', this.user);
        }
    }
}
</script>

<style scoped>
.user-card {
    transition: transform 0.2s ease-in-out;
    height: 100%;
     }

     .user-card:hover {
        transform: translateY(-2px);
         }

         .v-avatar {
            border: 2px solid #e0e0e0;
         }
</style>