/**
 * projects.js
 * ============
 * Aquí se define proyectos
 *
 * Campos disponibles por proyecto:
 *   name    (string)   – Nombre del proyecto              [obligatorio]
 *   desc    (string)   – Descripción breve                [obligatorio]
 *   tags    (array)    – Etiquetas tecnológicas            [opcional]
 *   github  (string)   – URL del repositorio en GitHub    [opcional]
 *   demo    (string)   – URL de demo en vivo              [opcional]
 *   image   (string)   – Ruta a imagen en assets/img/     [opcional]
 *
 * Ejemplo:
 * {
 *   name:   "Mi App",
 *   desc:   "Una app que hace cosas geniales.",
 *   tags:   ["Python", "Flask", "SQLite"],
 *   github: "https://github.com/tuusuario/mi-app",
 *   demo:   "https://mi-app.vercel.app",
 *   image:  "assets/img/mi-app.png"
 * }
 */

const PROJECTS = [
  {
    name:   "Proyecto de ejemplo",
    desc:   "Este es un proyecto de muestra. Edita el archivo js/projects.js para reemplazarlo con los tuyos.",
    tags:   ["Demo", "Inicio"],
    github: "https://github.com",
    demo:   "",
    image:  ""
  },

  {
    name:   "Arbol Binario",
    desc:   "un  projecto de arbol binario que inserta, elimina y recorre IN PRE y POST onden \nMostrandolo Graficamente ",
    tags:   ["Java", "Arbol", "Grafico"],
    github: "https://github.com/santiagoOrte/Projects/tree/main/BinaryTree",
    demo:   "",
    image:  ""
  },
];
