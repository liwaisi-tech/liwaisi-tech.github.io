
## ¿Qué hace este proyecto?

Este proyecto es una **landing page** desarrollada con **React**, **TypeScript** y **Vite**. Su objetivo es presentar la propuesta tecnológica de Liwaisi, enfocada en el sector agrícola, con una interfaz moderna, adaptable y multilingüe (español e inglés).

### Estructura y funcionamiento

- **Internacionalización**: La app detecta el idioma del navegador (español o inglés) y permite cambiarlo manualmente desde la barra de navegación.
- **Componentes principales**:
  - **Navbar**: Barra de navegación superior con selector de idioma.
  - **Hero**: Sección principal con imagen de fondo y mensaje destacado.
  - **CommunitySection**: Presenta la comunidad y muestra imágenes relacionadas.
  - **PartnersSection**: Muestra los partners de la organización.
  - **Footer**: Pie de página con enlaces de contacto y redes sociales.
- **Gestión de imágenes**: Las imágenes se gestionan desde un archivo de configuración centralizado (`src/config/images.ts`).
- **Estilos**: El diseño es responsive y utiliza CSS modularizado en `App.css` e `index.css`.

### Tecnologías utilizadas

- **React 19** y **ReactDOM**
- **TypeScript**
- **Vite** (para desarrollo y build)
- **ESLint** (con reglas recomendadas y soporte para React)
- **Licencia GPLv3**

---

## ¿Cómo ponerlo en funcionamiento?

### Desarrollo local

1. **Instala las dependencias**:
   ```bash
   npm install
   ```
2. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique Vite).

### Despliegue en GitHub Pages

Para desplegar una app de Vite+React en GitHub Pages, sigue estos pasos:

1. **Instala el paquete de despliegue**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Agrega la propiedad `homepage` en tu `package.json`**:
   ```json
   "homepage": "https://<TU_USUARIO>.github.io/<NOMBRE_DEL_REPOSITORIO>"
   ```
   Reemplaza `<TU_USUARIO>` y `<NOMBRE_DEL_REPOSITORIO>` por los valores correspondientes.

3. **Modifica los scripts en `package.json`**:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Configura Vite para rutas relativas**  
   En `vite.config.ts`, agrega la opción `base`:
   ```ts
   export default defineConfig({
     base: '/<NOMBRE_DEL_REPOSITORIO>/',
     plugins: [react()],
   })
   ```

5. **Despliega la aplicación**:
   ```bash
   npm run deploy
   ```

6. **Accede a tu página**  
   Ve a `https://<TU_USUARIO>.github.io/<NOMBRE_DEL_REPOSITORIO>` para ver tu sitio en línea.

---

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
