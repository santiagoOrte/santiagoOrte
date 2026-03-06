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
    desc:   "Este es un proyecto de muestra.",
    tags:   ["Demo", "Inicio"],
    github: "",
    demo:   "",
    image:  ""
  },

  {
    name:   "Arbol Binario",
    desc:   "Un proyecto de arbol binario que Inserta, Elimina y Recorre IN, PRE y POST orden \nGraficamente ",
    tags:   ["Java", "Arbol", "Grafico"],
    github: "https://github.com/santiagoOrte/Projects/tree/main/BinaryTree",
    demo:   "",
    image:  "{css,js,assets/img,assets/imProj/BinaryTree.PNG"
  },
];
