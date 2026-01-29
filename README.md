# A10 Nutrición - Web Corporativa

Web corporativa profesional de nutrición y planificación física construida con Astro, Tailwind CSS, React y Decap CMS.

## 🚀 Características

- ✅ **100% estática** - Rendimiento óptimo
- ✅ **SEO-friendly** - Meta tags, Open Graph, sitemap
- ✅ **Responsive** - Diseño adaptable a todos los dispositivos
- ✅ **Animaciones modernas** - React + Framer Motion para UX premium
- ✅ **Blog con CMS** - Decap CMS para gestión sin conocimientos técnicos
- ✅ **Formulario funcional** - Netlify Forms sin backend
- ✅ **Accesible** - Buenas prácticas de accesibilidad
- ✅ **Rápida** - Optimizada para Core Web Vitals
- ✅ **Deploy gratuito** - Netlify con CI/CD automático
- ✨ **View Transitions** - Transiciones suaves entre páginas

## 📋 Requisitos Previos

- Node.js 20.x o superior
- npm o yarn
- Cuenta de GitHub (para el CMS)
- Cuenta de Netlify (para deploy y formularios)

## 🛠️ Instalación

### 1. Clonar o descargar el proyecto

```bash
cd a10nutricion
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar servidor de desarrollo

```bash
npm run dev
```

La web estará disponible en `http://localhost:4321`

## 📂 Estructura del Proyecto

```
/
├── public/                  # Archivos estáticos
│   ├── admin/              # Configuración Decap CMS
│   │   ├── index.html
│   │   └── config.yml
│   ├── images/             # Imágenes públicas (logos)
│   ├── favicon.svg
│   └── og-image.svg
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── Header.astro           # Cabecera con logos
│   │   ├── Footer.astro           # Pie de página
│   │   ├── ServiceCard.astro      # Tarjetas de servicios
│   │   ├── BlogCard.astro         # Tarjetas de blog
│   │   ├── MobileMenu.tsx         # Menú móvil animado (React)
│   │   ├── AnimatedSection.tsx    # Secciones con scroll animations
│   │   ├── AnimatedCard.tsx       # Cards animadas con hover
│   │   └── StickyHeader.tsx       # Header sticky con scroll effects
│   ├── content/            # Contenido del blog
│   │   ├── config.ts       # Schema de Content Collections
│   │   └── blog/           # Posts en Markdown
│   ├── layouts/            # Layouts de página
│   │   ├── BaseLayout.astro       # Layout base con View Transitions
│   │   └── PageLayout.astro
│   ├── pages/              # Páginas y rutas
│   │   ├── index.astro            # Home (con animaciones)
│   │   ├── contacto.astro
│   │   ├── sobre-nosotros.astro
│   │   ├── privacidad.astro
│   │   ├── terminos.astro
│   │   ├── 404.astro
│   │   ├── servicios/
│   │   │   ├── nutricion.astro
│   │   │   └── planificacion-fisica.astro
│   │   ├── blog/
│   │   │   ├── index.astro        # Lista de posts
│   │   │   └── [slug].astro       # Post individual
│   │   └── contacto/
│   │       └── gracias.astro      # Página de confirmación
│   └── types/              # Definiciones de tipos TypeScript
│       └── netlify-identity.d.ts
├── astro.config.mjs        # Configuración de Astro + React
├── tailwind.config.mjs     # Configuración de Tailwind
├── tsconfig.json
├── netlify.toml            # Configuración de Netlify
└── package.json
```

## 🎨 Comandos Disponibles

| Comando           | Acción                                       |
|-------------------|----------------------------------------------|
| `npm run dev`     | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Construye el sitio para producción en `./dist/` |
| `npm run preview` | Vista previa local del build de producción   |
| `npm run astro`   | Ejecuta comandos de Astro CLI               |

## ✨ Animaciones

Este proyecto incluye animaciones modernas con **React** y **Framer Motion**.

### Componentes Animados

- **MobileMenu**: Menú móvil con icono hamburguesa animado
- **AnimatedSection**: Animaciones al hacer scroll (fade-up, fade-down, fade-left, fade-right)
- **AnimatedCard**: Cards con hover effects y entrada animada
- **StickyHeader**: Header sticky con efectos de scroll y cambio de fondo

Todos los componentes animados se encuentran en la carpeta [src/components](src/components).

### View Transitions

Transiciones suaves entre páginas usando la API de View Transitions de Astro (configurada en [BaseLayout.astro](src/layouts/BaseLayout.astro)).

## 📝 Gestión del Blog con Decap CMS

### Acceso al CMS

1. **En desarrollo local:**
   - Accede a `http://localhost:4321/admin`
   - Usa el modo de prueba (test backend)

2. **En producción (Netlify):**
   - Accede a `https://tu-sitio.netlify.app/admin`
   - Inicia sesión con GitHub o Netlify Identity

### Configurar Netlify Identity (Producción)

1. En tu dashboard de Netlify, ve a **Site settings** > **Identity**
2. Haz clic en **Enable Identity**
3. En **Registration preferences**, selecciona **Invite only**
4. En **External providers**, habilita **GitHub** (recomendado)
5. En **Services** > **Git Gateway**, haz clic en **Enable Git Gateway**

