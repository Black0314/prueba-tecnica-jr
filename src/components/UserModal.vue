<template>
  <v-dialog
    v-model="dialog"
    max-width="600px"
    transition="dialog-transition"
  >
    <v-card class="user-modal">
      <v-card-title class="d-flex align-center pa-6">
        <v-avatar size="80" class="mr-4">
          <v-img
            :src="user.avatar"
            :alt="`Avatar de ${user.name}`"
            cover
          />
        </v-avatar>
        <div>
          <h2 class="text-h5 mb-1">{{ user.name }}</h2>
          <p class="text-body-2 text-medium-emphasis mb-0">{{ user.email }}</p>
        </div>
        <v-spacer />
        <v-btn
          icon
          variant="text"
          @click="closeModal"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider />

      <v-card-text class="pa-6">
        <v-row>
          <v-col cols="12" md="6">
            <div class="detail-section">
              <v-icon class="detail-icon mr-2">mdi-map-marker</v-icon>
              <div>
                <h4 class="text-subtitle-1 mb-1">Dirección</h4>
                <p class="text-body-2 mb-0">
                  {{ user.address.street }} {{ user.address.suite }}<br>
                  {{ user.address.city }}, {{ user.address.zipcode }}
                </p>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <div class="detail-section">
              <v-icon class="detail-icon mr-2">mdi-phone</v-icon>
              <div>
                <h4 class="text-subtitle-1 mb-1">Teléfono</h4>
                <p class="text-body-2 mb-0">{{ user.phone }}</p>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <div class="detail-section">
              <v-icon class="detail-icon mr-2">mdi-office-building</v-icon>
              <div>
                <h4 class="text-subtitle-1 mb-1">Compañía</h4>
                <p class="text-body-2 mb-1">{{ user.company.name }}</p>
                <p class="text-caption text-medium-emphasis">{{ user.company.catchPhrase }}</p>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <div class="detail-section">
              <v-icon class="detail-icon mr-2">mdi-web</v-icon>
              <div>
                <h4 class="text-subtitle-1 mb-1">Sitio web</h4>
                <v-btn
                  :href="`https://${user.website}`"
                  target="_blank"
                  variant="text"
                  color="primary"
                  size="small"
                  class="pa-0"
                >
                  {{ user.website }}
                  <v-icon right size="small">mdi-open-in-new</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="pa-6">
        <v-spacer />
        <v-btn
          variant="outlined"
          @click="closeModal"
        >
          Cerrar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'UserModal',
  props: {
    user: {
      type: Object,
      default: null
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  computed: {
    dialog: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  methods: {
    closeModal() {
      this.dialog = false
    }
  }
}
</script>

<style scoped>
.user-modal {
  border-radius: 12px;
}

.detail-section {
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
}

.detail-icon {
  color: #1976D2;
  margin-top: 2px;
}

.v-card-title {
  background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%);
}
</style>