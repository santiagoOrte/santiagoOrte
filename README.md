# 🌿 Mi Portafolio — GitHub Pages

Portafolio personal con estética orgánica (cafés y verdes pasteles).

## Estructura del proyecto

```
portfolio/
├── index.html              ← estructura de la página (header, footer, secciones)
├── css/
│   ├── base.css            ← variables de color, tipografía, reset
│   ├── layout.css          ← header, main, footer, section-title
│   ├── cards.css           ← tarjetas de proyecto y sus componentes
│   └── decorations.css     ← fondo decorativo de ramas y hojas
├── js/
│   ├── projects.js         ← ⭐ AQUÍ editas tus proyectos
│   └── main.js             ← lógica de renderizado (no necesitas tocarlo)
├── assets/
│   ├── img/                ← imágenes de tus proyectos
│   └── fonts/              ← fuentes locales (opcional)
└── README.md
```

---

## ⭐ Cómo gestionar tus proyectos

### Añadir un proyecto
Abre `js/projects.js` y agrega un objeto al arreglo `PROJECTS`:

```js
{
  name:   "Nombre del proyecto",
  desc:   "Descripción breve de qué hace y para qué sirve.",
  tags:   ["Python", "Flask", "API"],
  github: "https://github.com/tuusuario/mi-proyecto",
  demo:   "https://mi-demo.vercel.app",   // opcional
  image:  "assets/img/mi-proyecto.png"    // opcional
}
```

### Eliminar un proyecto
Borra el objeto correspondiente del arreglo en `js/projects.js`.

### Editar un proyecto
Modifica los campos del objeto en `js/projects.js`.

### Agregar una imagen a una tarjeta
1. Coloca la imagen en `assets/img/`
2. Referencia la ruta en el campo `image`: `"assets/img/nombre.png"`

---

## 🎨 Cómo personalizar el diseño

| Quiero cambiar…            | Archivo a editar          |
|----------------------------|---------------------------|
| Colores de toda la paleta  | `css/base.css` → `:root`  |
| Título y subtítulo         | `index.html` → `<header>` |
| Tu nombre y link en footer | `index.html` → `<footer>` |
| Tamaño/layout de las tarjetas | `css/cards.css`        |
| Ramas y hojas del fondo    | `index.html` → SVG / `css/decorations.css` |
| Fuentes tipográficas       | `css/base.css` → `@import` y `--font-*` |

---

## 🚀 Publicar en GitHub Pages

1. Sube todos los archivos a tu repositorio
2. Ve a **Settings → Pages**
3. En *Source*, selecciona la rama `main` y la carpeta raíz `/`
4. Guarda — en unos segundos tendrás tu link `https://tuusuario.github.io/repositorio`

---

## 🌱 Notas

- Los proyectos no se guardan en ningún servidor ni base de datos — todo está en `js/projects.js`
- Para añadir o quitar proyectos hay que editar el archivo y hacer commit/push
- No hay panel de admin en la web, lo cual es intencional: así solo tú (con acceso al repo) puedes modificar el contenido