### Crear un Nuevo Post

1. Accede a `/admin`
2. Haz clic en **Blog** > **New Blog**
3. Completa los campos:
   - **Título**: Título del artículo
   - **Descripción**: Resumen breve (SEO)
   - **Fecha de Publicación**: Fecha y hora
   - **Autor**: Nombre del autor
   - **Imagen Destacada**: Subir imagen (1200x630px recomendado)
   - **Etiquetas**: Tags separados por comas
   - **Contenido**: Usa el editor Markdown
4. **Save** (guarda como borrador) o **Publish** (publica inmediatamente)

### Formato del Contenido

El contenido usa **Markdown**. Algunos ejemplos:

```markdown
# Título Principal

## Subtítulo

**Texto en negrita**

*Texto en cursiva*

- Lista item 1
- Lista item 2

[Enlace](https://ejemplo.com)

![Imagen alt text](/images/blog/imagen.jpg)
```

## 📮 Configuración del Formulario de Contacto

El formulario usa **Netlify Forms** y funciona automáticamente al hacer deploy en Netlify.

### Configuración en Netlify:

1. Ve a **Site settings** > **Forms**
2. Los envíos aparecerán en **Forms** > **Verified submissions**
3. Configura notificaciones:
   - Email
   - Webhook
   - Slack (opcional)

### Campos del formulario:

- Nombre completo (requerido)
- Email (requerido)
- Teléfono (opcional)
- Servicio de interés (select)
- Mensaje (requerido)
- Aceptación de privacidad (requerido)

## 🚀 Deploy en Netlify

### Opción 1: Deploy desde GitHub (Recomendado)

1. **Sube el proyecto a GitHub:**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/a10nutricion.git
git push -u origin main
```

2. **Conecta con Netlify:**
   - Ve a [Netlify](https://netlify.com)
   - Haz clic en **Add new site** > **Import an existing project**
   - Selecciona **GitHub** y autoriza
   - Selecciona el repositorio `a10nutricion`

3. **Configuración del build:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Haz clic en **Deploy site**

### Opción 2: Deploy manual

```bash
npm run build
npx netlify deploy --prod
```

### Configuración Post-Deploy

1. **Dominio personalizado** (opcional):
   - Site settings > Domain management
   - Add custom domain

2. **HTTPS**: Se activa automáticamente

3. **Variables de entorno** (si las necesitas):
   - Site settings > Environment variables

## 🎯 Personalización

### Cambiar Colores

Edita [tailwind.config.mjs](tailwind.config.mjs):

```javascript
colors: {
  primary: {
    // Cambia estos valores
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
  }
}
```

### Modificar Contenido

- **Textos de páginas**: Edita archivos en [src/pages/](src/pages)
- **Información de contacto**: Edita [src/components/Footer.astro](src/components/Footer.astro)
- **Menú de navegación**: Edita [src/components/Header.astro](src/components/Header.astro)

### Añadir Imágenes

1. Coloca imágenes en [public/images/](public/images)
2. Referencia como `/images/nombre-imagen.jpg`

**Tamaños recomendados:**
- Open Graph: 1200x630px
- Imágenes de blog: 1200x630px
- Logotipo: 400x400px (el proyecto incluye `a10logo_black.png` y `a10logo_white.png`)

## 📊 SEO

El sitio incluye:

- ✅ Meta tags dinámicos
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ URLs semánticas
- ✅ Sitemap automático
- ✅ Semantic HTML

### Configurar SEO por página

Cada página incluye props para SEO:

```astro
<PageLayout
  title="Tu Título | A10 Nutrición"
  description="Tu descripción para SEO"
  image="/images/og-image.jpg"
>
```

## 🔧 Troubleshooting

### Error: "Module not found"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Formulario no funciona en local

Es normal. Netlify Forms solo funciona en producción o con [Netlify Dev](https://docs.netlify.com/cli/get-started/).

### CMS no muestra contenido

Verifica que:
1. Los archivos estén en [src/content/blog/](src/content/blog)
2. Incluyan el frontmatter correcto
3. El formato sea `.md`

### Build falla en Netlify

Revisa:
1. Node version en [netlify.toml](netlify.toml) (actualmente configurado en v20)
2. Que todas las dependencias estén en [package.json](package.json)
3. Los logs de build en Netlify
4. Errores de TypeScript - el comando de build incluye `astro check`

## 📚 Recursos Adicionales

- [Documentación de Astro](https://docs.astro.build)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Decap CMS Docs](https://decapcms.org/docs/)
- [Netlify Forms](https://docs.netlify.com/forms/setup/)
- [Netlify Identity](https://docs.netlify.com/visitor-access/identity/)

## 🤝 Soporte

Si tienes problemas o preguntas:

1. Revisa la documentación oficial de cada tecnología
2. Consulta los issues de GitHub de los proyectos
3. Contacta con el equipo de desarrollo

## 📄 Licencia

Este proyecto es propiedad de A10 Nutrición.

---

**Desarrollado con ❤️ usando Astro, Tailwind CSS y Decap CMS**
