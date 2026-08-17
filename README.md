# LIWAISI TECH Landing Page

## ¿Qué hace este proyecto?

Este proyecto es la **landing page** institucional y comercial de **Liwaisi Tech**, desarrollada con **React**, **TypeScript** y **Vite**. Su objetivo es presentar la propuesta tecnológica de Liwaisi, orientada al sector rural y al comercio local, con una interfaz moderna, de bajo impacto ambiental (eco-diseño) y multilingüe (español e inglés).

### Estructura y funcionamiento

- **Internacionalización**: Detección automática del idioma del navegador (español o inglés) con selector manual en la barra de navegación.
- **Componentes principales**:
  - **Navbar**: Barra de navegación superior con logotipo institucional y selector de idioma.
  - **Hero**: Sección principal con mensaje destacado y llamados a la acción.
  - **AboutSection**: Presentación de la misión, visión y metodologías de impacto.
  - **CommunitySection**: Comunidad e iniciativas de aprendizaje digital.
  - **ImpactSection**: Huella de proyectos tecnológicos y talleres en campo.
  - **PartnersSection**: Aliados y colaboradores estratégicos.
  - **Footer**: Pie de página con enlaces institucionales, contacto y enlace a las políticas de privacidad.
  - **Soki AI - Privacidad (`/soki/privacidad/`)**: Página estática de términos y tratamiento de datos personales para Soki AI servida directamente con mínimo impacto de CO₂.
- **Gestión de imágenes**: Configuración centralizada en `src/config/images.ts`.
- **Identidad visual**: Basada en el *Manual de Identidad de Marca V3.3* con paleta oficial (Verde Abismo, Verde Tierra, Verde Clorofila, Gris Técnico, Blanco Nube).

### Tecnologías utilizadas

- **Bun** (Gestor de paquetes y runtime)
- **React 19** y **ReactDOM**
- **TypeScript**
- **Vite** (para desarrollo y empaquetado multi-página)
- **ESLint** (con reglas recomendadas para React y TypeScript)
- **Licencia GPLv3**

---

## ¿Cómo ponerlo en funcionamiento?

### Gestor de paquetes: Bun (Recomendado)

1. **Instala las dependencias**:
   ```bash
   bun install
   ```

2. **Comandos equivalentes diarios**:
   - **Iniciar desarrollo**: `bun dev`
   - **Compilar**: `bun run build`
   - **Agregar paquete**: `bun add <nombre>`
   - **Agregar dependencia de desarrollo**: `bun add -d <nombre>`
   - **Ejecutar linter**: `bun run lint`

   La aplicación local estará disponible en `http://localhost:5173`.

---

## Despliegue en GitHub Pages

El proyecto cuenta con integración y despliegue continuo (**CI/CD**) automatizado mediante GitHub Actions (`.github/workflows/deploy.yml`).

Cada vez que se realiza un `push` a la rama `main`:
1. GitHub Actions configura el entorno con **Bun**.
2. Instala dependencias con `bun install`.
3. Compila el sitio y sus páginas asociadas con `bun run build`.
4. Publica automáticamente el contenido de la carpeta `dist/` en GitHub Pages (`liwaisi.tech`).
