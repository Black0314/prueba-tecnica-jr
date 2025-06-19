# 👥 User Manager App

Una aplicación web moderna desarrollada con Vue 3 y Vuetify 3 que consume la API pública de JSONPlaceholder para mostrar un directorio de usuarios con funcionalidades de búsqueda y visualización detallada.

## 🚀 Características

- ✅ **Listado de usuarios** con avatar, nombre y email
- ✅ **Búsqueda en tiempo real** por nombre de usuario
- ✅ **Modal de detalles** con información completa
- ✅ **Diseño responsive** adaptado a móviles y escritorio
- ✅ **Indicadores de carga** y manejo de errores
- ✅ **Animaciones suaves** en modales y cards
- ✅ **Servicios separados** para consumo de API
- ✅ **Estilos personalizados** con CSS avanzado

## 🛠️ Tecnologías Utilizadas

- **Vue 3** (Composition API)
- **Vuetify 3** - Framework de UI Material Design
- **Vue Router** - Enrutamiento SPA
- **Vite** - Herramienta de build ultrarrápida
- **Sass** - Preprocesador CSS
- **ESLint + Prettier** - Linting y formateo de código

## 📦 Instalación

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/user-manager-app.git
cd user-manager-app
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Acceder a la aplicación**
Abre tu navegador en `http://localhost:5173`

## 🏗️ Scripts Disponibles

```bash
# Ejecutar servidor de desarrollo
npm run dev

# Crear build de producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint

# Formatear código
npm run format
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes Vue
│   ├── SearchBar.vue   # Barra de búsqueda
│   ├── UserCard.vue    # Card individual de usuario
│   ├── UserList.vue    # Lista de usuarios
│   └── UserModal.vue   # Modal con detalles
├── services/           # Servicios de API
│   └── UserService.js  # Servicio para consumir usuarios
├── plugins/            # Configuración de plugins
│   └── vuetify.js     # Configuración de Vuetify
├── views/              # Vistas principales
│   └── HomeView.vue   # Vista principal
├── assets/             # Recursos estáticos
│   └── main.css       # Estilos globales
├── router/             # Configuración de rutas
│   └── index.js
├── App.vue            # Componente raíz
└── main.js            # Punto de entrada
```

## 🎨 Decisiones Técnicas

### Arquitectura de Componentes
- **Separación clara de responsabilidades**: Cada componente tiene una función específica
- **Comunicación por eventos**: Los componentes hijo emiten eventos hacia los padres
- **Props tipadas**: Validación de tipos para mayor robustez

### Gestión de Estado
- **Estado local**: Uso de `data()` y `computed` para estado simple
- **Servicios**: Lógica de API separada en servicios reutilizables

### Estilos y UI
- **Vuetify**: Framework Material Design para componentes consistentes
- **CSS personalizado**: Variables CSS y animaciones para mejorar UX
- **Responsive**: Grid system de Vuetify para adaptabilidad

### Manejo de Errores
- **Try-catch**: Captura de errores en llamadas a API
- **Estados de carga**: Indicadores visuales durante peticiones
- **Mensajes amigables**: Feedback claro para el usuario

### Optimizaciones
- **Lazy loading**: Carga diferida de componentes de rutas
- **Debounce implícito**: Vue maneja automáticamente las actualizaciones
- **Avatares optimizados**: Uso de servicio externo para imágenes

## 🌐 API Utilizada

- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Avatares**: `https://i.pravatar.cc/150?img={id}`

## 📱 Responsive Design

La aplicación se adapta a diferentes tamaños de pantalla:
- **Móvil**: 1 columna
- **Tablet**: 2 columnas  
- **Desktop**: 3-4 columnas

## 🚀 Despliegue

### Vercel (Recomendado)

1. **Crear cuenta en Vercel**
2. **Conectar repositorio de GitHub**
3. **Configurar build**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Deploy automático** en cada push

### Netlify

1. **Crear cuenta en Netlify**
2. **Drag & drop** de la carpeta `dist` después de `npm run build`
3. **O conectar con GitHub** para deploy automático

### GitHub Pages

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar script en package.json
"deploy": "gh-pages -d dist"

# Build y deploy
npm run build
npm run deploy
```

## 🔧 Variables de Entorno

Crear archivo `.env.local`:

```env
VITE_API_BASE_URL=https://jsonplaceholder.typicode.com
VITE_APP_TITLE=User Manager App
```

## 🤝 Contribución

1. Fork del proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)

## 🙏 Agradecimientos

- [Vue.js](https://vuejs.org/) por el framework reactivo
- [Vuetify](https://vuetifyjs.com/) por los componentes Material Design
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) por la API gratuita
- [Pravatar](https://pravatar.cc/) por los avatares aleatorios
