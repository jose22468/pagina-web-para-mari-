const curiosidades = [
  "Le gusta convertir ideas simples en cosas visuales.",
  "Disfruta ver cómo una página cobra vida con animaciones.",
  "Le llama la atención crear juegos pequeños y divertidos.",
  "Le gusta aprender haciendo proyectos prácticos.",
  "Suele pensar en cosas creativas mientras conversa.",
  "Le interesa que el diseño se vea bonito y claro.",
  "Le gusta separar el código en archivos organizados.",
  "Busca que las páginas sean fáciles de entender.",
  "Disfruta experimentar con colores y estilos.",
  "Le encanta cuando una idea se puede mostrar de forma interactiva.",
  "Le gusta sorprender con proyectos que se pueden abrir en el navegador.",
  "Prefiere explicaciones sencillas y directas.",
  "Le motiva construir cosas que otra persona pueda probar.",
  "Le parece genial combinar lógica con creatividad.",
  "Le gusta que el resultado final se vea limpio.",
  "Disfruta compartir lo que hace con amigos.",
  "Le gusta probar ideas sin miedo a equivocarse.",
  "Puede pasar de una idea a un prototipo rápido.",
  "Le interesa que el proyecto tenga personalidad.",
  "Le gustan las páginas con detalles visuales agradables.",
  "Le gusta ver resultados inmediatos en pantalla.",
  "Le parece divertido jugar con botones, tarjetas y efectos.",
  "Le gusta aprender nuevas herramientas poco a poco.",
  "Le inspira transformar una charla en una idea de código.",
  "Le gusta construir algo que haga sonreír a alguien.",
  "Le interesa hacer páginas con contenido propio.",
  "Le gusta que la estructura del sitio esté bien ordenada.",
  "Le divierte imaginar un proyecto antes de programarlo.",
  "Le gusta que el código sea claro y reutilizable.",
  "Le parece útil separar HTML, CSS y JavaScript.",
  "Le gusta crear cosas que parezcan sencillas pero estén bien pensadas.",
  "Le interesa el lado creativo de la tecnología.",
  "Le gusta probar efectos como sombras y gradientes.",
  "Le motiva terminar un proyecto y verlo funcionando.",
  "Le gusta cuando una página se siente moderna.",
  "Le gusta hacer ideas que puedan enseñarse con orgullo.",
  "Le interesa que cada sección tenga su propósito.",
  "Le gusta cuando un proyecto tiene un toque personal.",
  "Le divierte imaginar distintas versiones de la misma página.",
  "Le gusta aprender viendo ejemplos prácticos.",
  "Le interesa construir experiencias, no solo escribir texto.",
  "Le gusta que el navegador se convierta en un pequeño escenario.",
  "Le inspira convertir una conversación en un proyecto.",
  "Le gusta tener libertad para probar cosas nuevas.",
  "Le parece divertido jugar con contenido dinámico.",
  "Le gusta que una web tenga una historia detrás.",
  "Le interesa hacer algo bonito, simple y funcional.",
  "Le gustan los proyectos que se pueden personalizar fácilmente.",
  "Le gusta que una idea pequeña pueda crecer mucho.",
  "Le encanta cuando el código ayuda a expresar creatividad."
];

const grid = document.getElementById("factsGrid");

curiosidades.forEach((texto, index) => {
  const card = document.createElement("article");
  card.className = "card fact";
  card.innerHTML = `
    <h3>Dato ${index + 1}</h3>
    <p>${texto}</p>
  `;
  grid.appendChild(card);
});
